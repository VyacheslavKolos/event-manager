import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';


const NavigationBarAndAddEvent = () => {
    return (
        <Box mt={'30px'}>


            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack justifyContent={'center'} width={'557px'} height={'71px'} borderRadius={'47px'}
                       bgcolor={'#E9E9E9'}
                       p={'12px'}>
                    <Stack direction={'row'} gap={'30px'} alignItems={'center'} justifyContent={'center'}>
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained">Contained</Button>
                    </Stack>
                </Stack>


                <Button variant="contained" color="success"
                        sx={{width: '233px', height: '69px', bgcolor: '#4ADE80', borderRadius: '57px'}}>
                    <Stack alignItems={'center'} justifyContent={'center'} direction={'row'} gap={'20px'}>
                        <AddIcon/>
                        <Typography fontFamily={'Montserrat'} fontStyle={'normal'} fontWeight={600} fontSize={'24px'}
                                    color={'#FFFFFF'} lineHeight={'29px'} textTransform={'none'}>Add Event</Typography>
                    </Stack>
                </Button>
            </Stack>


        </Box>
    );
};

export default NavigationBarAndAddEvent;
