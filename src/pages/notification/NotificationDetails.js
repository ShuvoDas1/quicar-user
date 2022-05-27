import React, { useEffect, useState } from "react";
import PageLayout from "../../components/layout/PageLayout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const NotificationDetails = () => {
  const { id } = useParams();

  const { loading, notifications } = useSelector(
    (state) => state.notificationReducer
  );

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (id) {
      const findItem = notifications.find((item) => item.id == id);
      if (findItem) {
        console.log({ findItem });
        setNotification(findItem);
      } else {
        console.log("call api");
      }
    }
  }, [id]);

  return (
    <PageLayout title="Notification" appbar={true}>
      <div className="box__shadow"> </div>

      <DetailsWrapper>
        <h4 className="title">{notification?.title || <Skeleton  />}</h4>
        <div className="img__wrapper">
          {<img src={notification?.image} alt="" /> || <Skeleton height={150} />}
        </div>
        <p className="description">{notification?.description || <Skeleton count={5} />}</p>
      </DetailsWrapper>
    </PageLayout>
  );
};

const DetailsWrapper = styled.div`
  .title {
    font-size: 20px;
    margin-left: 20px;
    text-transform: uppercase;
  }
  .img__wrapper {
    height: 150px;
    margin: 15px 0px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .description {
    margin-left: 20px;
    text-align: left;
  }
`;

export default NotificationDetails;
