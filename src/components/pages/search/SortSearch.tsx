import { Stack, FormControl, Box, FormControlLabel, RadioGroup, Radio, Divider } from '@mui/material'
interface SortOptions {
    value : string,
    onChange : (event : React.ChangeEvent<HTMLInputElement>) =>void;
}
function SortSearch({onChange, value} : SortOptions) {
  return (
    <Stack sx={{width:  {md: '30%', sm: '100%'}, pl: { md: 2, xs: 2 } , pr:{md:2, xs:1}}} >
    <FormControl sx={{color: 'black'}}>
        <Box component={'label'} sx={{ fontWeight: 'bold', color: 'black',mb:1,mt:0.5 }}>Sort Packages</Box>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={value}
            onChange={onChange}
        >
            <FormControlLabel value="Optimal" control={<Radio />} label="Optimal"  />
            <Divider />
            <FormControlLabel value="Popularity" control={<Radio />} label="Popularity" />
            <Divider sx={{ bgcolor: "primary.light" }} />
            <FormControlLabel value="Quality" control={<Radio />} label="Quality" />
            <Divider sx={{ bgcolor: "secondary.light" }} />
            <FormControlLabel value="Maintenance" control={<Radio />} label="Maintenance" />
            <Divider sx={{ bgcolor: "#cb3837" }} />
        </RadioGroup>
    </FormControl>
</Stack>
  )
}

export default SortSearch