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
              : photos ? 
                <ImageMasonry setFeatured={setFeatured} setShowFeatured={setShowFeatured} photos={photos} /> : 
                <div className='warning'>
                  <p>Sorry, images aren't loading because the API limit for the hour has been reached. The dev is too broke to get a paid subscription. Sad life.</p>
                  <img src="https://static.wikia.nocookie.net/0e9418e5-bf6c-4353-8702-5b7ec0b56a52/scale-to-width/755" alt="crying man meme" />
                  <p>Check back in an hour, or <a href="https://github.com/nvsco-10" target="_blank" rel="noreferrer" >hire the dev so she can pay for a damn subscription.</a></p>
                </div>
          }

      </motion.div>
    </Main>
  )
}

export default Portfolio