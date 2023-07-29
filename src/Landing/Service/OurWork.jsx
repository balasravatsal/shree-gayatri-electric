import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import WorkCards from "../About/WorkCards.jsx";

const OurWork = () => {

    const divStyle = {
        borderRadius: "4px",
        borderLeft: "8px solid white",
        paddingLeft: "1rem",
        marginLeft: "1rem"
    };

    return (
        <div className="about-container">
            <div className="about-content">
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6} >
                        <div style={divStyle}>
                            <Typography variant={"h3"} textAlign={"left"} fontSize={"3rem"}>
                                Let’s See A Selection Of <br /> Our Work
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item sm={12} md={6}>
                        <Typography variant={"body1"} textAlign={"left"} pt={2} fontSize={"1.5rem"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis excepturi inventore porro
                            quae? Ab aliquam aspernatur consequuntur fugit, obcaecati totam. A consectetur molestias omnis quas
                            reprehenderit. Architecto, delectus, soluta?
                        </Typography>
                    </Grid>
                </Grid>

                <WorkCards />

            </div>
        </div>
    );
};

export default OurWork;
