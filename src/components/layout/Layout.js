import React from 'react'
import './layout.scss';


const Layout = ({ children }) => {

    return (
        <div>
            <div className="main__page">
                <div className="app__wrapper">
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
