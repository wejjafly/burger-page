import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import styles from "../styles/Slider.module.scss";
import Slidertxt from "../Text/SliderTxt";
const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.txtcontainer}>
        <Slidertxt />
      </div>

      <Swiper
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        effect="fade"
        speed={800}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        className={styles.myswiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img src="../burger.jpg"></img>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="../burger2.jpg"></img>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="../burger3.jpg"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
