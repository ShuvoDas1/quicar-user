import { Box, Card, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PageLayout from "../../components/layout/PageLayout";
import { getAllNotifications } from "../../redux/notification/notificationAction";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {quicarIcon} from "../../assets/svg"

const Notification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, notifications } = useSelector(
    (state) => state.notificationReducer
  );

  useEffect(() => {
    dispatch(getAllNotifications());
  }, []);

  return (
    <div>
      <PageLayout title="Notification" appbar={true}>
        <div className="box__shadow"> </div>

        <CardWrapper>
          {loading
            ?<Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <CircularProgress />
          </Box>
            : notifications?.map((item, index) => (
                <Card
                  key={index}
                  className="card cursor-pointer"
                  onClick={() => navigate(`/notification/${item.id}`)}
                >
                  <CardContent
                    className="card__content__wrapper"
                    style={{
                      backgroundColor: item.isSeen ? "white" : "#e6f7f4",
                    }}
                  >
                    <div className="card__content">
                      <div className="icon__wrapper">
                        {quicarIcon}
                      </div>
                      <div
                        className="content"
                        style={{
                          backgroundColor: item.isSeen ? "white" : "#e6f7f4",
                        }}
                      >
                        <h4>{item?.title}</h4>
                        <p>{item.description.substring(0, 50)}...</p>
                        <span>{moment(`${item.createdAt}`).startOf('day').fromNow() }</span>
                      </div>
                    </div>
                  </CardContent>

                </Card>
              ))}
        </CardWrapper>
      </PageLayout>
    </div>
  );
};



const CardWrapper = styled.div`
  margin: 0px 20px;

  .card {
    margin-bottom: 10px;
    .card__content__wrapper {
      /* padding:  15px !important; */

      .card__content {
        display: flex;
        align-items: center;

        .icon__wrapper {
          display: flex;
        }

        .content {
          margin-left: 15px;
          h4,p {
            padding-bottom: 10px;
          }
          
        }
      }
    }
  }
`;

export default Notification;
