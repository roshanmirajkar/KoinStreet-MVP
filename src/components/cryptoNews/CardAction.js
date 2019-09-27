import React from "react";
import defaultImg from "../../asset/crypt-default.jpeg";

const CardAction = props => {
  console.log(props.data);
  const { title, description, url, originalImageUrl } = props.data;
  const addDefaultSrc = ev => {
    ev.target.src = defaultImg;
  };
  return (
    <a href={url} target="_blank">
      <div className="card-action">
        <div className="card-action-img">
          <img onError={addDefaultSrc} alt={title} src={originalImageUrl} />
        </div>
        <div className="card-action-content">
          <div>
            <h1 class="flow-text text-start">{title}</h1>
            {/* <p class="flow-text card-title-custom">{description}</p> */}
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardAction;
