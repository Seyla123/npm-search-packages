import { Box, Typography } from '@mui/material';
import { sectionData } from '../../../data/homePageData'

function Section() {
  return (
    <Box
            component="div"
            sx={{
                width: '100%',
                height: '100%',
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
                <Box component={'img'} src='https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png' sx={{maxWidth: '80px', mx:'auto'}}>

                </Box>
                <Typography variant='h2' sx={{
                    fontSize: {
                        sm: '2.5rem',
                        xs: '1.5rem'
                    },
                    
                }} fontWeight={600} color='black' >
                    {sectionData.title}
                </Typography>
                <Typography variant="body1"  color='black'>
                    {sectionData.subtitle}
                </Typography>
            </Box>
        </Box>
  )
}

export default Section;
