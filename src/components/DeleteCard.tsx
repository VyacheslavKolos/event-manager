import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FC} from "react";
import {MenuItem} from "@mui/material";
import {useAppDispatch} from "../hooks";
import {deleteEventThunk} from "../store/slices";

// @ts-ignore
import DeleteIcon from '../assets/icons/DeleteIcon.png'


interface IProps {
    id: number;

}

const DeleteCard: FC<IProps> = ({id}) => {


    const dispatch = useAppDispatch();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const DeleteAndHandleClose = () => {
        dispatch(deleteEventThunk({id}));
        setOpen(false);
    };

    return (
        <div>
            <MenuItem onClick={handleClickOpen} sx={{bgcolor: '#FF4A4A', color: '#FFFFFF', gap:'8px', pl:'4px'}}><img src={DeleteIcon}
                                                                                                 alt={'delete icon'}/> Delete</MenuItem>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete event"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this event?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={DeleteAndHandleClose} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteCard;
