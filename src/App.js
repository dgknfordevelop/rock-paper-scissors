import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Play from "./components/Play";
import Result from "./components/Result";
import Rules from "./components/Rules";
import Score from "./components/Score";

function App() {
  const [toggleRules, setToggleRules] = useState(false);
  const [score, setScore] = useState(0);

  const rulesButton = () => {
    setToggleRules(!toggleRules);
  }
   
  const chooseItem = (item) => {
      localStorage.setItem('saveItem', JSON.stringify(item.target.id));
  }
 
  const scoreChange = useCallback((score) => {
        if(score === "YOU WIN"){
          setScore(score => score + 1);
        }else if(score === "YOU LOSE"){
          setScore(score => score - 1);
        }
  }, [setScore]);
  
  return (
    <div className="App h-screen flex flex-col">
        <Score score={score} />
        <Routes>
            <Route path="/" element={<Play chooseItem={chooseItem} />} />
            <Route path="/result" element={<Result scoreChange={scoreChange} setScore={setScore} />} />
        </Routes>
        {toggleRules ? <Rules rulesButton={rulesButton} /> : null}
        <div className="rules-button-box" onClick={rulesButton}>
            <button className="border w-fit h-fit rounded-lg px-8 py-2 tracking-widest">RULES</button>
        </div>
        
    </div>
  );
}

export default App;
