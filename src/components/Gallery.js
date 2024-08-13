import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import afterImage from '../assets/001.jpg';

const afterImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQ77-HkHcniJPT2chQC81ANv140C32CPOfQ&s";

export const Gallery = ({ data }) => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCenterSlidePercentage(100);
      } else if (window.innerWidth < 1024) {
        setCenterSlidePercentage(50);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box sx={{ backgroundColor: '#13192d', py: 4 }} id="gallery">
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: 2 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{
              fontWeight: 'bold',
              position: 'relative',
              display: 'inline-block',
              mb: 2,
              borderBottom: '4px solid white', // Adjust thickness and color as needed
              color:'white'
            }}>Gallery</Typography>
        </Box>
        <Carousel
          showThumbs={false}
          infiniteLoop
          showStatus={false}
          showIndicators
          autoPlay
          interval={3000}
          centerMode
          centerSlidePercentage={centerSlidePercentage}
          swipeable
          emulateTouch
          sx={{ width: '100%' }}
        >
          {data.map((image, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',margin:'15px' }}>
              <Box sx={{ width: '100%', maxWidth: '600px', position: 'relative' }}>
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={image.largeImage} alt="Before" />}
                  itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
              <Typography variant="subtitle1" sx={{ color: 'white', mt: 2, mb: 5, fontWeight: 'bold', textAlign: 'center' }}>
                {image.title}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};
