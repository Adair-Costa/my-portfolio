// LIBRARIES
import { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// COMPONENTS
import "./WhatIamDoing.css";
import worldwise from "/images/worldwise.png";
import fastReactPizza from "/images/fastReactPizza.png";
import usePopCorn from "/images/usePopCorn.png";

function WhatIamDoing() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section className="bg-hero p-10 mb-10">
            <div className="flex flex-col items-center justify-center gap-4 pb-10">
                <h1
                    className="xs:text-lg xs:text-center pb-5 text-3xl 
                tracking-[0.5rem] opacity-50 sm:text-2xl"
                >
                    What I‘m doing
                </h1>
                <h2
                    className="xs:text-2xl text-5xl capitalize md:text-3xl 
                    lg:text-4xl xl:text-4xl"
                >
                    Web development
                </h2>
                <h2
                    className="xs:text-2xl text-center text-5xl capitalize
                    md:text-3xl lg:text-4xl xl:text-4xl"
                >
                    Web & mobile design
                </h2>
            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img
                            src={worldwise}
                            className="xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[60%]"
                            alt="Worldwise app photo"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={fastReactPizza}
                            className="xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[60%]"
                            alt="Fast react pizza app photo"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={usePopCorn}
                            className="xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[60%]"
                            alt="Use pop corn app photo"
                        />
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default WhatIamDoing;
