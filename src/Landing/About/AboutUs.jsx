// import Typography from "@mui/material/Typography";
// import DigitalTransformer from "../../assets/Images/digitaltransformator-keyvisual-rgb-removebg-preview 1.png"
// import {Grid} from "@mui/material";
//
// const AboutUs = () => {
//     const divStyle = {
//         borderRadius: "4px",
//         borderLeft: "8px solid white",
//         paddingLeft: "2rem",
//         marginLeft: "1rem"
//     };
//
//     return (
//         <div className="about-us-container" style={{ paddingTop: "3rem"}}>
//             <div className="about-content">
//
//                 <div>
//                     <div style={divStyle}>
//                         <Typography variant={"h3"} textAlign={"left"} fontSize={"4rem"}>
//                             About Us
//                         </Typography>
//                     </div>
//                 </div>
//
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} md={6}>
//                         <div style={{padding: "4rem 2rem 2rem 2rem"}}>
//                             <Typography variant={'h4'} textAlign={"left"} fontSize={"3rem"}>Lorem ipsum.</Typography>
//                             <Typography variant={'body1'} textAlign={"left"} fontSize={"1.5rem"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad consequuntur cumque dolores eaque earum eveniet ex expedita harum, ipsa modi necessitatibus nihil nobis quae quas, quis similique vero voluptas!</Typography>
//                         </div>
//
//                         <div style={{padding: "6rem 2rem 6rem 2rem"}}>
//                             <Typography variant={'h4'} textAlign={"left"}  fontSize={"3rem"}>Lorem ipsum.</Typography>
//                             <Typography variant={'body1'} textAlign={"left"} fontSize={"1.5rem"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad consequuntur cumque dolores eaque earum eveniet ex expedita harum, ipsa modi necessitatibus nihil nobis quae quas, quis similique vero voluptas!</Typography>
//                         </div>
//                     </Grid>
//
//                     <Grid item xs={12} md={6}>
//
//                         <div style={{width: "90%", maxWidth: "100%", border: "2px solid red", marginLeft: "3rem", transform: "translateY(-50px) translateX(70px)"}}>
//                         {/*<div style={{width: "90%", maxWidth: "100%", border: "2px solid red", marginLeft: "3rem", transform: "translateY(-7rem) translateX(9rem)"}}>*/}
//                             <img src={DigitalTransformer} alt="Digitaltransformer" style={{width: "100%", height: "auto", display: "block"}} />
//                         </div>
//
//                         <div style={{padding: "6rem 2rem 0rem 2rem"}}>
//                             <Typography variant={'h4'} textAlign={"left"}  fontSize={"3rem"}>Lorem ipsum.</Typography>
//                             <Typography variant={'body1'} textAlign={"left"} fontSize={"1.5rem"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad consequuntur cumque dolores eaque earum eveniet ex expedita harum, ipsa modi necessitatibus nihil nobis quae quas, quis similique vero voluptas!</Typography>
//                         </div>
//                     </Grid>
//                 </Grid>
//             </div>
//         </div>
//     );
// };
//
// export default AboutUs;
//



import Typography from "@mui/material/Typography";
import DigitalTransformer from "../../assets/Images/digitaltransformator-keyvisual-rgb-removebg-preview 1.png";
import { Grid } from "@mui/material";

const AboutUs = () => {
    const divStyle = {
        borderRadius: "4px",
        borderLeft: "8px solid white",
        paddingLeft: "2rem",
        marginLeft: "1rem",
    };

    const imageContainerStyle = {
        width: "90%",
        maxWidth: "100%",
        margin: "3rem 3rem 3rem 6rem",
        position: "relative",
        overflow: "hidden",
    };

    const clearImageStyle = {
        width: "100%",
        height: "auto",
        display: "block",
    };

    const gradientOverlayStyle = {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0))",
        filter: "blur(5px)", // Adjust the blur amount as needed (e.g., blur(3px) or blur(10px))
    };

    const imageDivStyle = {
        width: "90%",
        maxWidth: "100%",
        // border: "2px solid red",
        marginLeft: "3rem",
        transform: "translateY(-70px)",
    };

    // Media query for smaller screens (e.g., phones)
    const phoneImageDivStyle = {
        // transform: "translateY(-50px) translateX(50%)", // Adjust the translateX value to center the image
        width: '90%',
        maxWidth: '100%',
        margin: '3rem 3rem 3rem 1rem',
        position: 'relative',
        overflow: 'hidden',
    };

    return (
        <div className="about-us-container" style={{ paddingTop: "10rem" }}>
            <div className="about-content">
                <div>
                    <div style={divStyle}>
                        <Typography variant={"h3"} textAlign={"left"} fontSize={"4rem"}>
                            About Us
                        </Typography>
                    </div>
                </div>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div style={{ padding: "4rem 2rem 2rem 2rem" }}>
                            <Typography variant={"h4"} textAlign={"left"} fontSize={"3rem"}>
                                Lorem ipsum.
                            </Typography>
                            <Typography variant={"body1"} textAlign={"left"} fontSize={"1.5rem"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad consequuntur cumque dolores eaque earum eveniet ex expedita harum, ipsa modi necessitatibus nihil nobis quae quas, quis similique vero voluptas!
                            </Typography>
                        </div>

                        <div style={{ padding: "6rem 2rem 6rem 2rem" }}>
                            <Typography variant={"h4"} textAlign={"left"} fontSize={"3rem"}>
                                Lorem ipsum.
                            </Typography>
                            <Typography variant={"body1"} textAlign={"left"} fontSize={"1.5rem"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad consequuntur cumque dolores eaque earum eveniet ex expedita harum, ipsa modi necessitatibus nihil nobis quae quas, quis similique vero voluptas!
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div style={{ ...imageContainerStyle, ...(window.innerWidth <= 600 ? phoneImageDivStyle : imageDivStyle) }}>
                            <img src={DigitalTransformer} alt="Digitaltransformer" style={clearImageStyle} />
                            <div style={gradientOverlayStyle}></div>
                        </div>

                        <div style={{ padding: "4rem 2rem 0rem 2rem", transform: "translateY(-100px)" }}>
                            <Typography variant={"h4"} textAlign={"left"} fontSize={"3rem"}>
                                Lorem ipsum.
                            </Typography>
                            <Typography variant={"body1"} textAlign={"left"} fontSize={"1.5rem"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad consequuntur cumque dolores eaque earum eveniet ex expedita harum, ipsa modi necessitatibus nihil nobis quae quas, quis similique vero voluptas!
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AboutUs;
