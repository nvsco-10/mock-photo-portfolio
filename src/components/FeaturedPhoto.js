import React, { useState, useEffect } from 'react'
import Featured from '../assets/wrappers/Featured';
import { motion } from "framer-motion"

const FeaturedPhoto = ({id, setShowFeatured}) => {
  const [ photo, setPhoto ] = useState(null);

  const getPhoto = async () => {
    const data = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
        method: 'GET',
        headers: {
        Accept: "application/json",
        Authorization: process.env.REACT_APP_PEXELS_KEY
        },
    })

    const response = await data.json();

    setPhoto(response)

  }

  useEffect(() => {
    getPhoto();
    
  }, [])

  const transition = { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={transition}
      >
        <Featured>
          <span className='back-btn' onClick={() => setShowFeatured(false)}>Back</span>
          {photo && (
          <>

          <img src={photo.src.large2x} />
          <div>
              <p className='title'>{photo.alt}</p>
              <p className='description'>
                  Drinking vinegar cardigan banjo live-edge, ramps heirloom hashtag food truck. Disrupt brooklyn lomo aesthetic kale chips twee la croix williamsburg selvage. Tacos austin jianbing quinoa meditation. Cliche everyday carry sartorial art party tacos.
            </p>
              <span><a href={photo.url}>source</a></span>
          </div>
          </>
          )}
        </Featured>
      </motion.div>
  )
}

export default FeaturedPhoto