import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#F39946', // Set the primary color to black (#000000)
        },
        secondary: {
            main: 'rgba(250,250,250,0.82)', // Set the secondary color to red (#ff0000)
        },
        // You can add more custom colors here if needed
    },
    typography: {
        fontFamily: 'Roboto, sans-serif', // Specify your desired font family
        // You can customize other typography styles here if needed
    },
    // You can add more custom theme options here if needed
});

export default theme;