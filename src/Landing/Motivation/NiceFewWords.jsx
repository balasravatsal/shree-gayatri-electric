import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import NiceFewWordIcon from "../../assets/Images/NiceFewWordsIcon.png"

const NiceFewWords = () => {
    return (
        <div style={{
            display: "inline-block",
            color: "#fff",
            // border: "2px solid red",
            paddingTop: "10rem"
        }}
              className="nice-few-words-container"
        >
            <Typography variant={"h3"} textAlign={"center"} fontSize={"4rem"}>
                A Few Nice Words
            </Typography>


            <div className={"nice-few-words"}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <div className={"motivation-card"}>
                            <img src={NiceFewWordIcon} alt="Author"
                                 style={{padding: "1rem 4rem 1rem 1rem", width: "270px", height: "300px"}}/>
                            <div className={"motivation-card-details"}>
                                <Typography variant={'h4'} fontSize={"34px"} m={2}>Lorem ipsum</Typography>
                                <Typography variant={'body1'} fontSize={"22px"} m={2} color={"#CFCFCF"}>Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit. Aliquam at beatae corporis culpa
                                    debitis, dolore fugit hic inventore ipsa laboriosam maiores minus mollitia, natus
                                    non pariatur possimus reprehenderit sit suscipit.</Typography>
                                <Typography variant={'body2'} fontSize={"1rem"} m={2} color={"#CFCFCF"}>23 March
                                    2023</Typography>
                            </div>
                        </div>
                    </Grid>


                    <Grid item xs={12} md={6}>
                        <div className={"motivation-card"}>
                            <img src={NiceFewWordIcon} alt="Author"
                                 style={{padding: "1rem 4rem 1rem 1rem", width: "270px", height: "300px"}}/>
                            <div className={"motivation-card-details"}>
                                <Typography variant={'h4'} fontSize={"34px"} m={2}>Lorem ipsum</Typography>
                                <Typography variant={'body1'} fontSize={"22px"} m={2} color={"#CFCFCF"}>Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit. Aliquam at beatae corporis culpa
                                    debitis, dolore fugit hic inventore ipsa laboriosam maiores minus mollitia, natus
                                    non pariatur possimus reprehenderit sit suscipit.</Typography>
                                <Typography variant={'body2'} fontSize={"1rem"} m={2} color={"#CFCFCF"}>23 March
                                    2023</Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
};

export default NiceFewWords;
