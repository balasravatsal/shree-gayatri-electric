import { Grid } from "@mui/material";
import ContentText from "./ContentText.jsx";
import Graphics from "./Graphics.jsx";

const Home = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to bottom, #fff 70%, #F4F4F4 40%)', }} >
            <Grid container spacing={2}>
                <Grid item sm={12} md={6} >
                    <ContentText />
                </Grid>
                <Grid item sm={12} md={6} >
                    <Graphics/>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
