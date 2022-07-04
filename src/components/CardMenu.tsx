import React from 'react';
import {Button, Menu, Typography} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import DeleteCard from "./DeleteCard";


const CardMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Publish</MenuItem>
                {/*<MenuItem onClick={handleClose} sx={{bgcolor:'#FF4A4A', color:'#FFFFFF'}}>Delete</MenuItem>*/}
                <DeleteCard id={3}/>
            </Menu>
        </div>);
};

export default CardMenu;



