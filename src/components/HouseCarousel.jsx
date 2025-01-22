import React from "react";
import { Carousel } from "flowbite-react";
import { useTranslation } from "react-i18next";

function HouseCarousel() {
  const { t } = useTranslation();
  const images = [
    process.env.PUBLIC_URL + "/media/casadelpaseo/5.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/6.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/7.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/8.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/9.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/10.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/11.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/12.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/13.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/14.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/15.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/16.jpg",
    process.env.PUBLIC_URL + "/media/casadelpaseo/17.jpg"
  ];
  return (
    <Carousel slideInterval={3000}>
      {/* Slide 1 */}
      <div>
        <img
          src={process.env.PUBLIC_URL + "/media/casadelpaseo/1.jpg"}
          alt={t("paseoDesc1")}
          className="object-cover w-full h-full object-contain"
        />
        <div
          className="top-[5%] left-[5%] translate-x-0 sm:top-[5%] sm:left-[5%] sm:translate-x-0 xl:top-[10%] xl:left-[5%] xl:translate-x-0
                        absolute inset-0 w-max h-fit text-center text-white rounded-lg text-shadow-[2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]"
        >
          <p className="text-xs landscape:text-sm sm:text-sm sm:landscape:text-base md:text-base md:landscape:text-lg lg:text-3xl lg:landscape:text-4xl font-medium sm:font-bold lg:font-extrabold">
            {t("paseoDesc1")}
          </p>
        </div>
      </div>
      {/* Slide 2 */}
      <div>
        <img
          src={process.env.PUBLIC_URL + "/media/casadelpaseo/2.jpg"}
          alt={t("paseoDesc2")}
          className="object-cover w-full h-full object-contain"
        />
        <div
          className="top-[20%] left-[80%] max-w[150px] sm:max-w-[200px] lg:max-w-[300px] whitespace-normal -translate-x-1/2
               absolute inset-0 h-fit text-center text-white rounded-lg text-shadow-[2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]"
        >
          <p className="text-xs landscape:text-sm sm:text-sm sm:landscape:text-base md:text-base md:landscape:text-lg lg:text-3xl lg:landscape:text-4xl font-medium sm:font-bold lg:font-extrabold">
            {t("paseoDesc2")}
          </p>
        </div>
      </div>
      {/* Slide 3 */}
      <div>
        <img
          src={process.env.PUBLIC_URL + "/media/casadelpaseo/3.jpg"}
          alt={t("paseoDesc3")}
          className="object-cover w-full h-full object-contain"
        />
        <div
          className="top-[65%] left-1/2 -translate-x-1/2 max-w[150px] sm:max-w-[200px] lg:max-w-[300px] xl:max-w-[400px] 2xl:max-w-[500px] whitespace-normal -translate-x-1/2
               absolute inset-0 h-fit text-center text-white rounded-lg text-shadow-[2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]"
        >
          <p className="text-xs landscape:text-sm sm:text-sm sm:landscape:text-base md:text-base md:landscape:text-lg lg:text-3xl lg:landscape:text-4xl font-medium sm:font-bold lg:font-extrabold">
            {t("paseoDesc3")}
          </p>
        </div>
      </div>
      {/* Slide 4 */}
      <div>
        <img
          src={process.env.PUBLIC_URL + "/media/casadelpaseo/4.jpg"}
          alt={t("paseoDesc4")}
          className="object-cover w-full h-full object-contain"
        />
        <div
          className="top-[65%] left-1/2 -translate-x-1/2 max-w[100px] sm:max-w-[150px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] whitespace-normal -translate-x-1/2
               absolute inset-0 h-fit text-center text-white rounded-lg text-shadow-[2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]"
        >
          <p className="text-xs landscape:text-sm sm:text-sm sm:landscape:text-base md:text-base md:landscape:text-lg lg:text-3xl lg:landscape:text-4xl font-medium sm:font-bold lg:font-extrabold">
            {t("paseoDesc4")}
          </p>
        </div>
      </div>
      {/* Slide 5 onwards */}
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={images[index]}
            alt={t("paseoDesc5")}
            className="object-cover w-full h-full object-contain"
          />
        </div>
      ))}
    </Carousel>
  );
}

export default HouseCarousel;
