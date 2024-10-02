import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Footer from '../components/Footer';
function Root() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Root