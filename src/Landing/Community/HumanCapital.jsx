// import {Grid} from "@mui/material";
// import Typography from "@mui/material/Typography";
// import People from "./People.jsx";
//
// const HumanCapital = () => {
//
//     const divStyle = {
//         borderRadius: "4px",
//         borderLeft: "8px solid black",
//         paddingLeft: "1rem",
//         marginLeft: "1rem"
//     };
//
//     return (
//         <>
//             <div style={{
//                 height: '100vh',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 background: '#F4F4F4',
//                 padding: "0 4rem",
//                 margin: "0 8rem"
//             }}>
//                 <Grid container spacing={3}>
//                     <Grid item sm={12} md={6} >
//                         <div style={divStyle}>
//                             <Typography variant={"h3"} textAlign={"left"} fontSize={"3.5rem"} >
//                                 Our Capital is <br/>HUMAN
//                             </Typography>
//                         </div>
//                     </Grid>
//
//                     <Grid item sm={12} md={6}>
//                         <Typography variant={"body1"} textAlign={"left"} pt={2} fontSize={"1.5rem"}>
//                             Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
//                             interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
//                             conubia nostra, per inceptos himenaeos.
//                         </Typography>
//                     </Grid>
//
//                     <Grid item sm={12} mt={"10rem"}>
//                         <People />
//                     </Grid>
//                 </Grid>
//             </div>
//         </>
//     );
// };
//
// export default HumanCapital;


//////////////////////


import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import People from "./People.jsx";

const HumanCapital = () => {
    const divStyle = {
        borderRadius: "4px",
        borderLeft: "8px solid black",
        paddingLeft: "1rem",
        marginLeft: "1rem",
        position: "relative", // Add position relative to the div with background
        zIndex: 1, // Set a higher z-index for the div with background1 to overlap background2
    };


    return (
        <>
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundSize: "cover", // Set the background size to cover
                    paddingTop: "4rem"
                }}
                className={"human-capital-bg"}
            >

                    <Grid container spacing={2} mb={7}>
                        <Grid item sm={12} md={6}>
                            <div className={"human-capital"}>
                                <div style={divStyle}>
                                    <Typography variant={"h3"} textAlign={"left"} fontSize={"3.5rem"}>
                                        Our Capital is <br/>
                                        HUMAN
                                    </Typography>
                                </div>
                            </div>
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <div className={"human-capital"}>
                            <Typography variant={"body1"} textAlign={"left"} pt={2} fontSize={"1.5rem"}>
                                Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                conubia
                                nostra, per inceptos himenaeos.
                            </Typography>
                            </div>
                        </Grid>

                        <Grid item sm={12} mt={"5rem"} style={{padding: "0 2rem", overflow: "auto"}}>
                            <People/>
                        </Grid>
                    </Grid>

            </div>
        </>
    );
};

export default HumanCapital;
