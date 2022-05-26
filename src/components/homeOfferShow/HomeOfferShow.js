import React, { useState } from 'react'
import './homeOfferShow.scss'
const HomeOfferShow = () => {


    const [showBanner, setBanner] = useState(true)


    return (
        <>
            {
                showBanner && <div className='home__offer__show'>
                    <div className="wrapper">
                        <div className="offer__title">
                            <span>Offer get title</span>
                        </div>
                        <div className="require">
                            <span>Offer description write here</span>
                        </div>


                        <div className='cross' onClick={() => setBanner(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default HomeOfferShow
