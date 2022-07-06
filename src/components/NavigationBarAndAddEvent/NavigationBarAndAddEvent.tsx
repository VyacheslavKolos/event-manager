import React from 'react';
import {Box, Stack} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {setIsPublishedEvent} from "../../store/slices";
import {InActiveButton, ActiveButton, AddDialogWindow} from "../../components";


const NavigationBarAndAddEvent = () => {

    const {isPublished} = useAppSelector(state => state.recordReducer)

    const dispatch = useAppDispatch();

    const changePublished = (bool: boolean) => {
        dispatch(setIsPublishedEvent(bool))
    }



    return (
        <Box mt={'30px'}>

            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack justifyContent={'center'} width={'557px'} height={'71px'} borderRadius={'47px'}
                       bgcolor={'#E9E9E9'}>
                    <Stack direction={'row'} gap={'30px'} alignItems={'center'} justifyContent={'center'}>

                        <Box>
                            {isPublished ? <ActiveButton changePublished={changePublished} name={'Published'}/> :
                                <InActiveButton changePublished={changePublished} status={true} name={'Published'}/>
                            }
                        </Box>

                        <Box>
                            {isPublished ?
                                <InActiveButton changePublished={changePublished} status={false}
                                                name={'Unpublished'}/> :
                                <ActiveButton changePublished={changePublished} name={'Unpublished'}/>
                            }
                        </Box>

                    </Stack>
                </Stack>

                <AddDialogWindow/>

            </Stack>

        </Box>
    );
};

export  {NavigationBarAndAddEvent};
