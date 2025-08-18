import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 146,
    title: "Vehicle Air Conditioning Trainer - ATCL-01",
    description:
      "The trainer adopts original auto air conditioning system and uses motor to simulate the engine drive the air conditioning system.",
    image: "https://i.ibb.co/vCDrF8nK/vechicle.webp",
    link: "https://atcbd.net/product/view/146",
    badge: "Popular",
  },
  {
    id: 147,
    title: "TOYOTA Petrol Engine with VVTI Injection - ATCL-02",
    description:
      "Carefully sectioned cutaway engine for training purposes, professionally painted with color-coded details.",
    image: "https://i.ibb.co/1JsS18KL/vechicle34.jpg",
    link: "https://atcbd.net/product/view/147",
    badge: "New",
  },
  {
    id: 148,
    title: "STEERING UNIT WITH McPHERSON SUSPENSIONS - ATCL-06",
    description:
      "Manual crank-operated cutaway model, color-coded sections, chrome-plated & galvanized for durability.",
    image: "https://i.ibb.co/zh7dJ6Cn/vechicle5.jpg",
    link: "https://atcbd.net/product/view/148",
  },
  {
    id: 149,
    title: "POWER STEERING WITH RE-CIRCULATING BALL SYSTEM - ATCL-04",
    description:
      "Training model with manual operation & professional detailing for long-lasting learning value.",
    image: "https://i.ibb.co/S404pcMn/vechicle3.jpg",
    link: "https://atcbd.net/product/view/149",
    badge: "Trending",
  },
  {
    id: 150,
    title: "PETROL ENGINE TRAINING STAND - ATCL-3014",
    description:
      "Hands-on training stand for assembly, operation, and maintenance with mobility features.",
    image: "https://i.ibb.co/ccDbVN8g/vechicle2.jpg",
    link: "https://atcbd.net/product/view/150",
  },
  {
    id: 151,
    title: "GEARBOX WITH CLUTCH 4 SPEED + REVERSE - ATCL-03",
    description:
      "Mechanically operated gearbox cutaway, designed for hands-on technical training.",
    image: "https://i.ibb.co/dwN5Qfzp/vechicle1.jpg",
    link: "https://atcbd.net/product/view/151",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const ProductCarousel = () => {
  return (
    <div className="w-full py-10 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-8">
          Featured Products
        </h2>
        <div className="relative">
          <style jsx global>{`
            .slick-dots {
              position: relative;
              bottom: auto;
              margin-top: 30px;
              padding-top: 15px;
            }
            .slick-dots li button:before {
              font-size: 10px;
            }
            .slick-dots li.slick-active button:before {
              color: #3b82f6;
            }
            .slick-slide > div {
              margin-bottom: 20px; /* Added 8px gap at bottom */
            }
          `}</style>
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-3">
                <div className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col h-[420px] transform hover:scale-[1.02]">
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                      {product.badge}
                    </span>
                  )}

                  {/* Image */}
                  <a href={product.link} className="block overflow-hidden">
                    <div className="h-48 flex items-center justify-center bg-gray-100 transition-all duration-300 ease-in-out group-hover:brightness-95">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="object-contain h-44 w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </a>

                  {/* Content */}
                  <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                        <a href={product.link}>{product.title}</a>
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {product.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto pt-2">
                      <a
                        href={product.link}
                        className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-red-500 hover:to-pink-600 transition-all duration-300 ease-in-out text-sm font-semibold w-full text-center hover:shadow-lg"
                      >
                        View Details →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;