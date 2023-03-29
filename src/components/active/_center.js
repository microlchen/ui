const Center = (props) => {
    

    return(
        <div style = {{
            flexDirection:"row", 
            // width:"30vw", 
            // height: "60px", 
            // borderRadius:"30px",
            // background: "#BAC0F1",
            alignSelf:"center",
            marginBottom:"40px",
            display: "flex"}}>
            {props.object}
        </div>
    );
}
export default Center;

