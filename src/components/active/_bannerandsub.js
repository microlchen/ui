import * as React from "react";
const Banner = (props) => {


    return (
        <>
            <div style={{
                flexDirection: "row",
                width: "100vw",
                height: "120px",
                minWidth: "100vw",
                justifyContent: "space-around",
                background: "#494362",
                display: "flex"
            }}>
                <div style={{ justifyContent: "space-around", flexDirection: "column", fontFamily: "Inter, sans-serif", fontSize: "200%", fontWeight: "100", color: "#CAD6FF", letterSpacing: "5px", alignSelf: "center", marginTop: "10px" }}>
                    {props.main}
                </div>
            </div>
            <div style={{
                flexDirection: "row",
                width: "100vw",
                height: "30px",
                minWidth: "100vw",
                justifyContent: "center",
                boxShadow: "22px #191722",
                borderRadius: "0px 0px 30px 30px",
                background: "#67617C",
                display: "flex"
            }}>
                <div style={{ flexDirection: "column", fontFamily: "Inter, sans-serif", fontSize: "75%", fontWeight: "500", color: "#B5BFDC", letterSpacing: "1px", alignSelf: "center", }}>
                    {props.sub}
                </div>
                <div style={{ flexDirection: "column", fontFamily: "Inter, sans-serif", fontSize: "75%", fontWeight: "100", color: "#B5BFDC", letterSpacing: "1px", alignSelf: "center", marginLeft: "10px" }}>
                    {props.more}
                </div>
            </div>
        </>

    );
}
export default Banner;

