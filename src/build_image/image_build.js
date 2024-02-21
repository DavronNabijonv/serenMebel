import React, { useState } from "react";
import "./image_b.css";
import styles from "./image_builds.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/swiper-bundle.css"; // Main Swiper styles
// import "swiper/css/pagination"; // Additional styles for pagination, if needed
// import "swiper/css/navigation"; // Additional styles for navigation, if needed

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import i1 from "../assets/images/create_image/1.png";
import i2 from "../assets/images/create_image/2.png";
import b1 from "../assets/images/create_image/3.jpg";
import b2 from "../assets/images/create_image/4.jpg";
import b3 from "../assets/images/create_image/5.jpg";
import b4 from "../assets/images/create_image/6.jpg";
import b5 from "../assets/images/create_image/7.jpg";
import oq from "../assets/images/white.jpg";

export default function Image_build() {
  const [n_img, setN_img] = useState(b1);
  const [build, setBuild] = useState(i1);
  const [ga,setGa] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#282828"); // Initial background color

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value); // Update background color when user selects a new color
  };
  return (
    <div className={styles.img_build}>
      <div className={styles.b_color_change}>
        <input
          type="color"
          value={backgroundColor}
          onChange={handleColorChange}
          className={styles.change_input}
          onClick={()=>{setN_img(oq);setGa(true)}}
        />
        <div className={styles.for_build} style={ga?{backgroundColor:`${backgroundColor}`}:{}}>
          <img src={n_img} className={ga&&styles.change_image} />
          <img src={build} className={styles.main_image} />
        </div>
      </div>
      <Image_Slider
        setB1={() => {setN_img(b1);setGa(false)}}
        setB2={() => {setN_img(b2);setGa(false)}}
        setB3={() => {setN_img(b3);setGa(false)}}
        setB4={() => {setN_img(b4);setGa(false)}}
        setB5={() => {setN_img(b5);setGa(false)}}
      />
    </div>
  );
}

function Image_Slider({ setB1, setB2, setB3, setB4, setB5 }) {
  return (
    <div>
      <Swiper
        spaceBetween={2}
        centeredSlides={false}
        pagination={false}
        loop={true}
        navigation={true} // Enable navigation
        slidesPerView={4}
        modules={[Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide>
          <img src={b1} className="img" onClick={setB1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b2} className="img" onClick={setB2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b3} className="img" onClick={setB3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b4} className="img" onClick={setB4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b5} className="img" onClick={setB5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
