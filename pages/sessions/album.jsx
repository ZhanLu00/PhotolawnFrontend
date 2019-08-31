import React from "react";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

const AlbumPage = () => {
  return (
    <div
      className="uk-child-width-1-2@s uk-child-width-1-3@m"
      data-uk-grid="masonry: true"
    >
      {Array.from({ length: 20 }, (item, index) => (
        <div key={index}>
          <div
            className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
            style={{ height: getRandomInt(130, 500) }}
          >
            Image
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumPage;
