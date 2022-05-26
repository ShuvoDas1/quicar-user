import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const HomePageCategory = () => {

    let navigate = useNavigate()
    const [ride, setride] = useState(false);

    const { carRentalStatus } = useSelector(state => state.homeReducer);

    useEffect(() => {
        if (carRentalStatus == "open") {
            setride(true)
        } else {
            setride(false)
        }
    }, [carRentalStatus]);





    return (
        <Wrapper>

            <div className='title__wrapper'>
                <div className="title">
                    <span>Service</span>
                </div>
                <div className="language__change">
                </div>
            </div>

            <div className="services">

                <div className="item" onClick={() => {
                    if(ride){
                        navigate('/car-rental')
                    }
                }}>

                    <div className="wrap">
                        <div className="icon__wrap">
                            <img className={`image ${!ride ? 'off' : ''} `} src="../images/icons/car.svg" />
                        </div>
                        <div className="title__Wrap">
                            <span>Car Rental</span>
                        </div>
                        <div className={!ride ? 'disabled' : ''}></div>
                    </div>

                </div>

                <div className="item">

                    <div className="wrap">
                        <div className="icon__wrap">
                            <img className='image' src="../images/icons/coupon.svg" />
                        </div>
                        <div className="title__Wrap">
                            <span>Coupon</span>
                        </div>
                    </div>

                </div>

            </div>

        </Wrapper>
    )
}


const Wrapper = styled.div`
    padding: 10px;

    .title__wrapper{
        width:100%;
        display: flex;
        justify-content:space-between;
        padding-left: 20px;
    }

    .services{
        display: flex;
        justify-content: center;
        align-items: center;
        .item{
            flex: 1;
            height: 100px;
            padding: 10px;

            .wrap{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                border: 1.5px solid #ebebeb;
                border-radius: 10px;
                overflow: hidden;
                padding: 0px;
                margin: 0px;
                cursor: pointer;
                padding: 3px;
                position: relative;

                .disabled{
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    background-color: #dbdbdb96;
                    cursor: not-allowed;
                }

                .icon__wrap{
                    width: 100% !important;
                    height: 100%;
                    flex: 1 !important;
                    display: flex !important;
                    justify-content: center !important; 
                    align-items: center !important;
                    background-color: #e1e1e1;
                    border-radius: 6px !important;
                    

                    .image{
                        width: 50px;
                        height: 50px;
                            &.off{
                                filter: grayscale(100%);
                            }
                    }

                    .image__wrapper{
                        width: 100% !important;
                        display: flex;
                    }
                }

                .title__Wrap{
                    padding: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

        }

    }

`


export default HomePageCategory
