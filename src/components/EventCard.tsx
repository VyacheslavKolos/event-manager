import React, {FC} from 'react';
import {Box, Card, CardActions, CardContent, Stack, Typography} from "@mui/material";
import {IEvent} from "../interfaces";
import CardMenu from "./CardMenu";
import moment from "moment";

const EventCard: FC<{ event: IEvent }> = ({event}) => {

    let date = moment(event.time);
    let formattedDate = date.format('MMMM Do YYYY, h:mm a').split(',').reverse().join().replace(',', ' - ');


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
                    <CardMenu event={event}/>
                </CardActions>
                <Typography>
                    {formattedDate}
                </Typography>
            </Stack>

        </Card>
    );
};

export default EventCard;






