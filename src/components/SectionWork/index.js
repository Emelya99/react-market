import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowPrev from '../ArrowPrev';
import ArrowNext from '../ArrowNext';
import Title from '../Title';
import './Work.scss';
import WorkItem from "./WorkItem";
  
    
function Work() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch('https://625187db2dc339451d2ef136.mockapi.io/workItems')
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            setItems(json);
        });
    }, []);

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
            "prev arrow" +
            (currentSlide === 0 ? " disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <ArrowPrev />
        </button>
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
            "next arrow" +
            (currentSlide + 2 === slideCount - 1 ? " disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide + 2 === slideCount - 1 ? true : false}
            type="button"
        >
            <ArrowNext />
        </button>
    );

    const settings = {
        infinite: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
    
    return (
        <section className="work sec-bottom">
            <div className="container">
                <Title
                    title="вакансии в гросс маркете"
                />
                <Slider {...settings}>
                    {items.map(slide => {
                        return (
                            <WorkItem 
                                key={slide.badge}
                                badge={slide.badge}
                                workUrl={slide.workUrl}
                                alt={slide.badge}
                                text={slide.text}
                            />
                        );
                    })}
                </Slider>
            </div>
        </section>
    );
}

export default Work;