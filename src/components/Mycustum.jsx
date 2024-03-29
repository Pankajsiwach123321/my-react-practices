import React from "react";
import man from "../assets/images/man.png";
import star from "../assets/images/star.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Mycustum = () => {
  const first = React.useRef(null);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} ref={first}>
        <div className=" d-flex justify-content-center align-items-center w-100">
          <div className="card-slide me-1 me-lg-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className=" d-flex align-items-center gap-4">
                <img src={man} alt="gfhg" />
                <div>
                  <p className=" mb-0 man-name">Viezh Robert</p>
                  <p className=" mb-0 location">Viezh Robert</p>
                </div>
              </div>
              <div className=" d-flex align-items-center gap-2">
                <p className="mb-0">4.5</p>
                <img src={star} alt="hgfgh" />
              </div>
            </div>
            <p className=" mb-0 mw-340 para">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
        <div className=" d-flex justify-content-center align-items-center w-100">
          <div className="card-slide me-1 me-lg-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className=" d-flex align-items-center gap-4">
                <img src={man} alt="gfhg" />
                <div>
                  <p className=" mb-0 man-name">Viezh Robert</p>
                  <p className=" mb-0 location">Viezh Robert</p>
                </div>
              </div>
              <div className=" d-flex align-items-center gap-2">
                <p className="mb-0">4.5</p>
                <img src={star} alt="hgfgh" />
              </div>
            </div>
            <p className=" mb-0 mw-340 para">
              “I like it because I like to travel far and still can connect with
              high speed.”.
            </p>
          </div>
        </div>
        <div className=" d-flex justify-content-center align-items-center w-100">
          <div className="card-slide me-1 me-lg-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className=" d-flex align-items-center gap-4">
                <img src={man} alt="gfhg" />
                <div>
                  <p className=" mb-0 man-name">Viezh Robert</p>
                  <p className=" mb-0 location">Viezh Robert</p>
                </div>
              </div>
              <div className=" d-flex align-items-center gap-2">
                <p className="mb-0">4.5</p>
                <img src={star} alt="hgfgh" />
              </div>
            </div>
            <p className=" mb-0 mw-340 para">
              “This is very unusual for my business that currently requires a
              virtual private network that has high security.”.
            </p>
          </div>
        </div>
        <div className=" d-flex justify-content-center align-items-center w-100">
          <div className="card-slide me-1 me-lg-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className=" d-flex align-items-center gap-4">
                <img src={man} alt="gfhg" />
                <div>
                  <p className=" mb-0 man-name">Viezh Robert</p>
                  <p className=" mb-0 location">Viezh Robert</p>
                </div>
              </div>
              <div className=" d-flex align-items-center gap-2">
                <p className="mb-0">4.5</p>
                <img src={star} alt="hgfgh" />
              </div>
            </div>
            <p className=" mb-0 mw-340 para">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
      </Slider>
      <div className="d-flex align-items-center gap-3  text-end justify-content-end   w-100">
        <button
          className="mt-5 scrolbtn"
          onClick={() => first?.current?.slickPrev()}
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 7.74986H3.925L8.4625 2.29986C8.67467 2.04459 8.77675 1.71548 8.74628 1.38495C8.7158 1.05442 8.55527 0.74953 8.3 0.537356C8.04473 0.325183 7.71563 0.223106 7.3851 0.25358C7.05456 0.284055 6.74967 0.444586 6.5375 0.699856L0.2875 8.19986C0.245451 8.25951 0.207849 8.32218 0.175 8.38736C0.175 8.44986 0.175 8.48736 0.0875002 8.54986C0.0308421 8.69318 0.0011764 8.84574 0 8.99986C0.0011764 9.15397 0.0308421 9.30653 0.0875002 9.44986C0.0875002 9.51236 0.0874998 9.54986 0.175 9.61236C0.207849 9.67753 0.245451 9.7402 0.2875 9.79986L6.5375 17.2999C6.65503 17.441 6.8022 17.5544 6.96856 17.6322C7.13491 17.71 7.31636 17.7502 7.5 17.7499C7.79207 17.7504 8.07511 17.6487 8.3 17.4624C8.42657 17.3574 8.5312 17.2285 8.60789 17.0831C8.68458 16.9377 8.73183 16.7785 8.74692 16.6148C8.76202 16.4511 8.74466 16.286 8.69586 16.129C8.64705 15.972 8.56775 15.8262 8.4625 15.6999L3.925 10.2499H18.75C19.0815 10.2499 19.3995 10.1182 19.6339 9.88374C19.8683 9.64932 20 9.33138 20 8.99986C20 8.66834 19.8683 8.35039 19.6339 8.11597C19.3995 7.88155 19.0815 7.74986 18.75 7.74986Z"
              fill="#F53838"
            />
          </svg>
        </button>
        <button
          className="mt-5   scrolbtn"
          onClick={() => first?.current?.slickNext()}
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 7.74986H16.075L11.5375 2.29986C11.3253 2.04459 11.2232 1.71548 11.2537 1.38495C11.2842 1.05442 11.4447 0.74953 11.7 0.537356C11.9553 0.325183 12.2844 0.223106 12.6149 0.25358C12.9454 0.284055 13.2503 0.444586 13.4625 0.699856L19.7125 8.19986C19.7545 8.25951 19.7922 8.32218 19.825 8.38736C19.825 8.44986 19.825 8.48736 19.9125 8.54986C19.9692 8.69318 19.9988 8.84575 20 8.99986C19.9988 9.15397 19.9692 9.30653 19.9125 9.44986C19.9125 9.51236 19.9125 9.54986 19.825 9.61236C19.7922 9.67753 19.7545 9.7402 19.7125 9.79986L13.4625 17.2999C13.345 17.441 13.1978 17.5544 13.0314 17.6322C12.8651 17.71 12.6836 17.7502 12.5 17.7499C12.2079 17.7504 11.9249 17.6487 11.7 17.4624C11.5734 17.3574 11.4688 17.2285 11.3921 17.0831C11.3154 16.9377 11.2682 16.7785 11.2531 16.6148C11.238 16.4511 11.2553 16.286 11.3041 16.129C11.3529 15.972 11.4322 15.8262 11.5375 15.6999L16.075 10.2499H1.25C0.91848 10.2499 0.600536 10.1182 0.366116 9.88374C0.131695 9.64932 0 9.33138 0 8.99986C0 8.66834 0.131695 8.35039 0.366116 8.11597C0.600536 7.88155 0.91848 7.74986 1.25 7.74986Z"
              fill="#F53838"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Mycustum;
