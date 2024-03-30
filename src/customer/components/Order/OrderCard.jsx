import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={5}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover"
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/v/9/j/32-mss22mjn335-metronaut-original-imagq464fkeueat8.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Men Skinny Mid Rise Blue Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: 38 </p>
              <p className="opacity-50 text-xs font-semibold">
                Color: Sky Blue
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹474</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on Apr 06</span>
              </p>
              <p className="text-xs">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on Apr 06</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
