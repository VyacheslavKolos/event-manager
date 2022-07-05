import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useForm, Controller} from "react-hook-form";


//import {createProductThunk} from "../../store";
import {useAppDispatch} from "../hooks";
import {Box, Stack, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {createEventThunk} from "../store/slices";


import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";


const AddDialogWindow = () => {


    const {handleSubmit, control} = useForm({mode: "onChange", defaultValues: {title: ""}})

    const dispatch = useAppDispatch();

    const submit = (event: any) => {
        event.isPublished = false;
        event.time=value;
        if (
            event.title === '' || event.time === '') {
            alert("please enter some information")
        } else {
            console.log(event);
            dispatch(createEventThunk({event}))
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState<Date | null>(new Date());


    return (
        <Box>
            <Button onClick={handleClickOpen} variant="contained" color="success"
                    sx={{width: '233px', height: '69px', bgcolor: '#4ADE80', borderRadius: '57px'}}>
                <Stack alignItems={'center'} justifyContent={'center'} direction={'row'} gap={'20px'}>
                    <AddIcon/>
                    <Typography fontFamily={'Montserrat'} fontStyle={'normal'} fontWeight={600} fontSize={'24px'}
                                color={'#FFFFFF'} lineHeight={'29px'} textTransform={'none'}>Add Event</Typography>
                </Stack>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit(submit)}>
                    <DialogTitle>Add event</DialogTitle>
                    <DialogContent>

                        <Stack width={'300px'} gap={'30px'}>
                            <Controller control={control} render={({field: {ref, ...field}}) => <TextField
                            {...field}
                            inputRef={ref}
                            autoFocus
                            margin="dense"
                            id="title"
                            label="Event description"
                            type="text"
                            fullWidth
                            variant="standard"
                        />} name={"title"}
                        />

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="DateTimePicker"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </LocalizationProvider>
                        </Stack>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type={"submit"} onClick={handleClose}>Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
    );
};

export {AddDialogWindow};
