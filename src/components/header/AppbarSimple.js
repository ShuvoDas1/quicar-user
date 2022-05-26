import React from 'react'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const AppbarSimple = ({ title, rideBidding }) => {

    const navigate = useNavigate();




    // function goBack() {
    //     // navigate("/posts", {
    //     //   replace: true,
    //     // });
    //     navigate(-1);
    //   }


    return (

        <AppBar position="static" style={{ background: 'white',padding:'0px' }} elevation={0} >
            <Toolbar >
                <Typography
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'block', sm: 'block' } }}
                   
                >
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => {

                        if (rideBidding == true) {
                            navigate("/main/ride?type=send");
                        } else {
                            navigate(-1)
                        }



                    }}>
                        <ArrowBack style={{ color: 'black' }} />
                    </IconButton>
                </Typography>

                <h3 style={{ color: 'black' }}>{title}</h3>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>


                </Box>
            </Toolbar>
        </AppBar>

    )
}

export default AppbarSimple
