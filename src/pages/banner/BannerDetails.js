import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '../../components/layout/PageLayout';
import { requestApi } from '../../network/httpRequest';
import { BANNER_BY_ID } from '../../network/urls';
const BannerDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [banner, setBanner] = useState();

    const { banners } = useSelector(state => state.homeReducer)
    useEffect(() => {
        if (banners) {
            const have = banners.find(item => item.id == id);
            if (have) {
                setBanner(have)
            } else {
                callApi(id)
            }
        }
    }, [banners]);

    const callApi = async (bannerId) => {
        const { data } = await requestApi().request(BANNER_BY_ID+bannerId)
        if (data.status) {
            setBanner(data.data.banner)
        } else {
            navigate('/', {
                replace: true
            })
        }
    }

    return (
        <PageLayout title="Notification" appbar={true}>

            {
                banner ? <div>
                    <BannerImage src={banner.image ?? ""} />
                    <BannerTitle>{banner.title ?? ""}</BannerTitle>

                    <div style={{ padding: '10px' }}>

                        <div dangerouslySetInnerHTML={{ __html: banner.description }}></div>

                    </div>

                </div> : <LoaderWrapper>
                    <CircularProgress />
                </LoaderWrapper>
            }


        </PageLayout>
    )
};


const BannerImage = styled.img`
    width: 100%;
`
const BannerTitle = styled.h3`
    padding: 10px;
`
const LoaderWrapper = styled.div`
display: flex;
height: 100%;
width: 100%;
justify-content: center;
align-items: center;
padding-bottom: 80px;
    
`


export default BannerDetails;
