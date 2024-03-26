const Welcome = ({greeting}) => {
    const bonjour = () => {console.log("bonjour")};
    const bonsoir = (stringInput) => {console.log(stringInput)};
    return(
        <div>
            <button onClick={bonjour}>Hardcoded console log function</button>
            <button onClick={()=>{bonsoir(greeting)}}>Argument console log function</button>
            <button onClick={()=>{console.log("Bonne nuit")}}>console log no function</button>
        </div>
    )

}

export default Welcome