import { Button } from "@material-tailwind/react";
import React from "react";
import clothes from '../../assets/images/clothes.jpg'
import { useDispatch } from "react-redux";
import { filterProducts } from "../../features/slices/productsSlice";
import { Link } from "react-router-dom";
function NavigateButtons() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
    ];
    const dispatch=useDispatch()
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
              <div key={index} className="mr-4">
                  <Link to={'/filteredProducts/'+button}>
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                      className="hover:bg-green-300 duration-300 ease-in-out"
                      onClick={()=>dispatch(filterProducts(button))}
              >
                {button}
                      </Button>
                      </Link>
            </div>
          );
        })}
          </div>
          <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-md">
              <h3 className="text-orange-300 text-center text-lg font-bold tracking-normal leading-none"> SALES UP TO 50%</h3>
          </div>
          <div className="flex items-center justify-center py-4">
              <img className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600" src={clothes} alt="" />
          </div>
    </div>
  );
}

export default NavigateButtons;
