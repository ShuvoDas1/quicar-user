import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { setCarType } from '../redux/action/carRentalAction';
const CarTypeItem = ({ item }) => {

    const { selectedCarType } = useSelector(state => state.rentalRequest)
    const dispatch = useDispatch();
    

    return (
        <Item className={`${selectedCarType?.id == item.id ? 'selected' : ''}`} onClick={() => dispatch(setCarType(item))}>

            <div className="left">
                <div>
                <p className='type__name'>{item.name}</p>
                <p className='person'>{`seat ${item.minSeat} - ${item.maxSeat}`}</p>
                </div>
            </div>

            <div className="right">

                <img src={item.image} alt="" />

            </div>

        </Item>
    )
}

const Item = styled.div`
    padding: 5px 10px;
    height: 100px;
    margin-bottom: 10px;
    /* background-color: #efefef; */
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    border: 1px solid #cacaca;
    overflow: hidden;
    
    &.selected{
        border: 1px solid #F79520;
        background-color: #fde2c1;
        &:hover{
            background-color: #fde2c1;
        }
    }


    &:hover{
        background-color: #efefef;
    }

    .left{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: center;

        .type__name{
            font-size: 18px;
            font-weight: 600;
        }

    }

    .right{
        display: flex;
        justify-content: flex-end;
        img{
            height: 100%;
            max-width: 120px;
        }
    }

`
export default CarTypeItem
