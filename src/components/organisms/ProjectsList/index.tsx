"use client";

import SectionBody from '@/components/atoms/SectionBody';
import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import Image from 'next/image';


import image1 from '@/assets/projects-card-images/1.jpg';
import image2 from '@/assets/projects-card-images/2.jpg';
import image3 from '@/assets/projects-card-images/3.jpg';
import image4 from '@/assets/projects-card-images/4.jpg';
import image5 from '@/assets/projects-card-images/5.jpg';
import image6 from '@/assets/projects-card-images/6.jpg';

import BudgetButton from '@/components/atoms/BudgetButton';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { usePathname, useRouter } from 'next/navigation';

const images = [
  {
    title: 'Sanit Engenharia',
    image: image1,
    url: 'sanit-engenharia'
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
    title: 'Enquanto Acaba',
    image: image6,
    url: 'enquanto-acaba'
  }
]



export default function ProjectsList() {
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const path = pathname.replace('/', '');



  const slideLeft = () => {
    let slider = document.getElementById("slider");
    if (!!slider) slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    if (!!slider) slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <SectionBody paddingRight={{ xs: '0px', md: '64px' }} paddingLeft={{ xs: '0px', md: '64px' }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          pb: { xs: '80px', md: '152px' },
        }}
      >
        <Grid container>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 8 }}>
            <Box display={{ xs: 'initial', md: 'none' }}>
              <BudgetButton small />
            </Box>
            <Box display={{ xs: 'none', md: 'initial' }}>
              <BudgetButton />
            </Box>
          </Grid>
          <Typography
            pl={{ xs: '32px', md: '0px' }}
            pr={{ xs: '32px', md: '0px' }}
            pb={{ xs: '40px', md: '89px' }}
            color={theme.palette.text.secondary}
            fontSize={{ xs: '32px', md: "50px" }}
            textTransform={'uppercase'}
          >
            Outros Projetos
          </Typography>
          <Box
            sx={{
              display: "flex",
              overflowX: "scroll",
              overflowY: "hidden",
              scrollBehavior: 'smooth',
              scrollbarWidth: '0px',
              msOverflowStyle: 'none',
              '::-webkit-scrollbar': {
                display: 'none'
              },
            }}
            id="slider"
          >
            {images.map((item, i) => {
              if (item.url === path) {
                return null;
              }
              return (
                <Box mr={2} key={i} sx={{ cursor: 'pointer' }} onClick={() => router.push(item.url)} marginLeft={i === 0 || i === 1 && pathname === '/sanit-engenharia' ? '20px' : '0px'}>
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
            <Box className="btns" display={{ xs: 'none', md: 'initial' }}>
              <IconButton title="scroll left" onClick={slideLeft} sx={{ position: 'absolute', left: 0, top: '390px', svg: { fill: theme.palette.primary.main } }}>
                <ChevronLeft width={40} height={40} />
              </IconButton>
              <IconButton title="scroll right" onClick={slideRight} sx={{ position: 'absolute', right: 0, top: '390px', svg: { fill: theme.palette.primary.main } }}>
                <ChevronRight width={40} height={40} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Box >
    </SectionBody>
  )
}
