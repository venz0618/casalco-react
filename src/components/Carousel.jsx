import React from 'react'
import { ReactDOM } from 'react';
import img1 from '../assets/casalco.jpg'
import img2 from '../assets/Casalco-3.jpg'
import img3 from '../assets/Casalco-4.jpg'
import img4 from '../assets/Casalco-6.jpg'
import img5 from '../assets/Casalco-7.jpg'
import '../App.css'
function Example() {
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
      
      function useTilt(active) {
        const ref = React.useRef(null);
      
        React.useEffect(() => {
          if (!ref.current || !active) {
            return;
          }
      
          const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
          };
      
          let el = ref.current;
      
          const handleMouseMove = (e) => {
            if (!el) {
              return;
            }
            if (!state.rect) {
              state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;
      
            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
          };
      
          el.addEventListener("mousemove", handleMouseMove);
      
          return () => {
            el.removeEventListener("mousemove", handleMouseMove);
          };
        }, [active]);
      
        return ref;
      }
      
      const initialState = {
        slideIndex: 0
      };
      
      const slidesReducer = (state, event) => {
        if (event.type === "NEXT") {
          return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
          };
        }
        if (event.type === "PREV") {
          return {
            ...state,
            slideIndex:
              state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
          };
        }
      };
      function Slide({ slide, offset }) {
        const active = offset === 0 ? true : null;
        const ref = useTilt(active);
      
        return (
          <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
              "--offset": offset,
              "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
          >
            <div
              className="slideBackground"
              style={{
                backgroundImage: `url('${slide.image}')`
              }}
            />
            <div
              className="slideContent"
              style={{
                backgroundImage: `url('${slide.image}')`
              }}
            >
              <div className="slideContentInner">
                <h2 className="slideTitle">{slide.title}</h2>
                <h3 className="slideSubtitle">{slide.subtitle}</h3>
                <p className="slideDescription">{slide.description}</p>
              </div>
            </div>
          </div>
        );
      }
      const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  return (
    <div className="slides">
    <button className='arrow' onClick={() => dispatch({ type: "PREV" })}>‹</button>

    {[...slides, ...slides, ...slides].map((slide, i) => {
      let offset = slides.length + (state.slideIndex - i);
      return <Slide slide={slide} offset={offset} key={i} />;
    })}
    <button  className='arrow' onClick={() => dispatch({ type: "NEXT" })}>›</button>
  </div>
  )
}
// const elApp = document.getElementById("app");
// ReactDOM.render(<Example />, elApp);
export default Example