import React, {FC} from 'react';
import {Box, Button, Card, CardActions, CardContent, Stack, Typography} from "@mui/material";
import {IEvent} from "../interfaces";
import CardMenu from "./CardMenu";

const EventCard: FC<{ event: IEvent }> = ({event}) => {
    return (
        <Card variant={'outlined'} sx={{width: '285px', height: '148px', borderRadius: '15px', bgcolor: '#E9E9E9'}}>
            <CardContent>
                <Box height={'66px'}>
                    <Typography fontFamily={'Montserrat'} fontStyle={'normal'} fontWeight={600} fontSize={'24px'}
                                color={'#000000'} lineHeight={'29px'}>
                        {event.title}
                    </Typography>
                </Box>

            </CardContent>

            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mr={'10px'}>
                <CardActions>
                    <CardMenu/>
                </CardActions>
                <Typography>
                    12:00 pm - 15 Sep 2022
                </Typography>
            </Stack>

        </Card>
    );
};

export default EventCard;






