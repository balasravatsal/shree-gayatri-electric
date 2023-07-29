import styled from "styled-components";
import DigitalTransformer from "../../assets/Images/digitaltransformator-keyvisual-rgb-removebg-preview 1.png";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const AboutUsContainer = styled.div`
  height: 100vh;
  /*margin-top: 5rem;*/
  background-color: rgba(0, 0, 0, 0.94);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 900px) {
    height: auto;
    padding-top: 4rem;
  }
`;

const Heading = styled.div`
  align-items: start;
  padding-left: 8em;

  @media (max-width: 900px) {
    padding-left: 1rem;
  }

  & > div {
    border-radius: 4px;
    border-left: 8px solid white;
    padding-left: 2rem;
    margin-left: 1rem;
    align-items: start;
  }
`;

const ImageWrapper = styled.div`
  max-width: 99%;
  height: auto;
  transform: translate(0, 0);

  @media (min-width: 900px) {
    transform: translate(100px, -100px);
  }
`;

const GridContainers = styled.div`
  padding: 0 0 2rem 12rem;
  @media (max-width: 900px) {
    padding: 2rem;
  }
`;

const AboutUs2 = () => {
    return (
        <>
            <AboutUsContainer>
                <div style={{ alignSelf: "start" }}>
                    <Heading>
                        <div>
                            <Typography variant={"h3"} textAlign={"left"} fontSize={"4rem"}>
                                About Us
                            </Typography>
                        </div>
                    </Heading>
                </div>

                <Grid container spacing={3} alignItems={"center"}>
                    <Grid item xs={12} md={6} >
                        <GridContainers>
                            <Typography variant={"h4"} textAlign={"left"} fontSize={"3rem"}>
                                Lorem ipsum.
                            </Typography>
                            <Typography variant={"body1"} textAlign={"left"} fontSize={"1.5rem"} color={"#595959"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad consequuntur cumque dolores eaque earum eveniet ex expedita harum, ipsa modi necessitatibus nihil nobis quae quas, quis similique vero voluptas!
                            </Typography>
                        </GridContainers>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ overflowX: "hidden"}}>
                        <ImageWrapper>
                            <img
                                src={DigitalTransformer}
                                alt="DigitalTransformer"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        </ImageWrapper>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <GridContainers>
                            <Typography variant={"h4"} textAlign={"left"} fontSize={"3rem"}>
                                Lorem ipsum.
                            </Typography>
                            <Typography variant={"body1"} textAlign={"left"} fontSize={"1.5rem"} color={"#595959"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad consequuntur cumque dolores eaque earum eveniet ex expedita harum, ipsa modi necessitatibus nihil nobis quae quas, quis similique vero voluptas!
                            </Typography>
                        </GridContainers>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <GridContainers>
                            <Typography variant={"h4"} textAlign={"left"} fontSize={"3rem"}>
                                Lorem ipsum.
                            </Typography>
                            <Typography variant={"body1"} textAlign={"left"} fontSize={"1.5rem"} color={"#595959"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad consequuntur cumque dolores eaque earum eveniet ex expedita harum, ipsa modi necessitatibus nihil nobis quae quas, quis similique vero voluptas!
                            </Typography>
                        </GridContainers>
                    </Grid>
                </Grid>
            </AboutUsContainer>
        </>
    );
};

export default AboutUs2;
