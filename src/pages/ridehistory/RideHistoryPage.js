import React, { useEffect, useState } from 'react'
import styledComponent from 'styled-components'
import RideHistoryItem from '../../components/rideHistory/RideHistoryItem'
import { changeGetRideListType, getRideList } from '../../redux/ride/rideAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import HistoryIcon from '@mui/icons-material/History';

const RideHistoryPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    const { rides, type, loading, hasNextPage } = useSelector(state => state.rideReducer)


    useEffect(() => {
        var queryType = searchParams.get('type');
        if (queryType) {
            dispatch(changeGetRideListType(queryType))
        }
    }, []);


    useEffect(() => {
        dispatch(getRideList(true))
    }, [type])


    const loadMore = () => {
        dispatch(getRideList(false))
    }


    return (
        <div>

            {/* <div style={{display: 'flex',justifyContent: 'flex-end'}}>
                <RideSelection/>
            </div> */}

            <PageWrapper>

                {
                    rides.map((item, index) => {
                        return (
                            <RideHistoryItem key={index} item={item}/>
                        )
                    })
                }



                {
                    loading && <CenterDiv>
                        <CircularProgress size={25} />
                    </CenterDiv>
                }


                {
                    (hasNextPage && !loading) && <CenterDiv>
                        <Button
                            variant="outlined"
                            onClick={loadMore}
                        >Load More</Button>
                    </CenterDiv>
                }

                {
                    rides.length < 1 && !loading && < CenterVertical>
                        <HistoryIcon style={{width:'50px',height:'50px',fill:'grey'}}></HistoryIcon>
                    </CenterVertical>
                }

            </PageWrapper>
        </div >
    )
}

const PageWrapper = styledComponent.div`
    width:100%;
    padding: 10px 5px;
`
const CenterDiv = styledComponent.div`
    flex: 1;
    overflow: hidden;
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
`
const CenterVertical = styledComponent.div`
    flex: 1;
    overflow: hidden;
    display: flex;
    width:100%;
    height:80vh;
    justify-content: center;
    align-items: center;
`

export default RideHistoryPage