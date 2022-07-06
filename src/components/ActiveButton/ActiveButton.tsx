import React, {FC} from 'react';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";

interface IProps {
    (bool: boolean): void;
}

const ActiveButton: FC<{ changePublished: IProps, name: string }> = ({changePublished, name}) => {
    return (
        <Button variant="contained"

                onClick={() => changePublished(true)}
                sx={{
                    width: '233px',
                    height: '46px',
                    borderRadius: '61px'
                }}><Typography fontFamily={'Montserrat'} fontStyle={'normal'}
                               fontWeight={600} fontSize={'24px'}
                               color={'#FFFFFF'} lineHeight={'29px'}
                               textTransform={'none'}>{name}</Typography></Button>
    );
};

export {ActiveButton};
