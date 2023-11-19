"use client"
import { Box, Grid, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

import curtOpening from '@/assets/gif-icons/curta-metragem/1.gif';
import curtClosing from '@/assets/gif-icons/curta-metragem/2.gif';
import docOpening from '@/assets/gif-icons/documentario/1.gif';
import docClosing from '@/assets/gif-icons/documentario/2.gif';
import instClosing from '@/assets/gif-icons/institucional/1.gif';
import instOpening from '@/assets/gif-icons/institucional/2.gif';
import webClosing from '@/assets/gif-icons/webserie/1.gif';
import webOpening from '@/assets/gif-icons/webserie/2.gif';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';



interface IconCardProps {
  title: string;
  description: string;
  url: string;
}

interface imagesInterface {
  [key: string]: {
    opening: StaticImageData;
    closing: StaticImageData;
  }
}

const IconCard: React.FC<IconCardProps> = ({ title, description, url }) => {
  const images: imagesInterface = {
    'INSTITUCIONAL': {
      opening: instOpening,
      closing: instClosing
    },
    'CURTA-METRAGEM': {
      opening: curtOpening,
      closing: curtClosing
    },
    'DOCUMENTÁRIO': {
      opening: docOpening,
      closing: docClosing
    },
    'WEBSÉRIE': {
      opening: webOpening,
      closing: webClosing
    }
  }
  const [currentImage, setCurrentImage] = useState(selectImage(title, true));
  const router = useRouter();

  function selectImage(title: any, isOpening: boolean) {
    if (isOpening) return images[title].opening;
    return images[title].closing;
  }

  return (
    <Grid item xs={12} md={6} lg={3} sx={{
      minHeight: '210px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
    }}>
      <Box sx={{
        position: 'absolute',
        maxWidth: '300px',
        height: '211px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 22,
      }}
        id={title}
        onClick={() => router.push(url)}
      >
        <Box
          onMouseEnter={() => setCurrentImage(selectImage(title, false))}
          onMouseLeave={() => setCurrentImage(selectImage(title, true))}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '110px',
            height: '110px',
            pb: 2,
            zIndex: 10
          }}
        >
          <Image quality={100} src={currentImage} width={104} height={104} alt="" />
        </Box>
        <Typography color="text.secondary" fontSize={{ xs: '20px', md: "25px" }} textAlign={"center"}>{title}</Typography>
        <Typography pb={2} color="text.secondary" fontSize={{ xs: '14px', md: "16px" }} textAlign={"center"}>{description}</Typography>
      </Box>
    </Grid>
  )
}

export default IconCard;