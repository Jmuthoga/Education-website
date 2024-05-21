import React from "react";
import Title from "../../Components/Common/heading/Title/Title";
import PriceCard from "../../Components/Pricing/PriceCard";

const Hprice = () => {
  return (
    <>
      <section className="hprice padding">
        <Title subtitle="Our Pricing" title="Pricing & Packages" />
        <div className="price container grid">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Hprice;
