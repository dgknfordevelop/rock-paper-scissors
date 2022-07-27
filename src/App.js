import { useState, useCallback } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';

import Rules from "./components/Rules";
import Play from './components/Play';
import Result from './components/Result';
import Score from "./components/Score";
import { AnimatePresence } from 'framer-motion';


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

  const location = useLocation()

  return (
    <div className="App h-screen flex flex-col">
        <Score score={score} />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Play chooseItem={chooseItem} />} />
              <Route path="/result" element={<Result scoreChange={scoreChange} setScore={setScore} />} />
          </Routes>
        </AnimatePresence>
        {toggleRules ? <Rules rulesButton={rulesButton} /> : null}
        <div className="rules-button-box" onClick={rulesButton}>
            <button className="border w-fit h-fit rounded-lg px-8 py-2 tracking-widest">RULES</button>
        </div>
        
    </div>
  );
}

export default App;
