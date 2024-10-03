import { Box, Typography, Chip, Stack, Divider } from '@mui/material'

function SearchCard() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 , pt:1,pb:0.5, px:0.5, width: '100%'}}>
            <Typography variant='h6' fontWeight={500}>react-router</Typography>
            <Typography variant='body1' color='gray'>Declarative routing for React</Typography>
            <Stack  direction={'row'} gap={1} my={1} sx={{flexWrap: 'wrap'}} p={0} >
                <Chip label="react" sx={{ borderRadius: '6px' }} />
                <Chip label="router" sx={{ borderRadius: '6px' }} />
                <Chip label="MIT" sx={{ borderRadius: '6px' }} />
                <Chip label="react" sx={{ borderRadius: '6px' }} />
                <Chip label="router" sx={{ borderRadius: '6px' }} />
                <Chip label="MIT" sx={{ borderRadius: '6px' }} />
            </Stack>
            <Stack direction={'row'} gap={1}  sx={{flexWrap: 'wrap'}}>
                <Stack direction={'row'} gap={1}>
                    <Box component={'img'} src='https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80MjVmZDAzOTIxZjVkMjc3N2EwMTI0NWE1MjA4ZjA1OD9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.hKL3E4bv1pE_Dh6ZdpVtJuGNfYT1G7qeSN-e9vOh-2Q'
                    sx={{maxWidth:'20px'}}
                    />
                    <Typography variant='body1' alignSelf={'center'} fontWeight={'bold'} fontSize={'14px'} fontFamily={`'Fira Mono', 'Andale Mono', 'Consolas', monospace`}>mjack</Typography>
                </Stack>
                <Typography variant='body1' color='gray' fontFamily={`'Fira Mono', 'Andale Mono', 'Consolas', monospace`}>published 6.26.2 • 23 days ago</Typography>
            </Stack>
            <Divider orientation="horizontal" flexItem />

        </Box>
    )
}

export default SearchCard