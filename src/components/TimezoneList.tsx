import * as React from 'react';
import {useEffect} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {Stack, Typography} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../hooks";
import {getAllTimezones} from "../store/slices";


const TimezoneList = () => {

    const dispatch = useAppDispatch();

    const {timezones,errors} = useAppSelector(state => state.recordReducer)

    useEffect(() => {
        dispatch(getAllTimezones())
    }, [])

    console.log(timezones);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack direction={'row'} alignItems={'center'}>


            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {open ? <ExpandLess/> : <ExpandMore/>}
                <Typography fontFamily={'Montserrat'} fontStyle={'normal'} fontWeight={500} fontSize={'18px'}
                            color={'#000000'} lineHeight={'22px'}>
                    Central European Time
                </Typography>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Stack>
    );
}

export default TimezoneList;
