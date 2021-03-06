import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  logout,
  profile,
  tutorial,
  lock,
  points,
  statement,
  heart,
  gift,
} from "../../../assets/svg";
import { NavLink, useNavigate } from "react-router-dom";

const MoreFragment = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.usereducer);

  const list = [
    {
      id: 1,
      title: "Personal Information",
      icon: profile,
      active: true,
      url: "",
    },
    {
      id: 2,
      title: "Quicar Points",
      icon: points,
      active: true,
      url: "",
    },
    {
      id: 3,
      title: "Statement",
      icon: statement,
      active: true,
      url: "",
    },
    {
      id: 4,
      title: "Tutorials",
      icon: tutorial,
      active: true,
      url: "tutorials",
    },
    {
      id: 5,
      title: "Coupon",
      icon: gift,
      active: true,
      url: "",
    },
    {
      id: 6,
      title: "Favorites Partner",
      icon: heart,
      active: true,
      url: "",
    },
    {
      id: 7,
      title: "Privacy & Policy",
      icon: lock,
      active: true,
      url: "policy",
    },
    // {
    //     id: 8,
    //     title: "Terms & Conditions",
    //     icon: "",
    //     active: true,
    //     url: ""
    // },
    // {
    //     id: 9,
    //     title: "About Us",
    //     icon: "",
    //     active: true,
    //     url: ""
    // },
    {
      id: 8,
      title: "LogOut",
      icon: logout,
      active: true,
      url: "",
    },
  ];

  const handleClick = (item) => {
    if (item.id === 8) {
      localStorage.removeItem("accessToken");
      navigate("/login", { replace: true });
    } else {
      navigate(`/${item.url}`);
    }
  };

  return (
    <Wrapper>
      <div className="profile__wrapper">
        <img
          className="profile"
          src={user ? user.img : "/images/local/login_screen_image.svg"}
          alt=""
        />
        <span className="name">{user ? user.name : ""}</span>
        <span className="phone">{user ? user.phone : ""}</span>
      </div>

      <div className="list__wrapper">
        {list.map((item, index) => {
          return (
            <div className="item" key={index} onClick={() => handleClick(item)}>
              <div className="icon">{item.icon}</div>

              <span className="title"> {item.title} </span>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .profile__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    flex-direction: column;

    .profile {
      width: 80px;
      height: 80px;
      border-radius: 40px;
      border: 2px solid #f79520;
    }

    .name {
      color: black;
      font-weight: 600;
      font-size: 18px;
    }

    .phone {
      color: #6b6b6b;
    }
  }

  .list__wrapper {
    height: 100%;
    width: 100%;
    /* background-color: grey; */
    width: 100%;

    /* border-radius: 7px 0px 7px 0px; */

    .item {
      width: 100%;
      height: 50px;
      display: flex;
      /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
      align-items: center;
      padding: 0px 10px;
      border-bottom: 1px solid #f9f9f9;
      cursor: pointer;

      &:hover {
        background-color: #f3f3f3;
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          /* fill:#d8d8d8; */
          /* color:#d8d8d8; */
          height: 30px;
          width: 30px;
        }
      }

      .title {
        padding-left: 15px;
        color: #4d4d4d;
      }
    }
  }
`;

export default MoreFragment;
