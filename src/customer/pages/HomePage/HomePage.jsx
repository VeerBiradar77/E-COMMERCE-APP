import React from 'react'
import { mens_kurta } from '../../../Data/mens_kurta'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-10 lg:px:10 '>
        <HomeSectionCarousel data = {mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data = {mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data = {mens_kurta} sectionName={"Men's Shirts"}/>
        <HomeSectionCarousel data = {mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data = {mens_kurta} sectionName={"Women's Dress"}/>
      </div>
    </div>
  )
}

export default HomePage
