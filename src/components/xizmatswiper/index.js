import React from "react";
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css"; // Main Swiper styles
import "swiper/css/pagination"; // Additional styles for pagination, if needed
import "swiper/css/navigation"; // Additional styles for navigation, if needed

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { SiAntdesign } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { DiMaterializecss } from "react-icons/di";
import { TbRulerMeasure } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdAddHomeWork } from "react-icons/md";
import { FcSupport } from "react-icons/fc";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaFileContract } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

export default function XizmatSwiper() {
  const { t } = useTranslation();
  return (
    <div className="swipergrp">
      <p className="ttl">{t("b_xizmat")}</p>
      <div className="swgrp">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          pagination={true}
          navigation={true}
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grp">
              <SiAntdesign />
              <p className="gttl">{t("x_ttl1")}</p>
              <p className="gtxt">{t("x_txt1")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grp">
              <GrTechnology />
              <p className="gttl">{t("x_ttl5")}</p>
              <p className="gtxt">{t("x_txt5")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grp">
              <DiMaterializecss />
              <p className="gttl">{t("x_ttl11")}</p>
              <p className="gtxt">{t("x_txt11")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grp">
              <TbRulerMeasure />
              <p className="gttl">{t("x_ttl2")}</p>
              <p className="gtxt">{t("x_txt2")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grp">
              <CiDeliveryTruck />
              <p className="gttl">{t("x_ttl3")}</p>
              <p className="gtxt">{t("x_txt3")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grp">
              <MdAddHomeWork />
              <p className="gttl">{t("x_ttl4")}</p>
              <p className="gtxt">{t("x_txt4")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grp">
              <FcSupport />
              <p className="gttl">{t("x_ttl6")}</p>
              <p className="gtxt">{t("x_txt6")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grp">
              <GrDocumentPerformance />
              <p className="gttl">{t("x_ttl7")}</p>
              <p className="gtxt">{t("x_txt7")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grp">
              <FaFileContract />
              <p className="gttl">{t("x_ttl8")}</p>
              <p className="gtxt">{t("x_txt8")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grp">
              <MdOutlinePayment />
              <p className="gttl">{t("x_ttl9")}</p>
              <p className="gtxt">{t("x_txt9")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grp">
              <BiSupport />
              <p className="gttl">{t("x_ttl10")}</p>
              <p className="gtxt">{t("x_txt10")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
