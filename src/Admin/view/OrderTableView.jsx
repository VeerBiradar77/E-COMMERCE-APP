import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliverOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrdersTable = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);
  const [anchorEl, setAnchorEl] = React.useState([]);

  useEffect(() => {
    dispatch(getOrders());
  },[adminOrder.confirmed,adminOrder.shipped,adminOrder.delivered,adminOrder.deletedOrder]);

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliverOrder(orderId));
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <div className="p-10">
      <Card className="mt-2 bg-[gray]">
        <CardHeader title="Recent Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar
                          key={orderItem.product.id}
                          src={orderItem.product.imageUrl}
                        ></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  <TableCell align="left" scope="row">
                    {item.orderItems.map((orderItem) => (
                      <p key={orderItem.product.id}>
                        {" "}
                        {orderItem.product.title}
                      </p>
                    ))}
                  </TableCell>

                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full 
                      ${
                        item.orderStatus === "CONFIRMED"
                          ? "bg-[#43BE31]"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-[#0A79DF]"
                          : item.orderStatus === "PLACED"
                          ? "bg-[#53E0BC]"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-[#7B8788]"
                          : "bg-[#019031]"
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>

    

                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;
