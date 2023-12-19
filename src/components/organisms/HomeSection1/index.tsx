"use client"
import SectionBody from '@/components/atoms/SectionBody';
import { Box, Typography, useTheme } from '@mui/material';

import BudgetButton from '@/components/atoms/BudgetButton';
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from 'react';

export default function HomeSection1() {
  const theme = useTheme();
  const [videoSrc, setVideoSrc] = useState('');
  const size = useWindowSize();

  useEffect(() => {
    if (size.width && size.width <= 764) {
      setVideoSrc('home-gif-764.mp4');
    } else {
      setVideoSrc('home-gif.mp4');
    }
  }, [size?.width]);

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'secondary.main',
        display: "flex",
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <video loop playsInline muted autoPlay src={videoSrc} style={{ objectFit: 'cover', height: '100vh', width: '100%' }} />
      </Box>
      <Box sx={{ height: '100vh', backgroundColor: '#01020180', width: '100%', position: 'absolute', }}></Box>
      <SectionBody>
        <Typography
          color={theme.palette.text.primary}
          fontSize={{ xs: '24px', md: '45px' }}
          style={{
            fontWeight: 300,
            textTransform: 'uppercase',
          }}
        >
          Transforme projetos
        </Typography>
        <Typography
          color={theme.palette.text.primary}
          fontSize={{ xs: '24px', md: '45px' }}
          sx={{
            fontWeight: 300,
            textTransform: 'uppercase',
            display: { xs: 'none', md: 'inherit' }
          }}
        >
          audiovisuais em histórias
        </Typography>
        <Typography
          color={theme.palette.text.primary}
          fontSize={{ xs: '24px', md: '45px' }}
          sx={{
            fontWeight: 300,
            textTransform: 'uppercase',
            display: { xs: 'inherit', md: 'none' },
            pb: '18px'
          }}
        >
          audiovisuais em histórias originais.
        </Typography>
        <Typography
          color={theme.palette.text.primary}
          fontSize={{ xs: '24px', md: '45px' }}
          sx={{
            fontWeight: 300,
            textTransform: 'uppercase',
            paddingBottom: { xs: '20px', md: '34px' },
            display: { xs: 'none', md: 'inherit' }
          }}
        >
          originais.
        </Typography>
        <Box display={{ xs: 'initial', md: 'none' }}>
          <BudgetButton small />
        </Box>
        <Box display={{ xs: 'none', md: 'initial' }}>
          <BudgetButton />
        </Box>
      </SectionBody>
    </Box>

  )
}
