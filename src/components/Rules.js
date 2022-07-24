export default function Rules(props) {
    
    return(
        <div className="absolute z-50 w-full 2xl:max-w-[1536px] h-screen lg:bg-black/50 lg:flex lg:justify-center lg:items-center">
            <div className="flex flex-col items-center lg:items-start lg:px-7 bg-white w-full h-full lg:h-[500px] lg:w-[450px] pt-10">
                <span className="text-dark-text text-3xl md:text-[45px] lg:text-3xl font-bold mb-20">RULES</span>
                <div className="bg-[url('./images/image-rules.svg')] bg-contain bg-center bg-no-repeat w-[300px] h-[270px] md:w-[500px] md:h-[400px]
                 lg:w-full lg:h-[300px]"></div>
                <div className="bg-[url('./images/icon-close.svg')] bg-cover lg:absolute lg:ml-[360px] w-6 h-6 md:w-8 md:h-8 mt-28 lg:mt-0 cursor-pointer" onClick={props.rulesButton}></div>
            </div>
        </div>
        
    )
}