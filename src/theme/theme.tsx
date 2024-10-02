import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   
    typography: {
        fontFamily: `'Poppins', sans-serif`,
        button:{
            fontWeight: 600,
            color: 'white'
        },
        body1: {
            fontFamily: `'Arimo', sans-serif`,
        },
},
components: {
    MuiFormControlLabel: {
        styleOverrides: {
            root: {
                '& .MuiTypography-root': {
                    color: 'black',
                },
                '&.Mui-checked': {
                    '& .MuiTypography-root': {
                        color: 'black',
                    },
                },
            },
        },
    },
},
});
export default theme