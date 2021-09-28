import React, { useEffect, useState } from 'react'
import './App.scss';
import curriculum from './data/curriculum.json';
import Submodule from './components/Submodule';
import Nav from './components/Nav';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

const escapeHTML = (text) => {
	var tagsToReplace = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;'
	};
	return text.replace(/[&<>]/g, function (tag) {
		return tagsToReplace[tag] || tag;
	});
};

const parseText = (text) => {
	let r = text;
	r = escapeHTML(r);
	r = r.replaceAll('\r\n', '<br/>');
	r = r.replaceAll(/\*\*(.*?)\*\*/g, '<b>$1</b>');
	r = r.replaceAll(/\*(.*?)\*/g, '<i>$1</i>');
	r = r.replaceAll(/`(.*?)`/g, '<code>$1</code>');
	return r;
}

function App() {
	const [flashcards, setFlashcards] = useState([]);
	const [submodules, setSubmodules] = useState([]);

	useEffect(() => {
		const initialFlashcards = [];
		const initialSubmodules = [];
		curriculum.modules.forEach(module => {
			if (module.submodules) {
				module.submodules.forEach(submodule => {
					const idCode = `sub${submodule.title.substr(0, 4).replace('.', '')}`;
					submodule.flashcards && submodule.flashcards.forEach(flashcard => {
						initialFlashcards.push({
							front: parseText(flashcard.front),
							back: parseText(flashcard.back),
							submoduleIdCode: idCode,
							showBack: false,
							moreInfoItems: flashcard.moreInfo ? flashcard.moreInfo : [],
							status: 'new'
						});
					});
					initialSubmodules.push({
						title: submodule.title,
						idCode
					});
				});
			}
		});
		console.log(localStorage.getItem('flashcards'));
		if (localStorage.getItem('flashcards') === null) {
			setFlashcards(initialFlashcards);
		} else {
			setFlashcards(JSON.parse(localStorage.getItem('flashcards')));
		}
		setSubmodules(initialSubmodules);
	}, []);

	useEffect(() => {
		localStorage.setItem('flashcards', JSON.stringify(flashcards));
	}, [flashcards])

	const toggleFlashcard = (flashcard) => {
		flashcard.showBack = !flashcard.showBack;
		setFlashcards(n => [...n]);
	}

	const changeFlashcardStatus = (flashcard, status) => {
		flashcard.status = status;
		setFlashcards(n => [...n]);
		toggleFlashcard(flashcard);
	}
	return (
		<Router>
			<div className="App">
				<div>Your have learned {(flashcards.filter(f => f.status === 'Learned')).length} flashcards {flashcards.length}.</div>
				<Nav submodules={submodules} />
				<Switch>
					<Route exact path='/'>
						<div>Please click on a submodule.</div>
					</Route>
					{submodules.map((submodule, index) => {
						return (
							<Route key={index} path={`/${submodule.idCode}`}>
								<Submodule changeFlashcardStatus={changeFlashcardStatus} toggleFlashcard={toggleFlashcard} flashcards={flashcards.filter(fc => fc.submoduleIdCode === submodule.idCode)} />
							</Route>
						)
					})}
				</Switch>
			</div>
		</Router>
	);
}

export default App;