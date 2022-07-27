import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

 export default function Result({ scoreChange, setScore }) {
    let humanChoose;
    let resultText; 

    const navigate = useNavigate()
    const human = JSON.parse(localStorage.getItem('saveItem'))
    const computer = JSON.parse(localStorage.getItem('numberForComputerItem'))
    
    const humanChooseRockShadow = {
        boxShadow: "0px 4.5px 0px 0px #870c35, 0 0 0 15px rgba(255 255 255 / 5%), 0 0 0 40px rgba(255 255 255 / 5%), 0 0 0 60px rgba(255 255 255 / 5%)"
    }
    const humanChoosePaperShadow = {
        boxShadow: "0px 4.5px 0px 0px #1f2985, 0 0 0 15px rgba(255 255 255 / 5%), 0 0 0 40px rgba(255 255 255 / 5%), 0 0 0 60px rgba(255 255 255 / 5%)"
    }
    const humanChooseScissorsShadow = {
        boxShadow: "0px 4.5px 0px 0px #b87018, 0 0 0 15px rgba(255 255 255 / 5%), 0 0 0 40px rgba(255 255 255 / 5%), 0 0 0 60px rgba(255 255 255 / 5%)"
    }

    const humanChooseRock = <div style={humanChooseRockShadow} className="rock-paper-scissors-circle rock-paper-scissors-circle-result result-rock-outer">
                                <div id="rock" className="bg-[url('./images/icon-rock.svg')] rock-paper-scissors-img rock-paper-scissors-img-result"></div>
                            </div>
    const humanChoosePaper = <div style={humanChoosePaperShadow} className="rock-paper-scissors-circle rock-paper-scissors-circle-result result-paper-outer">
                                <div id="paper" className="bg-[url('./images/icon-paper.svg')] rock-paper-scissors-img rock-paper-scissors-img-result"></div>
                             </div>
    const humanChooseScissors = <div style={humanChooseScissorsShadow} className="rock-paper-scissors-circle rock-paper-scissors-circle-result result-scissors-outer">
                                    <div id="scissors" className="bg-[url('./images/icon-scissors.svg')] rock-paper-scissors-img rock-paper-scissors-img-result"></div>
                                </div>
    switch(human){
        case 'rock':
              humanChoose = humanChooseRock;
                break;
        case 'paper':
              humanChoose = humanChoosePaper;
                break;
        case 'scissors':
              humanChoose = humanChooseScissors;
                break;
        default:
                humanChoose = null;
        }
    
        if(human === 'rock' && computer == 1){
            resultText = 'DRAW';
        } else if(human === 'rock' && computer == 2){
            resultText = 'YOU LOSE'
        } else if(human === 'rock' && computer == 3){
            resultText = 'YOU WIN'
        } else if(human === 'paper' && computer == 1){
            resultText = 'YOU WIN'
        } else if(human === 'paper' && computer == 2){
            resultText = 'DRAW';
        } else if(human === 'paper' && computer == 3){
            resultText = 'YOU LOSE'
        } else if(human === 'scissors' && computer == 1){
            resultText = 'YOU LOSE'
        } else if(human === 'scissors' && computer == 2){
            resultText = 'YOU WIN'
        } else if(human === 'scissors' && computer == 3){
            resultText = 'DRAW';
        }
        
        useEffect(()=>{
                scoreChange(resultText);
        }, [])

        window.onload = () => {
            navigate("/")
            setScore(0)
        }
        
return(
        <motion.div 
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{duration: 0.5}}
        className="w-full h-[400px] flex flex-col pt-5">

            <div className="rock-paper-scissors-box flex justify-around items-center lg:w-3/4 xl:w-2/3 lg:justify-between lg:mx-auto h-full">
                
                <div className="humanChoose lg:flex lg:flex-col-reverse">
                    {humanChoose}
                    <span className="mt-5 inline-block ml-5 text-white tracking-wider md:text-xl lg:text-2xl lg:mb-5 lg:ml-14">YOU PICKED</span>
                </div>
                
                <div className="computerChoose lg:flex lg:flex-col-reverse">
                    {computer == 1 && <motion.div animate={{scale : 1}} transition={{duration: 1}} initial={{scale : 0}}  className="rock-paper-scissors-circle rock-paper-scissors-circle-result result-rock-outer">
                                        <div id="rock" className="bg-[url('./images/icon-rock.svg')] rock-paper-scissors-img rock-paper-scissors-img-result"></div>
                                    </motion.div>}
                    {computer == 2 && <motion.div animate={{scale : 1}} transition={{duration: 1}} initial={{scale : 0}} className="rock-paper-scissors-circle rock-paper-scissors-circle-result result-paper-outer">
                                        <div id="paper" className="bg-[url('./images/icon-paper.svg')] rock-paper-scissors-img rock-paper-scissors-img-result"></div>
                                      </motion.div>}
                    {computer == 3 && <motion.div animate={{scale : 1}} transition={{duration: 1}} initial={{scale : 0}} className="rock-paper-scissors-circle rock-paper-scissors-circle-result result-scissors-outer">
                                        <div id="scissors" className="bg-[url('./images/icon-scissors.svg')] rock-paper-scissors-img rock-paper-scissors-img-result"></div>
                                      </motion.div>}
                    <span className="mt-5 inline-block text-white md:text-xl lg:text-2xl lg:mb-5 lg:ml-8">THE HOUSE PICKED</span>
                </div>
            
            </div>
            
            <motion.div animate={{scale : 1}} transition={{duration: 1}} initial={{scale : 0}} className="resultScene flex flex-col items-center lg:relative lg:bottom-52 lg:mx-10">
                <span className="text-5xl font-bold text-white mb-6">{resultText}</span>
                <Link to="/" className="border bg-white rounded-lg flex justify-center w-[185px] py-3">
                    <button className="font-semibold text-lg tracking-widest text-dark-text hover:text-red-500">PLAY AGAIN</button>
                </Link>
            </motion.div>

        </motion.div>
    )
}
