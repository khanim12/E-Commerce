import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { useDispatch, useSelector } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";
function Slider() {
  const sliderIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === sliderIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === sliderIndex && (
                  <img className="h-[850px] w-full" src={item.img}></img>
                )}
              </div>
              <div className="absolute top-28 mx-auto inset-x-1/4">
                <p className="text-white text-4xl font-bold tracking-normal leading-none">
                  {parseInt(item.id) === sliderIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-12 left-[45%]">
        {sliderData.map(( dot ,index) => {
          return (
            <div className="mr-4" key={dot.id}>
              <div
                className={
                  index === sliderIndex
                    ? "bg-green-300 rounded-full p-4 cursor-pointer"
                    : "bg-white rounded-full p-4 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(nextSlide(sliderIndex + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button  className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300" onClick={() => dispatch(prevSlide(sliderIndex - 1))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

        </button>
        
      </div>
    </div>
  );
}

export default Slider;
