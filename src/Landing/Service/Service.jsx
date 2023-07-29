import Typography from '@mui/material/Typography';
import MiniCards from "./MiniCards.jsx";

const Service = () => {
    return (
        <div style={{
            // height: "100vh",
            alignItems: "center",
            backgroundSize: "cover", // Set the background size to cover
            paddingTop: "14rem",
            height: "auto"
        }}>
            <Typography variant="h3" component="span" sx={{ color: 'black' }} fontSize={"4rem"}>
                Our{' '}
            </Typography>
            <Typography variant="h3" component="span" sx={{ color: '#0D4497' }} fontSize={"4rem"}>
                Services
            </Typography>

            <Typography className={'service-text'} fontSize={"1.5rem"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid deserunt est expedita harum ipsa odio officia qui veritatis vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, non, quae? Debitis id, iure iusto officia rem sunt tempora tempore.</Typography>
            <MiniCards />
        </div>
    );
};

export default Service;
