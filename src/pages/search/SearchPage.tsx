import SearchCard from "../../components/pages/search/SearchCard";
import { useState } from 'react';
import { Box, Stack, Pagination, Typography } from "@mui/material"
import SortSearch from "../../components/pages/search/SortSearch";
import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./searchLoader";
function SearchPage() {
    const [value, setValue] = useState<string>('Optimal');
    const data = useLoaderData() as SearchLoaderResult; 
    console.log('this is data from loader : ', data.searchResult);

    console.log('this si value : ', value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <>
            <Box sx={{ backgroundColor: '#F2F2F2', border: '1px solid #E0E0E0' }}>
                <Stack direction={{ md: 'row', sm: 'column' }} gap={2} maxWidth={'xl'} mx={'auto'} p={2} justifyContent={'space-between'}>
                    <Typography alignSelf={{ md: 'center', sm: 'left' }} fontWeight={600}>6000 packages found</Typography>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
            </Box>
            <Stack maxWidth={'xl'} mx={'auto'} direction={{ md: 'row', sm: 'column' }} >
                <SortSearch onChange={handleChange} value={value} />
                <Stack sx={{ width: '100%' }} px={{ md: 4, xs: 2 }} py={1}>
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <Pagination count={10} variant="outlined" shape="rounded" sx={{ py: 1 }} />
                </Stack>

            </Stack>
        </>
    )
}

export default SearchPage
