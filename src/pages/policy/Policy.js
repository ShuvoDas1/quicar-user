import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import styled from "styled-components";
import LockIcon from "@mui/icons-material/Lock";
import PolicyIcon from "@mui/icons-material/Policy";
import GroupIcon from "@mui/icons-material/Group";
import CancelIcon from "@mui/icons-material/Cancel";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useNavigate,createSearchParams } from "react-router-dom";

const Policy = () => {
  const policyItems = [
    { id: 1, name: "Privacy Policy", icon: <LockIcon />, type: "userPrivacyPolicy" },
    { id: 2, name: "About Us", icon: <GroupIcon />, type: "userAppAboutUs" },
    { id: 3, name: "Payment Policy", icon: <PolicyIcon />, type: "userPaymentPolicy" },
    { id: 4, name: "Ride Cancellation Policy", icon: <CancelIcon />, type: "userRideCancellationPolicy" },
    { id: 5, name: "Refund Policy", icon: <CurrencyExchangeIcon />, type: "userPaymentRefundPolicy" },
  ];

  const navigate = useNavigate();

  const goToDetails = (type,name) =>{
     
    navigate({
        pathname: "/policy/details",
        search: `?${createSearchParams({
             type,
             name
        })}`,
        
    });
  }

  return (
    <PageLayout title="Policy" appbar={true}>
      <div className="box__shadow"> </div>
      <CardWrapper>
        {policyItems.map((item, index) => (
          <Card key={index} className="card cursor-pointer" onClick={()=>goToDetails(item.type, item.name)}>
            <CardContent className="content">
              {item.icon}
              <h4>{item.name}</h4>
            </CardContent>
          </Card>
        ))}
      </CardWrapper>
    </PageLayout>
  );
};

const CardWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  margin: 0px 20px;
  .card {
    margin-bottom: 10px;

    .content {
      display: flex;
      align-items: center;
      &:hover {
        background-color: #e6f7f4 !important;
      }

      h4 {
        margin-left: 10px;
      }
    }
  }
`;

export default Policy;
