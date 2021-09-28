import "./Menu.css";
import flashcardsData from "..data/document_curriculum.json/";
import { Link } from "react-router-dom";

function Menu() {
  const submodules = flashcardsData.modules[3].submodules;
  return (
    <div className="menu">
      <ul>
        {submodules.map((submodule, index) => {
          return (
            <li key={index}>
              <Link to={`/${submodule.title}`}>{submodule.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Menu;


import React from "react";

function Submodule(props) {
  return (
    <div>
      <h2>{`Submodule: ${props.title}`}</h2>
      {props.flashcards.map((flashcard, index) =>{
        return (
          <div key={index}>
        )
      })}
    </div>
  );
}
export default Submodule;


import { Switch, Route } from "react-router-dom";
import flashcardsData from "../data/document_curriculum.json";
import Submodule from "./Submodule";

function Main() {
  const submodules = flashcardsData.modules[3].submodules;
  //   console.log(flashcardsData.modules[3].submodules);

  return (
    <div>
      <Switch>
        {submodules.map((submodule, index) => {
          return (
            <Route key={index} path={`/${submodule.title}`}>
              <Submodule
                title={submodule.title}
                flashcards={submodule.flashcards}
              />
            </Route>
          );
        })}
      </Switch>
    </div>
  );
}

