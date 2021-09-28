const Submodule = (props) => {
	return (
		<div>
			{props.flashcards.map((flashcard, index) => {
				return (
					<div key={index} className="flashcard">
						<div className="front" onClick={() => props.toggleFlashcard(flashcard)}>
							<span className={`${flashcard.status}`}>{flashcard.status}</span>: <span dangerouslySetInnerHTML={{ __html: flashcard.front }}></span>
						</div>
						{flashcard.showBack && (
							<div className="back">
								<span dangerouslySetInnerHTML={{ __html: flashcard.back }}></span>
								{flashcard.moreInfoItems.length > 0 && (
									<ul>
										{flashcard.moreInfoItems.map((moreInfoItem, index) => {
											return (
												<li key={index}><a target="_blank" href={moreInfoItem.url} rel="noreferrer">{moreInfoItem.title}</a></li>
											)
										})}
									</ul>
								)}
								<div className="buttonArea">
									<button onClick={() => props.changeFlashcardStatus(flashcard, 'test ')}> Test Again</button>
									<button onClick={() => props.changeFlashcardStatus(flashcard, 'learned')}>Learned</button>
								</div>
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default Submodule;