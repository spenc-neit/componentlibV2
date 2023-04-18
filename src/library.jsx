
const Box = (props) => {
    var width = "";
    var height = "";

    switch(props.width){
        case "sm":
            width = "100px"
            break;
        case "md":
            width = "250px"
            break;
        case "lg":
            width = "500px"
            break;
    }

    switch(props.height){
        case "sm":
            height = "100px";
            break;
        case "md":
            height = "200px";
            break;
        case "lg":
            height = "300px";
            break;
    }

    return (
        <div style={{width: width, height: height, backgroundColor:"lightcyan", color:"black", padding: "10px"}}>{props.children}</div>
    )

}
export {Box};


const Text = (props) =>{
    return (
        <p style={{color: props.color, fontSize: props.size}}>{props.children}</p>
    )
}
export {Text};


const Button = (props) =>{
    console.log(props.onClick)
    return(
        <button style={{backgroundColor: props.bgcolor}} onClick={props.onClick}>{props.children}</button>
    )
}
export {Button};


const MyAwesomeComponent = () => {
    return(
        <Box width="lg" height="md">
            <Text color="navy" size="24px">Click the button for a message!</Text>
            <br />
            <Button bgcolor="midnightblue" onClick={()=>{alert("boo! it's a regular alert! scary!")}}>Yeah, this one!</Button>
        </Box>
    )
}
export {MyAwesomeComponent};