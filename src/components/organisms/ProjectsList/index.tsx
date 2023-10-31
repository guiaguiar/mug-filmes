"use client";

import SectionBody from '@/components/atoms/SectionBody';
import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import Image, { StaticImageData } from 'next/image';


import image1 from '@/assets/projects-card-images/1.jpg';
import image2 from '@/assets/projects-card-images/2.jpg';
import image3 from '@/assets/projects-card-images/3.jpg';
import image4 from '@/assets/projects-card-images/4.png';
import image5 from '@/assets/projects-card-images/5.jpg';
import image6 from '@/assets/projects-card-images/6.jpg';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState } from 'react';

interface ProjectsListProps {
  subtitle?: string;
  imgArray?: StaticImageData[];
  emphasis?: boolean;
}

const images = [
  {
    title: 'Sanit Engenharia',
    image: image1,
    url: 'sait-engenharia'
  },
  {
    title: 'Zona de Criação',
    image: image2,
    url: 'zona-de-criacao'
  },
  {
    title: 'Renato Roseno',
    image: image3,
    url: 'renato-roseno'
  },
  {
    title: 'Vila das Artes',
    image: image4,
    url: 'vila-das-artes'
  },
  {
    title: 'UNAIDS',
    image: image5,
    url: 'unaids'
  },
  {
    title: 'Enquanto acaba',
    image: image6,
    url: 'enquanto-acaba'
  }
]



export default function ProjectsList({ imgArray, emphasis }: ProjectsListProps) {
  const theme = useTheme();
  const [scrollLeftValue, setScrollLeftValue] = useState<number>();
  const [scrollRightValue, setScrollRightValue] = useState<number>();



  const slideLeft = () => {
    let slider = document.getElementById("slider");
    if (!!slider) slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    if (!!slider) slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <SectionBody>
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          pb: '152px',
        }}
      >
        <Grid container>
          <Typography
            pb={'89px'}
            color={theme.palette.text.secondary}
            fontSize="50px"
            textTransform={'uppercase'}
          >
            Outros Projetos
          </Typography>
          <Box
            sx={{
              display: "flex",
              overflowX: "hidden",
              overflowY: "hidden",
              scrollBehavior: 'smooth',
            }}
            id="slider"
          >
            {images.map((item, i) => {
              return (
                <Box mr={2} key={i}>
                  <Box width={'270px'} height={'270px'}>
                    <Image quality={100} src={item.image} width={270} height={270} alt="" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                  </Box>
                  <Typography
                    color={theme.palette.text.secondary}
                    fontSize="20px"
                  >
                    {item.title}
                  </Typography>
                </Box>
              )
            })}
          </Box>

          <Box className="title-btns">
            <Box className="btns">
              <IconButton title="scroll left" onClick={slideLeft} sx={{ position: 'absolute', left: 0, top: '270px', svg: { fill: theme.palette.primary.main } }}>
                <ChevronLeft width={40} height={40} />
              </IconButton>
              <IconButton title="scroll right" onClick={slideRight} sx={{ position: 'absolute', right: 0, top: '270px', svg: { fill: theme.palette.primary.main } }}>
                <ChevronRight width={40} height={40} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Box >
    </SectionBody>
  )
}
