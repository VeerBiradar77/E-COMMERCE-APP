import React from 'react'
import { StepLabel, Stepper } from '@mui/material'

const steps=[
    "Placed", 
    "Order Confirmed", 
    "Shipped", 
    "Out For Delivery", 
    "Delivered"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
{steps.map((label)=><step>
    <StepLabel sx={{color:"#9155FD", fontSize:"44px"}}>{label}</StepLabel>
</step>)}
        </Stepper>
      
    </div>
  )
}

export default OrderTracker
