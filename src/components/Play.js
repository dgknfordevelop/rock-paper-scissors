import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Play(props){

    const numberForComputerItem = () =>{
        let nmr = Math.floor(Math.random() * 3) + 1;
        localStorage.setItem('numberForComputerItem', JSON.stringify(nmr));
    }   

    return(
                <motion.div
                 className="w-full h-[400px] md:h-[500px]"
                 initial={{ x: 300, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{duration: 1}}
                 >
                    <div className="rock-paper-scissors-box flex justify-center items-center h-full" onClick={props.chooseItem}>
                        <Link to="/result" id="paper" className="rock-paper-scissors-circle play-paper-outer" onClick={numberForComputerItem}>
                                <div id="paper" className="bg-[url('./images/icon-paper.svg')] rock-paper-scissors-img"></div>
                        </Link>
                        
                        <Link to="/result" id="scissors" className="rock-paper-scissors-circle play-scissors-outer" onClick={numberForComputerItem}>
                                <div id="scissors" className="bg-[url('./images/icon-scissors.svg')] rock-paper-scissors-img"></div>
                        </Link>
                        
                        <Link to="/result" id="rock" className="rock-paper-scissors-circle play-rock-outer" onClick={numberForComputerItem}>
                                <div id="rock" className="bg-[url('./images/icon-rock.svg')] rock-paper-scissors-img"></div>
                        </Link>
                    </div>
                        
                    <div className="triangle-background">   
                    </div>
                </motion.div>
            )
}