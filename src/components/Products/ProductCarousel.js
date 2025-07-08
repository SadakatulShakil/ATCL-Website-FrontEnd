import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example product data (replace with real data as needed)
const products = [
  {
    id: 146,
    title: "Vehicle Air Conditioning Trainer - ATCL-01",
    description:
      "Product Description:The trainer adopts original auto air conditioning system and uses motor to simulate the engine drive the air conditioning system. It can really show the structure and working principle of the auto air conditioning system.",
    image:
      "https://i.ibb.co/vCDrF8nK/vechicle.webp",
    link: "https://atcbd.net/product/view/146",
  },
  {
    id: 147,
    title: "TOYOTA Petrol Engine with VVTI Injection (on stand with wheels) - manual - ATCL-02",
    description:
      "The engine is operated manually by means of a crank handle.This cutaway model is carefully sectioned for training purposes, professionally painted with different colors to better differentiate the various parts, cross-sections, lubricating circuits, fuelsystem, cooling system etc.",
    image:
      "https://i.ibb.co/1JsS18KL/vechicle34.jpg",
    link: "https://atcbd.net/product/view/147",
  },
  {
    id: 148,
    title: "STEERING UNIT WITH McPHERSON SUSPENSIONS (on stand with wheels) - manual - ATCL-06",
    description:
      "Operated manually through a crank handle.This cutaway model is carefully sectioned for training purposes, and professionally painted with different colours to better differentiate the various parts, cross-sections.Many parts have been chromium, plated and galvanized for a longer life.",
    image:
      "https://i.ibb.co/zh7dJ6Cn/vechicle5.jpg",
    link: "https://atcbd.net/product/view/148",
  },
  {
    id: 149,
    title: "POWER STEERING WITH RE-CIRCULATING BALL SYSTEM (on base) - manual - ATCL-04",
    description:
      "Operated through a hand wheel.This cutaway model is carefully sectioned for training purposes, professionally painted with different colours to better differentiate the various parts, cross-sections.Many parts have been chromium, plated and galvanized for a longer life.",
    image:
      "https://i.ibb.co/S404pcMn/vechicle3.jpg",
    link: "https://atcbd.net/product/view/149",
  },
  {
    id: 150,
    title: "PETROL ENGINE TRAINING STAND - ATCL-3014",
    description:
      "The ATCL-3014 is for training skills in disassembly, reassembly, engine operation, tune-up, repair and maintenance, and overhaul.Engine without transmission, in running condition. Mounted on a sturdy tubular steel stand equipped with rotating device with lockable castor wheel for mobility.",
    image:
      "https://i.ibb.co/ccDbVN8g/vechicle2.jpg",
    link: "https://atcbd.net/product/view/150",
  },
  {
    id: 151,
    title: "GEARBOX WITH CLUTCH 4 FORWARD SPEED + REVERSE (on stand with wheels) - manual - ATCL-03",
    description:
      "Operated through a hand wheel.The clutch is operated mechanically by means of a foot pedal for training purposes.This cutaway model is carefully sectioned for training purposes, professionally painted with different colours to better differentiate the various parts.Many parts have been chromium, plated and galvanized for a longer life.",
    image:
      "https://i.ibb.co/dwN5Qfzp/vechicle1.jpg",
    link: "https://atcbd.net/product/view/151",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ProductCarousel = () => {
  return (
    <div className="full-width-slider  py-8 px-2 bg-white">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <a href={product.link} className="block">
                <div className="h-56 flex items-center justify-center bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain h-52 w-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </a>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-2 text-blue-800 hover:text-blue-600 transition-colors duration-200">
                  <a href={product.link}>{product.title}</a>
                </h3>
                <p className="text-gray-600 text-sm flex-grow">{product.description}</p>
                <div className="mt-4">
                  <a
                    href={product.link}
                    className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200 text-sm font-semibold"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;