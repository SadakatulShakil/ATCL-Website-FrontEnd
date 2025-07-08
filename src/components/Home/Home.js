import React from "react";
import GsapSlider from "../GsapSlider/GsapSlider";
import Services from "../Services/Services";
import CompanyOverview from "../CompanyOverview/CompanyOverview";
import Products from "../Products/Products";
import ProductCarousel from "../Products/ProductCarousel";
import Quote from "../Quote/Quote";
import TeamSlider from "../TeamSlider/TeamSlider";
import News from "../News/News";

const Home = () => {
  return (
    <div>
      <GsapSlider></GsapSlider>
      <Services></Services>
      <CompanyOverview></CompanyOverview>
      <Products></Products>
      <ProductCarousel></ProductCarousel>
      <Quote></Quote>
      {/* <Login></Login> */}
      <TeamSlider></TeamSlider>
      <News></News>
    </div>
  );
};

export default Home;
