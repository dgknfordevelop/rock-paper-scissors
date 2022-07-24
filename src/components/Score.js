export default function Score(props){
        
    return(
        <div className="score-container">
            <div className="score-logo-info-container">
                <div className="app-logo"></div>
                <div className="score-info-box">
                    <span className="w-fit text-[10px] md:text-[14px] lg:text-[18px] text-score-text font-semibold tracking-widest">SCORE</span>
                    <span className="text-[39px] md:text-[45px] lg:text-[47px] text-dark-text font-bold w-fit">{props.score}</span>
                </div>
            </div>
        </div>
    )
}