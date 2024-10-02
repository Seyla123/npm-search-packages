import { Box, Typography, Button, Stack } from '@mui/material';
import { dataHeroSection } from '../../../data/homePageData'

function HeaderSection() {
  return (
    <Box
            component="div"
            id="background-img"
            sx={{
                width: '100%',
                height: '100%',
                color: 'white',
            }}
        >
            <Box
                component="div"
                sx={{
                    maxWidth: '650px',
                    mx: 'auto',
                    textAlign: 'center',
                    py: 8,
                    px: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                }}
            >
                <Typography variant="h1" sx={{fontSize: {
                        sm: '5rem',
                        xs: '3rem'
                    }}} fontWeight={600} >
                    {dataHeroSection.title1}
                </Typography>
                <Typography variant="body1" >
                    {dataHeroSection.title2}
                </Typography>
                <Typography variant='h2' sx={{
                    fontSize: {
                        sm: '2.5rem',
                        xs: '1.5rem'
                    }
                }} fontWeight={600} >
                    {dataHeroSection.title3}
                </Typography>
                <Typography variant="body1" >
                    {dataHeroSection.title4}
                </Typography>
                {/* button container */}
                <Stack direction={{xd: 'column', sm: 'row',	}} gap={{xs: 2, sm: 4}} >                    
                    <Button variant="contained" fullWidth sx={{...buttonStyle,backgroundColor: '#FFC329', color: 'black'}}>Sign up for free</Button>
                    <Button variant="outlined" fullWidth sx={{ ...buttonStyle,color: 'white', borderColor: 'white',border: '2px solid', backgroundColor: '#CB3837' }}>Learn about pro</Button>
                </Stack>
            </Box>
        </Box>
  )
}

export default HeaderSection;
const buttonStyle = { py: 2, textTransform: 'none', borderRadius: '32px', fontSize: '1rem' }
