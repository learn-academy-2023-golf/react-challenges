const ListeningBot = (props) => {
    const changeToUpperCase = (userInput) => {
        return userInput.changeToUpperCase()
    }

    return (
        <>
            <h2> Hello, I see your name is:</h2>
            
            <p>{changeToUpperCase(props.name)}</p>
            </>
    )
}

export default ListeningBot