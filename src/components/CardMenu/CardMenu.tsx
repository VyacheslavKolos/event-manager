import React, {FC} from 'react';
import {Button, Menu, Stack, Typography} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import PublishIcon from '@mui/icons-material/Publish';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {PublishEventThunk} from "../../store/slices";
import {IEvent} from "../../interfaces";

// @ts-ignore
import Unpublish from '../../assets/icons/UnPublishIcon.png';
import {EditEvent, DeleteCard} from "../../components";

interface IProps {
    event: IEvent
}

const CardMenu: FC<IProps> = ({event}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const dispatch = useAppDispatch();

    const handleCloseMenuPublish = () => {
        setAnchorEl(null);
        dispatch(PublishEventThunk({id: event.id, event}));
    };

    const {isPublished} = useAppSelector(state => state.recordReducer)


    return (
        <div>

            <Button id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{color: '#000000', height: '40px', minWidth: '20px', ml: '4px'}}><Typography mb={'10px'}
                                                                                                     fontSize={'28px'}>...</Typography>
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >

                <MenuItem sx={{gap: '8px', p: '0px'}}>
                    <EditEvent id={event.id}/>
                </MenuItem>
                <MenuItem sx={{gap: '8px', pl: '4px'}} onClick={handleCloseMenuPublish}>{isPublished ?
                    <Stack direction={'row'} gap={'8px'}><img
                        src={Unpublish} alt="unpublish"/>Unpublish</Stack> :
                    <Stack direction={'row'} gap={'8px'}><PublishIcon/>Publish</Stack>}</MenuItem>
                <DeleteCard id={event.id}/>
            </Menu>
        </div>);
};

export {CardMenu};



