import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GlobalLoader from './loading/GlobalLoader';

const GlobalWrapper = ({ children }) => {

    const navigate = useNavigate();
    const { accessToken, user } = useSelector(state => state.usereducer);

    useEffect(() => {
        if (!accessToken || !user) {
            navigate('/login')
        }


        if (accessToken && user && !user.name) {
            navigate('/register')
        }
    }, [accessToken, user]);

    return <div>
        {children}

        {/* <GlobalLoader/> */}
    </div>;
};

export default GlobalWrapper;
