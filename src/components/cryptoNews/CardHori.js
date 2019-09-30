import React from "react";
import Slider from "react-slick";

import "./caroselStyle.css";
import defaultImg from "../../asset/crypt-default.jpeg";

const CardHorizontal = props => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    pauseOnHover: true
  };
  const list = props.data.map(obj => {
    const { _id, title, description, url, originalImageUrl } = obj;
    const addDefaultSrc = ev => {
      ev.target.src = defaultImg;
    };
    return (
      <a href={url} target="_blank">
        <div className="verticle-card" key={_id}>
          <div className="card">
            <div className="card-image">
              <img onError={addDefaultSrc} src={originalImageUrl} />
            </div>
            <div className="card-action-content">
              <div>
                <h5 class="flow-text text-start">{title}</h5>
                {/* <p class="flow-text card-title-custom">{title}</p> */}
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  });
  return (
    <div className="Card-hori">
      <Slider {...settings}>{list}</Slider>
    </div>
  );
};

export default CardHorizontal;

