"use client"

import { Box, Typography } from '@mui/material';

import image1 from '@/assets/side-projects/carrossel/1.jpg';
import image2 from '@/assets/side-projects/carrossel/2.jpg';
import image3 from '@/assets/side-projects/carrossel/3.jpg';
import image4 from '@/assets/side-projects/carrossel/4.jpg';
import image5 from '@/assets/side-projects/carrossel/5.jpg';
import image6 from '@/assets/side-projects/carrossel/6.jpg';
import image7 from '@/assets/side-projects/carrossel/7.jpg';
import image8 from '@/assets/side-projects/carrossel/8.jpg';

import Image from 'next/image';


import SectionBodyFullScreen from '@/components/atoms/SectionBodyFullScreen';
import React, { useState } from 'react';



export default function HomeSection4() {
  const [count, setCount] = useState<number>(0);

  React.useEffect(() => {
    setTimeout(() => {
      if (count === 2) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 5000);
  }, [count]);

  return (
    <>

      <SectionBodyFullScreen>
        <Box
          sx={{
            img: {
              transition: 'opacity .5s'
            },
          }}
        >
          <Image src={image1} fill style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1, opacity: count === 0 ? 1 : 0 }} alt="" />
          <Image src={image2} fill style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1, opacity: count === 1 ? 1 : 0 }} alt="" />
          <Image src={image3} fill style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1, opacity: count === 2 ? 1 : 0 }} alt="" />
          <Image src={image4} fill style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1, opacity: count === 3 ? 1 : 0 }} alt="" />
          <Image src={image5} fill style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1, opacity: count === 4 ? 1 : 0 }} alt="" />
          <Image src={image6} fill style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1, opacity: count === 5 ? 1 : 0 }} alt="" />
          <Image src={image7} fill style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1, opacity: count === 6 ? 1 : 0 }} alt="" />
          <Image src={image8} fill style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1, opacity: count === 7 ? 1 : 0 }} alt="" />
        </Box>
        <Box sx={{ height: '100%', backgroundColor: '#01020180', width: '100%', position: 'absolute', }} />

        <Box sx={{
          position: 'relative',
          maxWidth: '1123px',
          width: '100%',
          paddingTop: '150px',
          paddingBottom: '150px',
          transition: 'opacity .0s',
        }}
        >
          <Box sx={{
            zIndex: 2,
            width: '100%',
            height: '100%',
            left: 0,
            paddingLeft: {xs: 2, md: 8},
            paddingRight: {xs: 2, md: 8}
          }}>
            <Box pb="32px" display={{ xs: 'none', sm: 'initial' }}>
              <Typography color={'text.primary'} textTransform={'uppercase'} fontSize={{ xs: '24px', md: '36px' }}>Transformando</Typography>
              <Typography color={'text.primary'} fontWeight={300} textAlign='start' fontSize={{ xs: '60px', md: '150px', lg: '138px' }} style={{ lineHeight: 0.9, textTransform: 'uppercase' }}>
                ideias em
              </Typography>
              <Typography color={'text.primary'} fontWeight={300} textAlign='end' fontSize={{ xs: '60px', md: '150px', lg: '138px' }} style={{ lineHeight: 0.9, textTransform: 'uppercase' }}>
                realidade
              </Typography>
            </Box>

            <Box pb="32px" display={{ xs: 'initial', sm: 'none' }}>
              <Typography pb="8px" color={'text.primary'} fontWeight={200} textAlign='center' fontSize={25} style={{ lineHeight: 0.9, textTransform: 'uppercase' }}>
                Transformando
              </Typography>
              <Typography pb="32px" color={'text.primary'} fontWeight={400} textAlign='center' fontSize={50} style={{ lineHeight: 1, textTransform: 'uppercase' }}>
                ideias em realidade
              </Typography>
            </Box>


            <Typography pt={{xs: '0px', md: 4}} color={'text.primary'} fontSize={{ xs: '16px', md: '18px' }} fontWeight={300} pb={4} textAlign="center">
              Apostamos em uma troca humanizada com as pessoas, colocando o cliente no centro de cada projeto. Nossa equipe oferece segurança e qualidade técnica, propondo soluções criativas que vão do roteiro à pós-produção.
            </Typography>
            <Typography color={'text.primary'} fontSize={{ xs: '16px', md: '18px' }} fontWeight={300} textAlign="center">
              Com visão interdisciplinar a partir de multilinguagens, mergulhamos em temáticas diversas para criar <strong>obras que inspiram resultados</strong>. Capturamos a essência de cada projeto, criando uma identidade singular em cada filme produzido.
            </Typography>
          </Box>
        </Box>
      </SectionBodyFullScreen >
    </>
  )
}
