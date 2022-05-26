import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import moment from 'moment';
const RideHistoryItem = ({ item }) => {
    let navigate = useNavigate()

    const [remainingTime, setRemainingTime] = useState(timeDifference(new Date(item.onBiddingTime), new Date()));
    var timerReceiver;
    useEffect(() => {
        countdownStart()
        return () => {
            if (item.status == "send") {
                clearTimeout(timerReceiver)
            }
        }
    }, []);
    function countdownStart() {
        if (item.status == "send") {
            timerReceiver = setInterval(() => {
                var remaining = timeDifference(new Date(item.onBiddingTime), new Date())
                setRemainingTime(remaining)
            }, 10000);
        }
    }

    return (
        <ListItem>

            <div className="wrapper">
                <div className="location__Wrapper">


                    <div className="line">

                        <div className="shap_line">

                            <svg className='top_shap' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                                <circle id="Ellipse_776" cx="5" cy="5" r="5" fill="#4a4a4c" />
                            </svg>


                            <svg className='bottom_shap' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                                <g id="Group_1533" transform="translate(-72 -181)">
                                    <circle id="Ellipse_777" cx="5" cy="5" r="5" transform="translate(72 181)" fill="#4a4a4c" />
                                    <circle id="Ellipse_778" cx="3" cy="3" r="3" transform="translate(74 183)" fill="#fff" />
                                </g>
                            </svg>



                        </div>


                    </div>

                    <div className="address">
                        <div className="pickup">
                            <span className='title'>Pickup Point</span>
                            <span className='address__name'>{item.pickupLocation.address}</span>
                        </div>
                        <div className="dropoff">
                            <span className='title'>DropOff Point</span>
                            <span className='address__name'>{item.dropOffLocation.address}</span>
                        </div>
                    </div>


                </div>


                <div className="bottom__wrapper">

                    <div className={`timeing ${item.returnTime ? '' : 'center'}`}>

                        <div className="travel__date">

                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <g id="Group_6412" transform="translate(-40 -250)">
                                        <g id="Rectangle_1153" transform="translate(40 250)" fill="#e03636" stroke="#000" strokeWidth="0.3">
                                            <rect width="18" height="18" rx="2" stroke="none" />
                                            <rect x="0.15" y="0.15" width="17.7" height="17.7" rx="1.85" fill="none" />
                                        </g>
                                        <path id="Icon_material-card-travel" d="M13.193,5.265h-1.7V4.133A1.129,1.129,0,0,0,10.362,3h-3.4A1.129,1.129,0,0,0,5.832,4.133V5.265h-1.7A1.129,1.129,0,0,0,3,6.4v6.229A1.129,1.129,0,0,0,4.133,13.76h9.061a1.129,1.129,0,0,0,1.133-1.133V6.4A1.129,1.129,0,0,0,13.193,5.265ZM6.964,4.133h3.4V5.265h-3.4Zm6.229,8.495H4.133V11.495h9.061Zm0-2.832H4.133V6.4h1.7V7.53H6.964V6.4h3.4V7.53h1.133V6.4h1.7Z" transform="translate(40.336 250.62)" fill="#fff" stroke="#000" strokeWidth="0.1" />
                                    </g>
                                </svg>
                            </div>
                            <div className="time__Wrap">
                                <span className='title'>Travel Date & Time</span>
                                <span className='time'>{item.pickUpTimeText}</span>
                            </div>


                        </div>

                        {
                            item.returnTime &&


                            <div className="return__date">

                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.75" height="14.75" viewBox="0 0 14.75 14.75">
                                        <g id="Group_6412" transform="translate(0 -5.5)">
                                            <g id="u-turn" transform="translate(0 5.5)">
                                                <path id="Path_13830" d="M20.828,12.258,17.06,8.491a3.405,3.405,0,0,0-4.8,0L8.491,12.258a3.405,3.405,0,0,0,0,4.8l3.768,3.768a3.405,3.405,0,0,0,4.8,0l3.768-3.768A3.405,3.405,0,0,0,20.828,12.258Z" transform="translate(-7.284 -7.284)" fill="#fe7d43" />
                                                <path id="Path_13831" d="M43.795,50.089a2.512,2.512,0,0,1-1.79-.737l-3.768-3.768a2.541,2.541,0,0,1,0-3.579l3.768-3.768a2.541,2.541,0,0,1,3.579,0l3.768,3.768a2.541,2.541,0,0,1,0,3.579l-3.768,3.768A2.512,2.512,0,0,1,43.795,50.089Z" transform="translate(-36.42 -36.42)" fill="#ffd15b" />
                                                <path id="Path_13832" d="M190.691,119.375a.223.223,0,0,0-.165-.069h-.455v-.434a2.088,2.088,0,1,0-4.176-.027v5.5a.115.115,0,0,0,.115.115h.922a.115.115,0,0,0,.115-.115v-5.477a.951.951,0,0,1,.952-.954.937.937,0,0,1,.919.935v.46h-.455a.223.223,0,0,0-.165.069.216.216,0,0,0-.027.258l1.037,1.729a.216.216,0,0,0,.371,0l1.037-1.729A.216.216,0,0,0,190.691,119.375Z" transform="translate(-180.541 -113.394)" fill="#7a6d79" />
                                                <g id="Group_1517">
                                                    <path id="Path_13833" d="M13.7,4.822,9.928,1.054a3.621,3.621,0,0,0-5.107,0l-.855.855a.216.216,0,1,0,.306.306l.855-.855a3.189,3.189,0,0,1,4.5,0l3.768,3.768a3.189,3.189,0,0,1,0,4.5L9.623,13.391a3.189,3.189,0,0,1-4.5,0L1.359,9.623a3.189,3.189,0,0,1,0-4.5l2.2-2.2a.216.216,0,0,0-.306-.306l-2.2,2.2a3.621,3.621,0,0,0,0,5.107L4.822,13.7a3.621,3.621,0,0,0,5.107,0L13.7,9.928a3.621,3.621,0,0,0,0-5.107Z" transform="translate(0)" />
                                                    <path id="Path_13834" d="M39.557,41.117l2.664-2.664a2.757,2.757,0,0,0,0-3.885L38.453,30.8a2.757,2.757,0,0,0-3.885,0L30.8,34.568a2.757,2.757,0,0,0,0,3.885l3.768,3.768a2.757,2.757,0,0,0,3.885,0l.392-.392a.216.216,0,0,0-.306-.306l-.392.392a2.325,2.325,0,0,1-3.274,0l-3.768-3.768a2.325,2.325,0,0,1,0-3.274l3.768-3.768a2.325,2.325,0,0,1,3.274,0l3.768,3.768a2.325,2.325,0,0,1,0,3.274l-2.664,2.664a.216.216,0,0,0,.306.306Z" transform="translate(-29.136 -29.136)" />
                                                    <path id="Path_13835" d="M248.932,56.831v-.115a.216.216,0,1,0-.432,0v.115a.216.216,0,1,0,.432,0Z" transform="translate(-241.341 -54.872)" />
                                                    <path id="Path_13836" d="M248.716,436.5a.216.216,0,0,0-.216.216v.115a.216.216,0,1,0,.432,0v-.115A.216.216,0,0,0,248.716,436.5Z" transform="translate(-241.341 -423.925)" />
                                                    <path id="Path_13837" d="M436.831,248.932a.216.216,0,1,0,0-.432h-.115a.216.216,0,1,0,0,.432Z" transform="translate(-423.925 -241.341)" />
                                                    <path id="Path_13838" d="M56.716,248.5a.216.216,0,1,0,0,.432h.115a.216.216,0,1,0,0-.432Z" transform="translate(-54.872 -241.341)" />
                                                    <path id="Path_13839" d="M182.212,114.4a.434.434,0,0,0,.371-.21l1.037-1.729a.43.43,0,0,0-.053-.515.439.439,0,0,0-.324-.139H183v-.217a2.325,2.325,0,0,0-2.281-2.33H180.7a2.306,2.306,0,0,0-2.3,2.3v5.5a.332.332,0,0,0,.331.331h.922a.332.332,0,0,0,.331-.331v-5.477a.751.751,0,0,1,.224-.532.7.7,0,0,1,.508-.206.723.723,0,0,1,.707.719v.244h-.239a.439.439,0,0,0-.324.139.43.43,0,0,0-.053.515l1.037,1.729A.434.434,0,0,0,182.212,114.4Zm1.2-2.307-.159.147h0Zm-2.227.147h.455a.216.216,0,0,0,.216-.216v-.46a1.157,1.157,0,0,0-1.132-1.151,1.129,1.129,0,0,0-.818.33,1.186,1.186,0,0,0-.353.84v5.376h-.72v-5.395a1.874,1.874,0,0,1,1.89-1.872,1.891,1.891,0,0,1,1.853,1.9v.434a.216.216,0,0,0,.216.216h.461l-1.037,1.728-1.036-1.728Z" transform="translate(-173.257 -106.11)" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>

                                </div>
                                <div className="time__Wrap">
                                    <span className='title'>Return Date & Time</span>
                                    <span className='time'>{item.returnTimeText}</span>
                                </div>

                            </div>

                        }
                    </div>

                    {
                        item.status === "send" && <div className="counting">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16.374" height="16.374" viewBox="0 0 16.374 16.374">
                                <g id="Group_6413" transform="translate(-2.5 -2.5)">
                                    <path id="Path_22751" d="M18.374,10.687A7.687,7.687,0,1,1,10.687,3,7.687,7.687,0,0,1,18.374,10.687Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                                    <path id="Path_22752" d="M18,9v4.612l3.075,1.537" transform="translate(-7.313 -1.925)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                                </g>
                            </svg>

                            <span className='timeing'>On Bidding : {remainingTime}</span>


                        </div>

                    }

                    <div className="status__Wrapper">
                        <span>Status : {item.statusText} </span>
                    </div>

                    <div className="button__wrapper">


                        <button className='details' onClick={() => navigate(`/ride-details?rideId=${item.id}`)}> Details </button>

                        <button className='bidlist' onClick={() => navigate(`/ride-bidding?rideId=${item.id}`)}>Bid List {item.biddings.length} </button>

                    </div>

                </div>


            </div>


            <div className="progressingShap">
                <div className="wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7">
                        <g id="Ellipse_899" fill="#fff" stroke="#f49c32" strokeWidth="1.5">
                            <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
                            <circle cx="3.5" cy="3.5" r="2.75" fill="none" />
                        </g>
                    </svg>
                </div>

            </div>

        </ListItem>
    )
}

