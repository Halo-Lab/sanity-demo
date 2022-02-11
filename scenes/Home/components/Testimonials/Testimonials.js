import s from "./Testimonials.module.scss";
import TestimonialsItem from "./TestimonialsItem/TestimonialsItem";
import classnames from "classnames";
// import Swiper from "react-id-swiper";
import SecondArrowIcon from "../../../../assets/SecondArrowIcon/SecondArrowIcon";

const Testimonials = ({ data }) => {
  const sliderParams = {
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        centeredSlides: false,
        spaceBetween: 40,
        loop: false,
      },
    },
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const { category, testimonialsArr, title } = data.testimonials;

  const TestimonialsItems = testimonialsArr.map((item, index) => {
    return <TestimonialsItem data={item} key={index} />;
  });

  return (
    <div className="section">
      <div className={s.testimonial}>
        <div className={s.testimonialWrapper}>
          <div className={s.testimonialInfo}>
            <span className="s-category section-category--inner section-title--center-mobile">
              {category}
            </span>
            <h3 className="section-title section-title--inner section-title--center-mobile">
              {title}
            </h3>
            <div className={s.testimonialNavigation}>
              <button
                type="button"
                onClick={goPrev}
                className={s.testimonialNavigationButton}
              >
                <SecondArrowIcon mod="icon--navigate" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className={classnames(
                  s.testimonialNavigationButton,
                  s.testimonialNavigationButtonNext
                )}
              >
                <SecondArrowIcon mod="icon--navigate" />
              </button>
            </div>
          </div>
          <div className={s.testimonialSlider}>
            {/* <Swiper
              ref={swiperRef}
              containerClass={s.testimonialSliderContainer}
              {...sliderParams}
            >
              {testimonialItems}
            </Swiper> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
