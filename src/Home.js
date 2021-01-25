import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          alt="amazon banner"
        />
        <div className="home__row">
          <Product title='MicroWaves Plantinium Sales' price={99.9} 
           image='https://www.ha-asia.com/wp-content/uploads/2019/08/45808014_m-1-e1571826814102.jpg'
           rating={5} 
           />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
