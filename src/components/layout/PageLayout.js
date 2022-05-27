import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GlobalWrapper from "../GlobalWrapper";
import AppbarSimple from "../header/AppbarSimple";
import Header from "../header/header";

const PageLayout = ({ children, appbar, title, rideBidding }) => {
  // const navigate = useNavigate();
  // const {accessToken,user} = useSelector(state=>state.usereducer);

  // useEffect(() => {
  //     if (!accessToken || !user) {
  //         navigate('/login')
  //     }

  //     if (accessToken && user && !user.name) {
  //         navigate('/register')
  //     }
  // }, [accessToken,user]);

  return (
    <GlobalWrapper>
      <Page>
        <div className="wrapper">
          {appbar ? (
            <AppbarSimple title={title} rideBidding={rideBidding} />
          ) : null}
          <div className="content">{children}</div>
        </div>
      </Page>
    </GlobalWrapper>
  );
};

const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(197, 197, 197);
  .wrapper {
    height: 100vh;
    width: 100%;
    /* box-shadow: -1px -1px 5px 2px rgba(238, 238, 238, 0.842);
      -webkit-box-shadow: -1px -1px 5px 2px rgba(238, 238, 238, 0.842);
      -moz-box-shadow: -1px -1px 5px 2px rgba(238, 238, 238, 0.842); */
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (min-width: 767.98px) {
      width: 440px;
      height: calc(100vh - 60px);
      border-radius: 20px;
    }

    .content {
      width: 100%;
      flex: 1;
      background-color: #ffffff;
      overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none; /* Firefox */
      ::-webkit-scrollbar {
        display: none !important;
      }
    }
  }
`;

export default PageLayout;
