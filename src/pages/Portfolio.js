import React, { useState, useEffect } from 'react'
import FeaturedPhoto from '../components/FeaturedPhoto'
import Main from '../assets/wrappers/Main'
import ImageMasonry from '../components/ImageMasonry'
import { usePortfolio } from '../utils/PortfolioContext'
import { motion } from "framer-motion"


const Portfolio = () => {
  const { activePage, setActivePage } = usePortfolio();
  const [ photos, setPhotos ] = useState([]);
  const [ featured, setFeatured ] = useState('');
  const [ showFeatured, setShowFeatured ] = useState(false);

  const getPhotos = async (query) => {
    const data = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=15`, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        Authorization: process.env.REACT_APP_PEXELS_KEY
      },
    })

    const response = await data.json();

    setPhotos(response.photos)

  }

  useEffect(() => {
    getPhotos(activePage);
   
  }, [activePage])

  return (
    <Main>
      <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        exit={{opacity: 0 }}>

          {showFeatured 
              ? <FeaturedPhoto id={featured} setShowFeatured={setShowFeatured}/>
              : <ImageMasonry setFeatured={setFeatured} setShowFeatured={setShowFeatured} photos={photos} />
          }

      </motion.div>
    </Main>
  )
}

export default Portfolio