import React, {useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom";


const NavigationBarAndAddEvent = () => {

    const [isPublished, setIsPublished] = useState(true);

    const changePublished = (bool: boolean) => {
        setIsPublished(bool);
    }

    return (
        <Box mt={'30px'}>


            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack justifyContent={'center'} width={'557px'} height={'71px'} borderRadius={'47px'}
                       bgcolor={'#E9E9E9'}>
                    <Stack direction={'row'} gap={'30px'} alignItems={'center'} justifyContent={'center'}>

                        <Link to={'/published'} className={'publish'}>
                            <Box>
                                {isPublished ? <Button variant="contained"
                                                       onClick={() => changePublished(true)}
                                                       sx={{
                                                           width: '233px',
                                                           height: '46px',
                                                           borderRadius: '61px'
                                                       }}><Typography fontFamily={'Montserrat'} fontStyle={'normal'}
                                                                      fontWeight={600} fontSize={'24px'}
                                                                      color={'#FFFFFF'} lineHeight={'29px'}
                                                                      textTransform={'none'}>Published</Typography></Button> :
                                    <Button variant="text"
                                            onClick={() => changePublished(true)}
                                            sx={{
                                                width: '233px',
                                                height: '46px',
                                                color: '#000000'
                                            }}><Typography fontFamily={'Montserrat'} fontStyle={'normal'}
                                                           fontWeight={600}
                                                           fontSize={'24px'}
                                                           color={'#000000'} lineHeight={'29px'}
                                                           textTransform={'none'}>Published</Typography></Button>
                                }
                            </Box>
                        </Link>

                        <Link to={'/unpublished'} className={'publish'}>
                            <Box>
                                {!isPublished ? <Button variant="contained"
                                                        onClick={() => changePublished(true)}
                                                        sx={{
                                                            width: '233px',
                                                            height: '46px',
                                                            borderRadius: '61px'
                                                        }}><Typography fontFamily={'Montserrat'} fontStyle={'normal'}
                                                                       fontWeight={600} fontSize={'24px'}
                                                                       color={'#FFFFFF'} lineHeight={'29px'}
                                                                       textTransform={'none'}>Unpublished</Typography></Button> :
                                    <Button variant="text"
                                            onClick={() => changePublished(false)}
                                            sx={{
                                                width: '233px',
                                                height: '46px',
                                                color: '#000000'
                                            }}><Typography fontFamily={'Montserrat'} fontStyle={'normal'}
                                                           fontWeight={600}
                                                           fontSize={'24px'}
                                                           color={'#000000'} lineHeight={'29px'}
                                                           textTransform={'none'}>Unpublished</Typography></Button>
                                }
                            </Box>
                        </Link>


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
