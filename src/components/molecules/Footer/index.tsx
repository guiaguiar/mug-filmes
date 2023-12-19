"use client"
import { Box, Grid, Typography } from '@mui/material';

import logo from '@/assets/brand/MUG_Branco.png';
import SectionBody from '@/components/atoms/SectionBody';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  return (
    <Box sx={{
      backgroundColor: "primary.main",
      minHeight: { xs: '500px', md: '380px' }
    }}>
      <SectionBody>
        <Grid container
          sx={{
            height: 32,
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            pt: '86px'
          }}
        >
          <Grid item sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: { xs: 'column', md: 'row' }
          }}>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              pb: { xs: '32px', md: 0 }
            }}>
              <Typography textAlign={{ xs: 'center', md: 'start' }} color="text.primary" fontSize={{ xs: '38px', md: "50px" }} lineHeight={1} textTransform="uppercase">TRABALHE </Typography>
              <Typography textAlign={{ xs: 'center', md: 'start' }} color="text.primary" fontSize={{ xs: '38px', md: "50px" }} lineHeight={1} textTransform="uppercase">COM A GENTE</Typography>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: { xs: 'row', md: "column" },
              justifyContent: 'space-between',
              pb: { xs: '16px', md: 0 }
            }}>
              <Box
                onClick={() => window.open('https://www.instagram.com/mugfilmes/')}
                sx={{
                  cursor: 'pointer'
                }}
              >
                <Typography fontSize={{ xs: 16, md: 20 }} color="text.primary">
                  Instagram
                </Typography>
              </Box>
              <Box
                onClick={() => window.open('https://vimeo.com/mugfilmes')}
                sx={{
                  cursor: 'pointer'
                }}
              >
                <Typography fontSize={{ xs: 16, md: 20 }} color="text.primary">
                  Vimeo
                </Typography>
              </Box>
              <Box
                onClick={() => window.open('https://www.linkedin.com/company/mug-filmes/about/')}
                sx={{
                  cursor: 'pointer'
                }}
              >
                <Typography fontSize={{ xs: 16, md: 20 }} color="text.primary">
                  Linkedin
                </Typography>
              </Box>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: 'start' },
            }}>
              <Typography color="text.primary" pb={{ xs: '16px', md: 0 }} fontSize={{ xs: 16, md: 20 }}>(11) 98124-0817</Typography>
              <Typography color="text.primary" fontSize={{ xs: 16, md: 20 }}>contato@mugfilmes.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} pt="50px">
            <Box position={'relative'} display="flex" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} sx={{ cursor: 'pointer' }} onClick={() => router.push('/')}>
              <Image src={logo} height={74} width={73} alt="" />
              <Typography pt={2} color="text.primary" fontSize={"12px"} fontWeight={400}>Mug Filmes 2023</Typography>
            </Box>
          </Grid>
        </Grid>


      </SectionBody>
    </Box>
  )
}
