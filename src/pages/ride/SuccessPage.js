import React,{useEffect,useState} from 'react'
import Layout from '../../components/layout/Layout'
import sc from 'styled-components'
import success_shap from './succss_shap.png';
import success_shap_svg from './success_shap_svg.svg';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { purple, orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useNavigate, useSearchParams } from 'react-router-dom'
const theme = createTheme({
    palette: {
        primary: orange,
        secondary: orange,
    },
});

const CheckPriceList = styled(Button)({
    boxShadow: 'none',
    textTransform: 'uppercase',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid #ffffff',
    lineHeight: 1.5,
    backgroundColor: '#EE9A39',
    borderColor: '#ffffff',
    color: "white",
    '&:hover': {
        backgroundColor: '#EE9A39',
        borderColor: '#ffffff',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#EE9A39',
        borderColor: '#ffffff',
    },
});
const SuccessPage = () => {

    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();
    const [rideId, setRideId] = useState("");

    useEffect(() => {
        const id = searchParams.get('rideId')
        console.log(id);
        if (id) {
            setRideId(id)
        }
    })

    return (
        <Layout>
            <div style={{ backgroundColor: "#EE9A39", height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>


                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '50px' }}>
                    <img src={success_shap_svg} style={{ paddingBottom: "30px" }} />

                    <Title>Successful</Title>

                    <p style={{ color: 'white', textAlign: 'center' }}>Your Request Has been Successfully  Summitted <br />
                        Please check trip price from bid list</p>

                    <CheckPriceList
                        variant='outlined'
                        color='success'
                        onClick={() => {
                            navigate(`/ride-bidding?rideId=${rideId}`, {
                                replace: true,
                            });
                        }}
                        style={{ marginTop: "20px" }}>Check price list</CheckPriceList>

                </div>


            </div>
        </Layout>
    )
}


const Title = sc.p`

font-size:22px;
text-transform: uppercase;
font-weight:bold;
color:#ffffff;



`

export default SuccessPage