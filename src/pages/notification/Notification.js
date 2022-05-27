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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="60"
                          height="30"
                          viewBox="0 0 167.246 71.526"
                        >
                          <g
                            id="Group_6416"
                            data-name="Group 6416"
                            transform="translate(-3700.566 577.294)"
                          >
                            <g id="Group_6415" data-name="Group 6415">
                              <g id="Group_6414" data-name="Group 6414">
                                <g id="Group_6413" data-name="Group 6413">
                                  <g
                                    id="Group_6412"
                                    data-name="Group 6412"
                                    transform="translate(3779.135 -716.561)"
                                  >
                                    <g
                                      id="Group_2568"
                                      data-name="Group 2568"
                                      transform="translate(-128.453 100.56)"
                                    >
                                      <path
                                        id="Path_15460"
                                        data-name="Path 15460"
                                        d="M94.463,110.233c-.454-3.152-.492-5.859-1.12-8.49A17.455,17.455,0,0,0,75.8,87.9c-9.877.1-17.458-3.962-22.581-12.339-5.439-8.9-4.075-21.142,3-28.817a24.6,24.6,0,0,1,28.72-5.668C99.4,47.637,103.3,66.266,94.527,77.667c-.739.96-1.245,1.1-2.237.5-1.36-.829-3.532-1.224-4.007-2.365-.492-1.183,1.224-2.729,1.969-4.116a17.838,17.838,0,1,0-33.57-7.39c.671,9.745,8.24,16.7,18.247,16.713,8.491.011,15.493,3.086,20.817,9.811,3.668,4.633,4.078,9.493,1.29,14.662C96.255,106.931,95.47,108.376,94.463,110.233Z"
                                        fill="#4a4c4f"
                                      />
                                      <path
                                        id="Path_15461"
                                        data-name="Path 15461"
                                        d="M150.043,74.177c0,1.549-.09,3.1.015,4.646.529,7.713-5.608,12.028-12.284,11.784-5.587-.2-9.49-2.976-10.756-7.692a9.9,9.9,0,0,1-.356-2.451c-.035-4.26.008-8.52-.036-12.78-.01-.934.255-1.268,1.215-1.225,1.6.071,3.215.07,4.82,0,.935-.041,1.234.237,1.219,1.2-.056,3.319-.016,6.639-.024,9.958a7.014,7.014,0,0,0,.951,3.8,3.943,3.943,0,0,0,6.864.2,6.833,6.833,0,0,0,1.113-4.088c0-3.264.044-6.529-.027-9.792-.022-1.039.279-1.335,1.3-1.279a39.034,39.034,0,0,0,4.653,0c1.149-.074,1.394.374,1.359,1.417C149.993,69.97,150.043,72.074,150.043,74.177Z"
                                        transform="translate(-21.919 -7.915)"
                                        fill="#4a4c4f"
                                      />
                                      <path
                                        id="Path_15462"
                                        data-name="Path 15462"
                                        d="M205.923,81.738c0,2.173-.026,4.162.015,6.149a1.218,1.218,0,0,1-.794,1.264,12.48,12.48,0,0,1-16.074-4.406,13.075,13.075,0,0,1,2.73-16.657c3.95-3.119,9.4-2.842,13.544-1.019.571.25.646.639.639,1.177-.022,1.877-.009,3.754-.009,5.77a33.224,33.224,0,0,0-4.511-1.322c-4.476-.623-7.539,2.916-6.111,7.069.9,2.623,3.525,3.807,6.867,3.04C203.4,82.533,204.55,82.138,205.923,81.738Z"
                                        transform="translate(-39.224 -7.707)"
                                        fill="#4a4c4f"
                                      />
                                      <path
                                        id="Path_15463"
                                        data-name="Path 15463"
                                        d="M269.511,69.483c1.592-1.737,2.72-3.284,4.8-3.515,1.131-.126,1.743.11,1.65,1.464-.117,1.7-.054,3.424-.017,5.136.016.769-.056,1.158-1.047,1.161-3.54.009-5.146,1.564-5.25,5.115-.1,3.258-.066,6.52-.011,9.779.018,1.043-.215,1.482-1.359,1.414-1.655-.1-3.32-.052-4.98-.013-.7.017-.96-.19-.958-.927q.034-10.94,0-21.881c0-.654.1-1.033.888-1.014,1.77.042,3.543.034,5.314,0,.714-.013,1.012.249.973.964C269.484,67.812,269.511,68.462,269.511,69.483Z"
                                        transform="translate(-60.682 -7.77)"
                                        fill="#4a4c4f"
                                      />
                                      <path
                                        id="Path_15464"
                                        data-name="Path 15464"
                                        d="M176.164,78.316c0,3.535-.029,7.069.019,10.6.013.914-.22,1.258-1.184,1.212-1.6-.076-3.208-.049-4.811-.008-.789.02-1.206-.112-1.2-1.062q.05-10.851.006-21.7c0-.782.255-1.08,1.051-1.06,1.659.041,3.322.07,4.978-.009,1.014-.049,1.169.38,1.159,1.258C176.141,71.137,176.164,74.727,176.164,78.316Z"
                                        transform="translate(-34.018 -7.87)"
                                        fill="#4a4c4f"
                                      />
                                      <path
                                        id="Path_15465"
                                        data-name="Path 15465"
                                        d="M172.262,47.98a4.454,4.454,0,1,1,.026,8.908,4.4,4.4,0,0,1-4.426-4.54,4.314,4.314,0,0,1,4.4-4.368Z"
                                        transform="translate(-33.697 -2.641)"
                                        fill="#4a4c4f"
                                      />
                                      <path
                                        id="Path_15466"
                                        data-name="Path 15466"
                                        d="M232.523,107.013c-.606-.605-1.369-.3-2.051-.3q-53.693-.026-107.386-.015h-2.295a3.232,3.232,0,0,1,2.186-.376q53.777-.018,107.553-.026c.671,0,1.44.327,2.017-.336l-.684-2.527a28.8,28.8,0,0,0,5.519,3.04l-5.421,2.727C232.208,108.242,232.366,107.628,232.523,107.013Z"
                                        transform="translate(-20.252 -18.479)"
                                        fill="#f79520"
                                      />
                                      <path
                                        id="Path_15467"
                                        data-name="Path 15467"
                                        d="M73.2,61.811A7.585,7.585,0,0,1,75.824,63.1c2.066,1.147,3.93,2.629,6.117,3.583a2.3,2.3,0,0,1,1.341,2.593,2.355,2.355,0,0,1-1.842,2.092,2.094,2.094,0,0,1-2.522-1.037C77.1,67.572,75.242,64.846,73.2,61.811Z"
                                        transform="translate(-6.658 -6.592)"
                                        fill="#f79520"
                                      />
                                      <path
                                        id="Path_15468"
                                        data-name="Path 15468"
                                        d="M243.2,70.793c-.009-1.47.654-3.424-.306-4.271-.821-.725-2.732-.242-4.162-.252-2.545-.018-2.543,0-2.632,2.569,0,.072-.123.141-.243.269-.238-.211-.48-.42-.716-.636-4.166-3.823-9.156-3.688-13.088.357a13.991,13.991,0,0,0-.814,17.819,9,9,0,0,0,9.057,3.588c2.5-.4,4-2.178,5.827-4.26a18.249,18.249,0,0,1-.017,2.4c-.218,1.385.423,1.677,1.656,1.584a24.868,24.868,0,0,1,3.818,0c1.247.1,1.692-.224,1.672-1.589C243.165,82.515,243.235,76.653,243.2,70.793ZM230.568,83.9c-2.753-.155-4.639-2.457-4.5-5.5.149-3.365,2.243-5.609,5.128-5.5a5.237,5.237,0,0,1,4.7,5.6C235.784,81.594,233.359,84.054,230.568,83.9Z"
                                        transform="translate(-48.138 -7.701)"
                                        fill="#4a4c4f"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
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
                  {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
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
