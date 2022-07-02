import * as React from 'react';
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {Stack, Typography} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../hooks";
import {getAllTimezones} from "../store/slices";


const TimezoneList = () => {

    const dispatch = useAppDispatch();

    const {timezones, errors} = useAppSelector(state => state.recordReducer)

    useEffect(() => {
        dispatch(getAllTimezones())
    }, [])


    const [selectedTimezone, setSelectedTimezone] = useState('');

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenuItem = (name: string) => {
        setSelectedTimezone(name);
        setAnchorEl(null);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <Stack direction={'row'} alignItems={'center'} border={'1.5px solid #000000'} borderRadius={'5px'}
               width={'272px'}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: 'black'}}
            >
                {open ? <ExpandLess/> : <ExpandMore/>}
                <Typography fontFamily={'Montserrat'} fontStyle={'normal'} fontWeight={500} fontSize={'17px'}
                            color={'#000000'} lineHeight={'22px'} width={'230px'}>
                    {selectedTimezone ? selectedTimezone : timezones[0]?.name}
                </Typography>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {timezones.map((timezone) => (
                    <MenuItem key={timezone.id} onClick={() => handleCloseMenuItem(timezone.name)}
                              sx={{width: '270px'}}>
                        {timezone.name}
                    </MenuItem>
                ))}
            </Menu>
        </Stack>
    );
}

export default TimezoneList;
