import React, {FC} from 'react';
import {Stack, Typography} from "@mui/material";

// @ts-ignore
import earthIcon from '../../assets/icons/Vector_Stroke.png';
import {TimezoneList} from "../../components";


const Navbar: FC = () => {
    return (
        <div>
            <Stack alignItems={'center'} justifyContent={'space-between'}
                   sx={{flexDirection: {lg: 'row', xs: 'column'}}}>
                <Typography fontFamily={'Montserrat'} fontStyle={'normal'} fontWeight={600} fontSize={'40px'}
                            color={'#000000'} lineHeight={'49px'}>
                    Event Manager
                </Typography>

                <Stack alignItems={'center'} gap={'15px'} sx={{flexDirection: {lg: 'row', xs: 'column'}}}>
                    <Stack direction={'row'} gap={'15px'} alignItems={'center'}>
                        <img src={earthIcon} alt='earth icon' width={'32px'} height={'32px'}/>

                        <Typography fontFamily={'Montserrat'} fontStyle={'normal'} fontWeight={600} fontSize={'22px'}
                                    color={'#000000'} lineHeight={'27px'}>
                            Select Timezone
                        </Typography></Stack>

                    <TimezoneList/>

                </Stack>

            </Stack>
        </div>
    );
};

export {Navbar};
