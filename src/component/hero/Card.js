import React from "react";

const Card = ({
  item: { id, cover, catgeory, title, authorName, authorImg, time, desc },
}) => {
  return (
    <>
      <div className="box">
        <div className="img" d>
          <img src={cover} alt="img" />
        </div>
        <div className="text">
            <span className="category">{catgeory}</span>
            <h1 className="titleBg">{title}</h1>
            <div className="author flex">
                <span>by {authorName}</span>
                <span>{time}</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default Card;
