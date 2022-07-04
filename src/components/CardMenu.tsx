import React, {FC} from 'react';
import {Button, Menu, Typography} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import DeleteCard from "./DeleteCard";

import {useAppDispatch, useAppSelector} from "../hooks";
import {PublishEventThunk} from "../store/slices";
import {IEvent} from "../interfaces";

import EditEvent from "./EditEvent";

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

                {/*<MenuItem onClick={handleCloseMenu} sx={{gap:'8px', p:'0px'}}>*/}
                <MenuItem  sx={{gap: '8px', p: '0px'}}>
                    <EditEvent/>
                </MenuItem>
                <MenuItem onClick={handleCloseMenuPublish}>{isPublished ? 'Unpublish' : 'Publish'}</MenuItem>
                <DeleteCard id={event.id}/>
            </Menu>
        </div>);
};

export default CardMenu;



