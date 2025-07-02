// components/ImageSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// import banner from "../../../public/images/home/banner.png";
import heroSection from "../../../public/images/home/heroSection.png";
import obesity1 from "../../../public/images/home/obesity1.png";
// import obesity2 from "../../../public/images/home/obesity2.png";
import obesity3 from "../../../public/images/home/obesity3.png";
import obesity4 from "../../../public/images/home/obesity4.png";
import './slider.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
    heroSection,
    obesity1,
    obesity3,
    obesity4,

];

export default function Slider() {
    return (
        <div className="w-full max-w-3xl mx-auto mt-10">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 5000 }}
                loop={true}
                className="rounded-xl overflow-hidden flex items-center"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[100%] object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
