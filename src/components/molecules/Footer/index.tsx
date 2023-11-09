import { Box, Grid, Typography, useTheme } from '@mui/material';

import logo from '@/assets/brand/MUG_Branco.png';
import SectionBody from '@/components/atoms/SectionBody';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{
      backgroundColor: "primary.main",
      minHeight: '410px'
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
          <Box sx={{
            display: "flex",
            flexDirection: "column",
          }}>
            <Typography color="text.primary" fontSize={"50px"} lineHeight={1} textTransform="uppercase">TRABALHE </Typography>
            <Typography color="text.primary" fontSize={"50px"} lineHeight={1} textTransform="uppercase">COM A GENTE</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
          }}>
            <Link
              href=""
            >
              <Typography fontSize={20} color="text.primary">
                Instagram
              </Typography>
            </Link>
            <Link
              href=""
            >
              <Typography fontSize={20} color="text.primary">
                Vimeo
              </Typography>
            </Link>
            <Link
              href=""
            >
              <Typography fontSize={20} color="text.primary">
                Linkedin
              </Typography>
            </Link>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
          }}>
            <Typography color="text.primary" fontSize={"20px"}>(11) 91234 5678</Typography>
            <Typography color="text.primary" fontSize={"20px"}>contato@mugfilmes.com.br</Typography>
          </Box>
          <Grid item xs={12} pt="50px">
            <Box position={'relative'} display="flex" alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
              <Image src={logo} height={74} width={73} alt="" />
              <Typography pt={2} color="text.primary" fontSize={"12px"} fontWeight={400}>Mug Filmes 2023</Typography>
            </Box>
          </Grid>
        </Grid>


      </SectionBody>
    </Box>
  )
}
