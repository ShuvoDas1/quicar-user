import React, { useEffect, useState } from 'react'
import { primaryColor } from '../../utils/color';
import { Paper } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BottomNavigation } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from "react-router-dom";



const MaterialBottomNavigation = () => {

    const [value, setValue] = useState(localStorage.getItem('mainPage') ? localStorage.getItem('mainPage') : 'home');
    // const router = useHistory()

    let navigate = useNavigate();



    return (
        <Paper elevation={8}>
            <BottomNavigation
                showLabels
                style={{ backgroundColor: 'white' }}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    navigate(newValue)
                    localStorage.setItem('mainPage',newValue)
                }}
            >
                <BottomNavigationAction value="home" label="Home" icon={<HomeIcon />} style={{ color: value === 'home' ? primaryColor : 'grey' }} />
                <BottomNavigationAction value="ride" label="Ride" icon={<FavoriteIcon />} style={{ color: value === 'ride' ? primaryColor : 'grey' }} />
                <BottomNavigationAction value="more" label="More" icon={<MoreHorizIcon />} style={{ color: value === 'more' ? primaryColor : 'grey' }} />
            </BottomNavigation>
        </Paper>
    )
}

export default MaterialBottomNavigation; 
