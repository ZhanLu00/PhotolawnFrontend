import React from "react";
import CategoryCard from "../components/home/CategoryCard";
import data from "./category";
import Link from "next/link";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="uk-container uk-container-small uk-text-center uk-padding">
        <h3 className="uk-text-bold">
          Book a professional photographer for any occasion
        </h3>
        <form className="uk-grid-small" data-uk-grid>
          <div className="uk-width-1-2">
            <input
              className="uk-input uk-border-rounded"
              type="text"
              placeholder="Wedding photographer"
            />
          </div>
          <div className="uk-width-1-2">
            <input
              className="uk-input uk-border-rounded"
              type="text"
              placeholder="Toronto"
            />
          </div>
        </form>
      </div>
      <div
        className="uk-grid-small uk-child-width-1-6@l uk-child-width-1-5@m uk-flex-center uk-text-center"
        data-uk-grid
      >
        <CategoryCard
          title="hey"
          image="https://res.cloudinary.com/lawn/image/upload/v1540673760/static/family.png"
        />
        {data
          .filter(index => index < data.length / 2)
          .map(item => {
            return <CategoryCard title={item.title} image={item.image} />;
          })}
      </div>
      <div>
          <Link href="orderTracking.jsx">
            <a>orderTracking</a>
          </Link>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
