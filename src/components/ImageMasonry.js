import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import React from 'react'
import { motion } from "framer-motion"

const ImageMasonry = ({photos, setFeatured, setShowFeatured}) => {
  const handleClick = (id) => {
    setFeatured(id)
    setShowFeatured(true)
  }

  const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

  const frameVariants = {
    hover: { scale: 0.95 }
  };

  return (
    <Box sx={{ width: 1, minHeight: 1000 }}>
        <Masonry columns={{xl: 3, lg:2, md: 2, sm: 1, xs: 1}} spacing={{xs: 0, sm: 0, md: 1, lg: 1}}>
            {photos.map((photo) => (
              <motion.div key={photo.id} className="thumbnail">
                <motion.div 
                  whileHover="hover"
                  variants={frameVariants}
                  initial={{ opacity: 0}}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0}}
                  transition={transition}
                  onClick={() => handleClick(photo.id)}
                  >
                    {/* photo.src.landscape */}
                    <img
                    src={`${photo.src.large2x}?w=162&auto=format`}
                    srcSet={`${photo.src.large2x}?w=162&auto=format&dpr=2 2x`}
                    alt={photo.alt}
                    loading="lazy"
                    style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '100%',
                    }}
                    />
                </motion.div>
              </motion.div>
            ))}
        </Masonry>
    </Box>
  )
}

export default ImageMasonry