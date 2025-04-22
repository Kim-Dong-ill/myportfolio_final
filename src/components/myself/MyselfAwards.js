import React from "react";
import "../../css/pages/myself/myselfAwards/myselfAwards.css";
import uni from "../../images/uni.png";
import gisdone from "../../images/gis수료증.jpg";
import gispri from "../../images/gis최우수.jpg";
import o2ost from "../../images/o2o모범상.jpg";
import o2odone from "../../images/o2o수료증.jpg";
import o2ose from "../../images/o2o우수상.jpg";
import ontoin from "../../images/ontoin.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Scrollbar } from "swiper/modules";

function MyselfAwards() {
  const awardImages = [
    { img: uni, text: "학과 수석 졸업" },
    { img: ontoin, text: "온투인 공모전 동상" },
    { img: gisdone, text: "GIS 활용한 LBS" },
    { img: gispri, text: "GIT 프로젝트 최우수상" },
    { img: o2ose, text: "O2O 서비스 프로젝트 우수상" },
    { img: o2ost, text: "O2O 서비스 모범상" },
    { img: o2odone, text: "O2O 서비스" },
  ];
  return (
    <div className="myselfAwards">
      <div className="myselfAwardsMainTitle">Awards</div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={300}
        slidesPerView={3}
        scrollbar={{ hide: false }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        {awardImages.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="cardWrap">
              <img src={item.img} alt={`award-${idx}`} />
              <div className="cardText">{item.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MyselfAwards;
