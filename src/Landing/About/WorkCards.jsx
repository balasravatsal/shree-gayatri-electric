import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid} from '@mui/material';
import main from '../../assets/Images/WhatsApp Image 2023-05-24 at 23.19 8.png'

export default function WorkCards() {
    return (
        <>
            <Grid container spacing={10} mt={10}>
                <Grid item sm={12} md={4}>

                    <CardActionArea sx={{
                        borderRadius: '16px',
                        backgroundColor: "#fff",
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'box-shadow 0.3s, background-color 0.3s, transform 0.3s',
                        '&:hover': {
                            boxShadow: '0px 0px 4px #fff',
                            transform: 'translateY(-10px)'
                        }
                    }}>
                        <CardMedia
                            component="img"
                            height="240"
                            image={main}
                            alt="green iguana"
                            sx={{borderRadius: "16px"}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" fontSize={"3rem"} component="div" color="text.secondary">
                                Forem ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>

                <Grid item sm={12} md={4}>

                    <CardActionArea sx={{
                        borderRadius: '16px',
                        backgroundColor: "#fff",
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'box-shadow 0.3s, background-color 0.3s, transform 0.3s',
                        '&:hover': {
                            boxShadow: '0px 0px 4px #fff',
                            transform: 'translateY(-10px)'
                        }
                    }}>
                        <CardMedia
                            component="img"
                            height="240"

                            image={main}
                            alt="green iguana"
                            // borderRadius= "5%"
                            sx={{ borderRadius: "16px" }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" fontSize={"3rem"} component="div" color="text.secondary">
                                Forem ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>

                <Grid item sm={12} md={4}>

                    <CardActionArea sx={{
                        borderRadius: '16px',
                        backgroundColor: "#fff",
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        transition: 'box-shadow 0.3s, background-color 0.3s, transform 0.3s',
                        '&:hover': {
                            boxShadow: '0px 0px 4px #fff',
                            transform: 'translateY(-10px)'
                        }
                    }}>
                        <CardMedia
                            component="img"
                            height="240"
                            image={main}
                            alt="green iguana"
                            sx={{ borderRadius: "16px" }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" fontSize={"3rem"} component="div" color="text.secondary">
                                Forem ipsum
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Grid>
            </Grid>
        </>
    );
}
