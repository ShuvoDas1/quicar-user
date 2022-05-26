import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
const GlobalLoader = () => {
    return <Wrapper>
        <Dialog
            open={true}
            onClose={() => {

            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <CircularProgress />
        </Dialog>

    </Wrapper>;
};


const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
`

export default GlobalLoader;
