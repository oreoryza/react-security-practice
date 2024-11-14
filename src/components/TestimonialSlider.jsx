import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const TestimonialSlider = () => {
  return (
    <div className="w-full mx-auto p-6 py-24 md:px-32 px-10">
      <h2 className="text-center text-2xl font-bold text-peachred">
        \ From our Customers \
      </h2>
      <h3 className="text-center text-4xl font-bold text-blue-900 mb-8">
        Testimonials
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-md mx-auto bg-offwhite rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/b00a/b17c/040b5d66321b5687dbd8e93eed7077f1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJ5qqFoHtJku3LIx7jeBYU1tQ-fheIS1gqITPOzbQgTQHSvhCQE6mWAjNa5X8e4VRdOdNxt9pMUdEDUjAOd-esSoyFhsuPyKoDEJmuFBZPgZrjOkHVcrmX5cC4DivMd3ozSyNwFAfqWlIdVLnvbeQmRFGfTmYP-SfNJtFY0Xhy4idZMavTLTTu3hifliGgSyFFVaQE3bM10~XvV2qSV0UBQdTVQYENFAEgLjWm69OYm99Kv~xeEWPgnfGaexnY1uE~rBBDeUOaZY3b0-o5T0laRRZejMx1~bjYPBbFn0obJe-EM2OXjJ0MNQIu6r0~2Nj3V6wpMYabdojEse7edHYA__"
                  alt="Person"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div className="text-7xl text-peachred">“</div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque fermentum massa vel enim feugiat gravida.
              </p>
            </div>
            <div className="mt-4">
              <p className="text-peachred font-semibold">Samuel Karl</p>
              <p className="text-blue-600 text-sm">CEO</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-md mx-auto bg-offwhite rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/b00a/b17c/040b5d66321b5687dbd8e93eed7077f1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJ5qqFoHtJku3LIx7jeBYU1tQ-fheIS1gqITPOzbQgTQHSvhCQE6mWAjNa5X8e4VRdOdNxt9pMUdEDUjAOd-esSoyFhsuPyKoDEJmuFBZPgZrjOkHVcrmX5cC4DivMd3ozSyNwFAfqWlIdVLnvbeQmRFGfTmYP-SfNJtFY0Xhy4idZMavTLTTu3hifliGgSyFFVaQE3bM10~XvV2qSV0UBQdTVQYENFAEgLjWm69OYm99Kv~xeEWPgnfGaexnY1uE~rBBDeUOaZY3b0-o5T0laRRZejMx1~bjYPBbFn0obJe-EM2OXjJ0MNQIu6r0~2Nj3V6wpMYabdojEse7edHYA__"
                  alt="Person"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div className="text-7xl text-peachred">“</div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Fusce varius, dolor tempor interdum tristique, dui sapien
                facilisis purus, a porttitor turpis elit sit amet magna.
              </p>
            </div>
            <div className="mt-4">
              <p className="text-peachred font-semibold">Jessica Liu</p>
              <p className="text-blue-600 text-sm">Marketing Director</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-md mx-auto bg-offwhite rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/b00a/b17c/040b5d66321b5687dbd8e93eed7077f1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJ5qqFoHtJku3LIx7jeBYU1tQ-fheIS1gqITPOzbQgTQHSvhCQE6mWAjNa5X8e4VRdOdNxt9pMUdEDUjAOd-esSoyFhsuPyKoDEJmuFBZPgZrjOkHVcrmX5cC4DivMd3ozSyNwFAfqWlIdVLnvbeQmRFGfTmYP-SfNJtFY0Xhy4idZMavTLTTu3hifliGgSyFFVaQE3bM10~XvV2qSV0UBQdTVQYENFAEgLjWm69OYm99Kv~xeEWPgnfGaexnY1uE~rBBDeUOaZY3b0-o5T0laRRZejMx1~bjYPBbFn0obJe-EM2OXjJ0MNQIu6r0~2Nj3V6wpMYabdojEse7edHYA__"
                  alt="Person"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div className="text-7xl text-peachred">“</div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                Donec auctor arcu vel lectus facilisis tincidunt. Nulla
                facilisi. Mauris lobortis libero ac risus varius, at lacinia
                erat dictum.
              </p>
            </div>
            <div className="mt-4">
              <p className="text-peachred font-semibold">Michael Tan</p>
              <p className="text-blue-600 text-sm">Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
