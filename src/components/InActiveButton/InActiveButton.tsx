import React, {FC} from 'react';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";

interface IProps {
    (bool: boolean): void;

}

const InActiveButton : FC<{ changePublished: IProps ,status:boolean, name:string}> = ({changePublished,status,name}) => {
    return (
        <Button variant="text"
                onClick={() => changePublished(status)}
                sx={{
                    width: '233px',
                    height: '46px',
                    color: '#000000'
                }}><Typography fontFamily={'Montserrat'} fontStyle={'normal'}
                               fontWeight={600}
                               fontSize={'24px'}
                               color={'#000000'} lineHeight={'29px'}
                               textTransform={'none'}>{name}</Typography></Button>
    );
};

export  {InActiveButton};
