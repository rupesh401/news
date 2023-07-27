import React, { useState } from "react";
import Card from "./Card";
import { hero } from "../../data";
import "./Hero.css";

const Hero = () => {
  const [items, setitems] = useState(hero);

  return (
    <>
      <section className="hero">
        <div className="container">
          {items.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
