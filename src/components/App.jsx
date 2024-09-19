import React from "react";
import { useState, useEffect } from "react";
import GetPokemons from "./GetPokemons.jsx";
// import handleScore from "./Score.jsx";


export default function App(){
   const [displayPokemons, setDisplayPokemons]=useState([]);
   const [score, setScore]=useState(0);
   const [bestScore, setBestScore]=useState(0);
   const [cardId, setCardId]=useState([]);
   const [finalList, setFinalList]=useState([]);

   // function handleClick(e){
   //    if(!cardId.includes(e.target.id)){
   //       setCardId([...cardId, e.target.id]);
   //       setScore(+1);
   //       console.log(cardId, score);
   //    } else{
   //       setCardId([]);
   //       setBestScore(bestScore< score ? score: bestScore);
   //       setScore(0);
   //    }
   // }

   return(
      <>
      <header>
         <h1>Memory Game</h1>
         <h5>Get point by clicking on an image once</h5>
         <div className="scores">
            <p className="score">Score: {score}</p>
            <p className="best-score">Best Score: {bestScore}</p>
         </div>

      </header>
      <hr/>
      <main>
         <GetPokemons 
         score={score} 
         setScore={setScore} 
         bestScore={bestScore}
         setBestScore={setBestScore}
         cardId={cardId}
         setCardId={setCardId}
         finalList={finalList}
         setFinalList={setFinalList}
         />
        
     
      </main>
      </>
   )

}