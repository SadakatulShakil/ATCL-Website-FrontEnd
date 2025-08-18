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
        const res = await axios.get("https://atcl-website-backend.onrender.com/api/news/all");
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h1 className="text-3xl text-center text-blue-600 font-bold sm:text-4xl py-2">
          Case Study
        </h1>
        <p className="lg:text-lg text-center text-black font-semibold py-2">
          Here are some of our recent Case Studies
        </p>

        {/* Slider */}
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
              margin-bottom: 8px;
            }
          `}</style>
          <Slider {...settings}>
            {blogData.map((item, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col h-[420px] transform hover:scale-[1.02] group">
                  {/* Image with Date Badge */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={`https://atcl-website-backend.onrender.com/${item.image}`}
                      alt={item.newsHeadline}
                      className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm z-10">
                      {new Date(item.publishDate).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between flex-1 p-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.newsHeadline}
                        </a>
                      </h3>
                    </div>

                    {/* Button */}
                    <div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
                      >
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View List →
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;