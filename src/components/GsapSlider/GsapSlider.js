import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GsapSlider.css";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    title: "Make Your Home Exquisite.",
    text: "Duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
    button: { label: "About Company", link: "#" },
    bg: "https://i.ibb.co/dswKy7fm/Leonardo-Phoenix-10-A-highly-detailed-and-realistic-illustrati-2.jpg",
    align: "left",
  },
  {
    title: "Beautiful Living Solutions.",
    text: "Duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
    button: { label: "Our Services", link: "#" },
    bg: "https://i.ibb.co/5bCJScR/banner3.jpg",
    align: "right",
  },
  {
    title: "Ten Kitchen Product Highlights.",
    text: "Duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
    button: { label: "Our Products", link: "#" },
    bg: "https://i.ibb.co/ycX1Lfhq/9c96602d-c4dd-4c55-aeb8-70d1c3c6d7cc.jpg",
    align: "left",
  },
];

const GsapSlider = () => {
  const slideRefs = useRef([]);
  const bgRefs = useRef([]);
  const titleRefs = useRef([]);
  const textRefs = useRef([]);
  const btnRefs = useRef([]);
  const currentSlide = useRef(0);
  const timeline = useRef(null);

  useEffect(() => {
    showSlide(0);
    return () => timeline.current?.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showSlide = (idx) => {
    if (timeline.current) timeline.current.kill();

    slides.forEach((_, i) => {
      gsap.set(slideRefs.current[i], {
        autoAlpha: i === idx ? 1 : 0,
        zIndex: i === idx ? 2 : 1,
      });
      gsap.set(bgRefs.current[i], { scale: 1.1, autoAlpha: 1 });
      gsap.set(titleRefs.current[i], { y: 50, opacity: 0 });
      gsap.set(textRefs.current[i], { y: 50, opacity: 0 });
      gsap.set(btnRefs.current[i], { y: 30, opacity: 0 });
    });

    timeline.current = gsap.timeline();
    timeline.current
      .to(
        bgRefs.current[idx],
        { scale: 1, duration: 1.2, ease: "power2.out" },
        0
      )
      .to(
        titleRefs.current[idx],
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.3
      )
      .to(
        textRefs.current[idx],
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.5
      )
      .to(
        btnRefs.current[idx],
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.7
      );

    setTimeout(() => {
      const next = (idx + 1) % slides.length;
      showSlide(next);
      currentSlide.current = next;
    }, 6000);
  };


  const handlers = useSwipeable({
  onSwipedLeft: () => showSlide((currentSlide.current + 1) % slides.length),
  onSwipedRight: () =>
    showSlide((currentSlide.current - 1 + slides.length) % slides.length),
  preventDefaultTouchmoveEvent: true,
  trackMouse: true
});

  return (
    <section className="main-slider-gsap" {...handlers}>
      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currentSlide.current ? "active" : ""}`}
            onClick={() => showSlide(i)}
          />
        ))}
      </div>

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${slide.align}`}
          ref={(el) => (slideRefs.current[i] = el)}
        >
          <div
            className="slide-bg"
            ref={(el) => (bgRefs.current[i] = el)}
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          <div className="slide-content">
            <h2
              className="slide-title"
              ref={(el) => (titleRefs.current[i] = el)}
            >
              {slide.title}
            </h2>
            <p className="slide-text" ref={(el) => (textRefs.current[i] = el)}>
              {slide.text}
            </p>
            <div className="slide-btn" ref={(el) => (btnRefs.current[i] = el)}>
              <a className="btn" href={slide.button.link}>
                {slide.button.label}
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GsapSlider;