function timeDifference(bigTime, current) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = bigTime - current;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + ' seconds remaining';
    }

    else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + ' minutes remaining';
    }

    else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + ' hours remaining';
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed / msPerDay) + ' days remaining';
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months remaining';
    }

    else {
        return 'approximately ' + Math.round(elapsed / msPerYear) + ' years remaining';
    }
}


const ListItem = styled.div`
    width:100%;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.23);
    margin-bottom:20px;
    margin-top: 10px;
    position: relative;
    border-radius: 10px;



    .wrapper{

        .location__Wrapper{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-bottom: 15px;
            padding-top: 10px;
            padding-left:55px;
            padding-right:5px;
            border-bottom: 1px solid #d8d8da;


            .line{
                padding-right: 20px;
                .shap_line{
                    height: 50px;
                    width: 2px;
                    background-color: #4a4a4c;
                    position: relative;

                    .top_shap{
                        position: absolute;
                        top: -5px;
                        left: -4px;
                    }
                    .bottom_shap{
                        position: absolute;
                        bottom: -5px;
                        left: -4px;
                    }
                }
            }



            .address{
                

                .pickup{
                    padding-bottom: 8px;
                    
                    border-bottom: 1px solid #bbbbbb;
                    border-style:dashed;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                    span{
                        display: block;
                    }

                    .title{
                        font-size: 14px;
                        color: gray;
                    }
                    .address__name{}


                }

                .dropoff{
                    padding-top: 7px;
                    span{
                        display: block;
                    }
                    .title{
                        font-size: 14px;
                        color: gray;
                    }

                }

                
            }
        }

        .bottom__wrapper{
            
            

            .timeing{
                padding: 10px 15px;

                display: flex;
                justify-content: space-between ;

                &.center{
                    justify-content: center;
                }

                .travel__date{
                    display: flex;
                    align-items: center;

                    .icon{
                       padding: 10px;
                    }

                    .time__Wrap{
                        .time{
                            display: block;
                            font-size:14px;
                            font-weight: 600;
                        }
                        .title{
                            display: block;
                            font-size: 14px;
                            color: gray;
                        }
                    }

                    
                }

                .return__date{
                    display: flex;
                    align-items: center;

                    .icon{
                       padding: 10px;
                    }

                    .time__Wrap{
                        .title{
                            display: block;
                            font-size: 14px;
                            color: gray;
                        }
                        .time{
                            display: block;
                            font-size:14px;
                            font-weight: 600;
                        }
                    }
                }
            }

            .counting{
                display: flex;
                align-items: center;
                justify-content: center;

                svg{
                    padding-right: 10px;
                    height: 25px;
                    width: 25px;
                }

                .timeing{
                    margin-right: 25px;
                    padding: 0px;
                    font-weight: 600;
                }
            }

            .status__Wrapper{
                display: flex;
                justify-content: center;
            }

            .button__wrapper{
                width: 100%;
                display: flex;
                justify-content: space-evenly;
                padding: 15px;

                button{
                    padding: 7px 40px;
                    cursor: pointer;

                    &.details{
                        background-color: #ffffff;
                        color: #4B4B4B;
                        font-weight: bold;
                        border: 1px solid #4B4B4B;
                        border-radius: 5px;

                        &:hover{
                            background-color: #e1e1e1;
                        }
                    }
                    &.bidlist{
                        background-color: #4B4B4B;
                        color: white;
                        border: #4B4B4B;
                        border-radius: 5px;
                        font-weight: bold;

                        &:hover{
                            background-color: #1f1f1f;
                        }
                    }
                }

            }
          

        }


    }

    .progressingShap{
        height: 2px;
        background-color: #F79520;
        position: absolute;
        top: 0;
        width: 78%;

       


        .wrap{
            position: relative;

            svg{
                position: absolute;
                top: -2px;
                right: 0;
            }
        }
      
    }


`
export default RideHistoryItem
