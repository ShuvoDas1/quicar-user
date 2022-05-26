
import React from 'react'
import './bottom_navigation.scss'



import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/MoreVert';

import HomeIcon from '@mui/icons-material/Home';

const BottomNavigation = () => {


    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    });


    return (
        <Box>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }} style={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton color="inherit" aria-label="open drawer">
                        <HomeIcon />
                    </IconButton>
                </Box>

                <StyledFab color="secondary" aria-label="add">
                    <AddIcon />
                </StyledFab>



                <Box sx={{ flexGrow: 1 }} style={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton color="inherit">
                        <MoreIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </Box>
    )
}

export default BottomNavigation
