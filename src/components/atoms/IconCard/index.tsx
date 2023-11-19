"use client"
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

// import inst1 from '@/assets/gif-icons/institucional/1-static.png';
import instClosing from '@/assets/gif-icons/institucional/1.gif';
import instOpening from '@/assets/gif-icons/institucional/2.gif';
import curtaMetragem from '@/assets/home/curta-metragem.png';
import documentario from '@/assets/home/documentario.png';
// import inst3 from '@/assets/gif-icons/institucional/2-static.png'


import webSerie from '@/assets/home/webserie.png';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';



interface IconCardProps {
  title: string;
  description: string;
  url: string;
}

const IconCard: React.FC<IconCardProps> = ({ title, description, url }) => {
  const images = {
    'INSTITUCIONAL': {
      opening: instOpening,
      closing: instClosing
    }
  }
  const [currentImage, setCurrentImage] = useState(selectImage(title, false));
  const router = useRouter();

  

  React.useEffect(() => {
    console.log('loading first time');
  })

  function selectImage(title: string, isOpening: boolean) {
    if (title === "INSTITUCIONAL") {
      if (isOpening) return images[`INSTITUCIONAL`].opening;
      else return images[`INSTITUCIONAL`].closing;
    }
    if (title === "DOCUMENTÁRIO") return documentario;
    if (title === "WEBSÉRIE") return webSerie;
    return curtaMetragem;
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
        onMouseEnter={() => setCurrentImage(selectImage(title, true))}
        onMouseLeave={() => setCurrentImage(selectImage(title, false))}
      >
        <Box
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
        <Typography color="text.secondary" fontSize={{xs: '20px', md: "25px"}} textAlign={"center"}>{title}</Typography>
        <Typography pb={2} color="text.secondary" fontSize={{xs: '14px', md: "16px"}} textAlign={"center"}>{description}</Typography>
      </Box>
    </Grid>
  )
}

export default IconCard;