import React from 'react'
import { ReactDOM } from 'react';
import img1 from '../assets/casalco.jpg'
import img2 from '../assets/Casalco-3.jpg'
import img3 from '../assets/Casalco-4.jpg'
import img4 from '../assets/Casalco-6.jpg'
import img5 from '../assets/Casalco-7.jpg'
import '../App.css'

const slides = [
  {
    image: img1
  },
  {
    image: img2
  },
  {
    image: img3
  },
  {
    image: img4
  },
  {
    image: img5
  }
];
const delay = 2500;
function Example() {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => { };
  }, [index]);

  // function useTilt(active) {
  //   const ref = React.useRef(null);

  //   React.useEffect(() => {
  //     if (!ref.current || !active) {
  //       return;
  //     }

  //     const state = {
  //       rect: undefined,
  //       mouseX: undefined,
  //       mouseY: undefined
  //     };

  //     let el = ref.current;

  //     const handleMouseMove = (e) => {
  //       if (!el) {
  //         return;
  //       }
  //       if (!state.rect) {
  //         state.rect = el.getBoundingClientRect();
  //       }
  //       state.mouseX = e.clientX;
  //       state.mouseY = e.clientY;
  //       const px = (state.mouseX - state.rect.left) / state.rect.width;
  //       const py = (state.mouseY - state.rect.top) / state.rect.height;

  //       el.style.setProperty("--px", px);
  //       el.style.setProperty("--py", py);
  //     };

  //     el.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       el.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, [active]);

  //   return ref;
  // }

  // const initialState = {
  //   slideIndex: 0
  // };

  // const slidesReducer = (state, event) => {
  //   if (event.type === "NEXT") {
  //     return {
  //       ...state,
  //       slideIndex: (state.slideIndex + 1) % slides.length
  //     };
  //   }
  //   if (event.type === "PREV") {
  //     return {
  //       ...state,
  //       slideIndex:
  //         state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
  //     };
  //   }
  // };
  // function Slide({ slide, offset }) {
  //   const active = offset === 0 ? true : null;
  //   const ref = useTilt(active);

  //   return (
  //     <div
  //       ref={ref}
  //       className="slide"
  //       data-active={active}
  //       style={{
  //         "--offset": offset,
  //         "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
  //       }}
  //     >
  //       <div
  //         className="slideBackground"
  //         style={{
  //           backgroundImage: `url('${slide.image}')`
  //         }}
  //       />
  //       <div
  //         className="slideContent"
  //         style={{
  //           backgroundImage: `url('${slide.image}')`
  //         }}
  //       >
  //         <div className="slideContentInner">
  //           <h2 className="slideTitle">{slide.title}</h2>
  //           <h3 className="slideSubtitle">{slide.subtitle}</h3>
  //           <p className="slideDescription">{slide.description}</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  // const delay = 2500;
  // const [index, setIndex] = React.useState(0);
  // React.useEffect(() => {
  //   setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {};
  // }, [index]);
  // const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  return (
    //   <div className="slides">
    //   <button className='arrow' onClick={() => dispatch({ type: "PREV" })}>‹</button>

    //   {[...slides, ...slides, ...slides].map((slide, index) => {
    //     let offset = slides.length + (state.slideIndex - index);
    //     return <Slide slide={slide} offset={offset} key={index} />;
    //   })}
    //   <button  className='arrow' onClick={() => dispatch({ type: "NEXT" })}>›</button>
    // </div>
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
          ></div>
        ))}
      </div>
    </div>

  )
}
// const elApp = document.getElementById("app");
// ReactDOM.render(<Example />, elApp);
export default Example