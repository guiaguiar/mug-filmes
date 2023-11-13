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
import { useState } from 'react';



interface IconCardProps {
  title: string;
  description: string;
  url: string;
}

function selectImage(title: string, isOpening: boolean) {
  if (title === "INSTITUCIONAL"){
    if(isOpening) return instOpening;
    else return instClosing;
  }
  if (title === "DOCUMENTÁRIO") return documentario;
  if (title === "WEBSÉRIE") return webSerie;
  return curtaMetragem;
}

const IconCard: React.FC<IconCardProps> = ({ title, description, url }) => {
  const [currentImage, setCurrentImage] = useState(selectImage(title, false));
  const router = useRouter();

  return (
    <Grid item xs={12} md={6} lg={3} sx={{
      minHeight: '160px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Box sx={{
        position: 'relative',
        maxWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
      }}
        id={title}
        onMouseEnter={() => setCurrentImage(selectImage(title, true))}
        onMouseLeave={() => setCurrentImage(selectImage(title, false))}
        onClick={() => router.push(url)}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '110px',
            height: '110px',
            pb: 2
          }}
        >
          {/* <Image quality={100} src={inst4} width={104} height={104} alt="" style={{ objectFit: 'cover', objectPosition: 'top left', display: hover ? 'none' : 'initial' }} /> */}
          <Image quality={100} src={currentImage} width={104} height={104} alt="" style={{ objectFit: 'cover', objectPosition: 'top left' }} />
          {/* <Image quality={100} src={selectIcon} width={104} height={104} alt="" style={{ objectFit: 'cover', objectPosition: 'top left' }} /> */}
          {/* <Image quality={100} src={selectIcon} width={104} height={104} alt="" style={{ objectFit: 'cover', objectPosition: 'top left' }} /> */}
          {/* <Image quality={100} src={selectIcon} width={104} height={104} alt="" style={{ objectFit: 'cover', objectPosition: 'top left' }} /> */}

          {/* <Image quality={100} src={selectIcon} width={104} height={104} alt="" style={{ objectFit: 'cover', objectPosition: 'top left' }} /> */}
        </Box>
        <Typography color="text.secondary" fontSize={"25px"} textAlign={"center"}>{title}</Typography>
        <Typography pb={2} color="text.secondary" fontSize={"16px"} textAlign={"center"}>{description}</Typography>
      </Box>
    </Grid>
  )
}

export default IconCard;