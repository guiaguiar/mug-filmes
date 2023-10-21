import { Box, Typography, useTheme } from '@mui/material';

import image1 from '@/assets/banner/1.png';
import SectionBodyFullScreen from '@/components/atoms/SectionBodyFullScreen';
import Image from 'next/image';



const images = [
  {
    title: 'Sanit Engenharia',
    image: image1
  }
]

export default function HomeSection4() {
  const theme = useTheme();

  return (
    <SectionBodyFullScreen>
      <Image quality={100} src={images[0].image} fill style={{ objectFit: 'cover', objectPosition: 'top left', zIndex: -1 }} alt="" />
      <Box sx={{ position: 'relative', maxWidth: '1400px', width: '100%', paddingTop: '150px', paddingBottom: '150px' }}>
        <Box sx={{
          zIndex: 2,
          width: '100%',
          height: '100%',
          left: 0,
        }}>
          <Box display="flex" alignItems="center" justifyContent={"center"}> 
            <Box
              sx={{
                // width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Typography fontSize={'36px'}>Transformando</Typography>
              <Typography textAlign='center' fontSize={{ xs: '80px', md: '150px', lg: '230px' }} style={{ lineHeight: 0.9 }}>
                ideias em
              </Typography>
              <Typography  textAlign='center' fontSize={{ xs: '80px', md: '150px', lg: '230px' }} style={{ lineHeight: 0.9 }}>
                realidade
              </Typography>
            </Box>
          </Box>


          <Typography fontSize='18px' fontWeight={400} pb={4} textAlign="center">
            Apostamos em uma troca humanizada com as pessoas, colocando o cliente no centro de cada projeto. Nossa equipe oferece segurança e qualidade técnica, propondo soluções criativas que vão do roteiro à pós-produção.
          </Typography>
          <Typography fontSize='18px' fontWeight={400} textAlign="center">
            Com visão interdisciplinar a partir de multilinguagens, mergulhamos em temáticas diversas para criar <strong>obras que inspiram resultados</strong>. Capturamos a essência de cada projeto, criando uma identidade singular em cada filme produzido.
          </Typography>
        </Box>
      </Box>
    </SectionBodyFullScreen>
  )
}
