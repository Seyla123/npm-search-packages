import logo from '../assets/logo.svg';
import { Box, Paper, Button, InputBase, Divider } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Header() {
    const [value, setValue] = useState<string>('');
    const navigate = useNavigate();

    const handleOnSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        console.log('this search value : ', value);
        navigate(`/search?q=${value}`);
    }

    return (
        <Box sx={{maxWidth:'xl', mx:'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, gap: 2, flexDirection:{ xs: 'column', sm: 'row'}}}>
            <Box component={'img'} src={logo} alt="vite logo" sx={{ maxWidth: '80px' }} />
            <Divider orientation="horizontal" flexItem/>
            <Box component={'form'} sx={{width: '100%'}} onSubmit={handleOnSubmit}>
                <Paper sx={{boxShadow: 'none', display: 'flex', alignItems: 'center', height: '60px'}}>
                    <InputBase
                        sx={{p:2,width: '100%', backgroundColor: '#F2F2F2' , height: '100%', fontFamily: 'fira-code'}}
                        placeholder='Search packages' 
                        inputProps={{ 'aria-label': 'search packages', 'name': 'search', 'value':value, 'onChange': (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value) }}                   
                    />
                    <Button sx={{ px:4, backgroundColor: 'black', borderRadius: '0', height: '100%', textTransform: 'none' }}  variant="contained" type='submit'>Search</Button>
                </Paper>
            </Box>
        </Box>
    )
}

export default Header;
