import React,{useEffect} from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { primaryColor } from '../../utils/color';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
function ImageSlider() {


 const {banners} = useSelector(state=>state.homeReducer);
 const navigate = useNavigate()




  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    infiniteLoop: true,
    swipeable: true
  };



  const clickHandler = (index,event) =>{
    navigate(`/banner/${event.key}`)
  }

  // swipeable={true}


  useEffect(() => {
    console.log("banners",banners)
  }, [banners])



  return (
    <SliderWrapper>
      <Carousel  onClickItem={clickHandler} swipeable={true} autoPlay={true} showThumbs={false} axis="horizontal" emulateTouch={true} infiniteLoop={true} >
        {
          banners.map(item => (
            <div key={item.id}>
              <img src={item.image} className="cursor-pointer" style={{ height: '170px', objectFit: 'cover',cursor:'pointer' }}/>
            </div>
          ))
        }
      </Carousel>
    </SliderWrapper>
  );
}




const SliderWrapper = styled.div`

/* height: 150px;
overflow:hidden;
background-color: red; */



`




export default ImageSlider;