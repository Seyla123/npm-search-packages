import { Stack, Divider, Box, ListItem, ListItemText, List,Typography, Grid2 } from '@mui/material';
import npmLogo from '../assets/npm-icon.svg';
import githubLogo from '../assets/github-icon.svg';
const FooterList = [{
    title: 'support',
    subTitle: ['help', 'Advisories', 'Status', 'Contact npm']
}, {
    title: 'company',
    subTitle: ['About', 'Blog', 'Press']
}, {
    title: 'Terms & Policies',
    subTitle: ['Policies', 'Terms of Use', 'Code of Conduct', 'Privacy']
}];
function Footer() {
    const renderList = () => {
        return FooterList.map((list,index) => (
            <Grid2 key={index} size={{ md: 3, xs:6}} p={4}>               
             <List key={list.title} sx={{textTransform: 'capitalize', p: 0}} >
                <ListItem sx={{p: 0}}>
                    <ListItemText primary={
                        <Typography variant='body1' fontWeight={700} fontFamily={'poppins'}>{list.title}</Typography>
                    } />
                </ListItem>
                {list.subTitle.map((subTitle) => (
                    <ListItem key={subTitle} sx={{p: 0}}>
                        <ListItemText primary={subTitle} />
                    </ListItem>
                ))}
            </List>
            </Grid2>
        ));
    }
    return (
        <>
            <Divider orientation="horizontal" flexItem />
            <Stack direction={{ md: 'row', sm:'column'}} maxWidth={'xl'} mx={'auto'} sx={{p: 0}}>
                <Stack p={4}  gap={2} my={2}>
                    <Box component="img" src={npmLogo} alt="npm logo" sx={{ maxWidth: '50px' }} />
                    <Box component="img" src={githubLogo} alt="github logo" sx={{ maxWidth: '50px' }} />
                </Stack>
                <Grid2 container justifyContent={'space-between'}  sx={{width: '100%', p: 0, gap: 0}} >
                    {renderList()}
                </Grid2>
            </Stack>
        </>
    );
}

export default Footer;


