import { TrendingUp } from '@mui/icons-material'
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';

const salesData=[
    {
        states:"845k",
        title:"sales",
        color:"#FAD02E",
        icon:<TrendingUp sx={{fontSize:"1.75rem"}} />
    },
    {
        states:"18.5k",
        title:"Customers",
        color:"#45CE30",
        icon:<AccountCircleIcon sx={{fontSize:"1.75rem"}} />
    },
    {
        states:"2.4k",
        title:"Products",
        color:"#E71C23",
        icon:<SettingsCellIcon sx={{fontSize:"1.75rem"}} />
    },
    {
        states:"88k",
        title:"Revenue",
        color:"#2475B0",
        icon:<AttachMoneyIcon sx={{fontSize:"1.75rem"}} />
    },


]

const renderState=()=>{
    return salesData.map((item,index)=>(
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display:"flex",alignItems:"center"
            }}>
                <Avatar variant='rounded' sx={{
                    mr:3,
                    width:44,
                    height:44,
                    boxShadow:3,
                    color:"white",
                    background:`${item.color}`
                }}>
                    {item.icon}

                </Avatar>

                <Box sx={{display:"flex",flexDirection:"column"}}>

                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.states}</Typography>

                </Box>

            </Box>

        </Grid>
    ))
}

const MonthlyOverview = () => {
  return (
    
      <Card sx={{}}>
        <CardHeader title="Monthly Overview"
        action={
            <IconButton size='small'>
                <MoreVertIcon/>
            </IconButton>
        }
        subheader={
            <Typography variant='body2'>
                <Box component="span" sx={{fontWeight:600}}>
                    total 45.9% growth
                </Box>
                😎this month
            </Typography>
        }
        titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight:"2rem !importatnt",
                letterSpacing:".15px !importatnt "
            }
        }}
        />
        <CardContent>
            <Grid container spacing={[5,0]}>
                {renderState()}

            </Grid>
        </CardContent>

        
      </Card>
    
  )
}

export default MonthlyOverview
