import React from "react";
import defaultImg from "../../asset/crypt-default.jpeg";

const Card = props => {
  const { _id, title, description, url, originalImageUrl } = props.data;
  const addDefaultSrc = ev => {
    ev.target.src = defaultImg;
  };
  return (
    <div className="card custom-card">
      <div className="card-image waves-effect waves-block waves-light">
        <a href={url} target="_blank">
          <img
            className="activator"
            onError={addDefaultSrc}
            alt={title}
            src={originalImageUrl}
          />
        </a>
      </div>
      <div className="card-content">
        <span className="card-title activator white-text text-darken-4 ">
          <span className="card-title-custom">{title}</span>
          <i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal bg-dark">
        <span className="card-title white-text text-darken-4">
          <i className="material-icons right">close</i>
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
