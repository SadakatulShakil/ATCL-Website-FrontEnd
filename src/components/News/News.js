import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [blogData, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:5050/api/news/all");
        setNewsList(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="full-width-slider  py-8 px-2 bg-white">
      <div className=" ">
        <h1 className="text-3xl text-center text-[#2C234D]  font-bold poppins-b sm:text-4xl py-2">
          Our News
        </h1>

        {/* <p className=" lg:text-xl text-center text-[#E0581E] font-semibold   sm:text-4xl py-2">
          Our Recent News
        </p> */}
      </div>

      <Slider {...settings}>
        {blogData.map((item, index) => (
          <div key={index} className="p-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={`http://localhost:5050/${item.image}`}
                  alt=""
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-3 left-3 bg-primary text-white p-2 rounded-lg text-center ">
                  <p className="text-lg  text-gray-100">
                    {new Date(item.publishDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold hover:text-primary transition-colors duration-300">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {/* <p className="mt-2">{item.newsDescription}</p> */}
                    {item.newsHeadline}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
