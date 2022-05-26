import React from 'react'
import styled from 'styled-components'
import RideHistoryItem from '../../components/rideHistory/RideHistoryItem'

const RequestPage = () => {

    return (
        <PageWrapper>
            {[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1].map((item, index) => {
                return (
                    <RideHistoryItem key={index}/>
                )
            })}
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    width:100%;
    padding: 10px 5px;

`



export default RequestPage
