const Hairstyle = (props) => {
console.log(props)
    return(
       <>
        {props.hair.styles}
        <button onClick={() => props.changehairStyles(props.index)}> Hi</button>
        <button onClick={() => props.keepHairStyles(props.index)}>Do you like it?</button>
        {props.hair.doYouLikeIt === true && <p>true</p> }
        
        </>
    )
} 

export default Hairstyle
