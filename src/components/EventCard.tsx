import React, {FC} from 'react';
import {Box, Card, CardActions, CardContent, Stack, Typography} from "@mui/material";
import {IEvent} from "../interfaces";
import CardMenu from "./CardMenu";
import moment from "moment";
import {formatInTimeZone} from 'date-fns-tz'
import {useAppSelector} from "../hooks";


const EventCard: FC<{ event: IEvent }> = ({event}) => {


    // let date = moment(event.time);
    // console.log(date);
    // let formattedDate = date.format('MMMM Do YYYY, h:mm a').split(',').reverse().join().replace(',', ' - ');

    const {SelectedTimezone} = useAppSelector(state => state.recordReducer)

    console.log(SelectedTimezone.value);

    let date = formatInTimeZone(event.time, SelectedTimezone.value, 'MMMM do yyyy, h:mm a')
        .split(',').reverse().join().replace(',', ' - ');

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
                    {date}
                </Typography>
            </Stack>

        </Card>
    );
};

export default EventCard;






