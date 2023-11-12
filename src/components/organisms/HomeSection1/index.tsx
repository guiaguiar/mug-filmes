import SectionBody from '@/components/atoms/SectionBody';
import { Box, Typography, useTheme } from '@mui/material';

import BudgetButton from '@/components/atoms/BudgetButton';


export default function HomeSection1() {
  const theme = useTheme();
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
      {/* <Image alt="alt" src={image4} fill style={{ objectFit: 'cover' }} /> */}
      <Box sx={{ height: '100vh', backgroundColor: '#01020180', width: '100%', position: 'absolute', }}></Box>
      <SectionBody>
        <Typography
          color={theme.palette.text.primary}
          style={{
            fontSize: '45px',
            fontWeight: 300,
            textTransform: 'uppercase',
          }}
        >
          Transforme projetos
        </Typography>
        <Typography
          color={theme.palette.text.primary}
          style={{
            fontSize: '45px',
            fontWeight: 300,
            textTransform: 'uppercase',
          }}
        >
          audiovisuais em histórias
        </Typography>
        <Typography
          color={theme.palette.text.primary}
          style={{
            fontSize: '45px',
            fontWeight: 300,
            textTransform: 'uppercase',
            paddingBottom: '34px'
          }}
        >
          originais.
        </Typography>

        <BudgetButton />

        <Typography fontSize={"24px"} color="text.primary" pb="35px"></Typography>
        {/* <Box position="relative" sx={{
          width: '100%',
          height: 'calc(56.25vw)',
          maxHeight: '788.28px',
        }}>
          <iframe src="https://player.vimeo.com/video/819598702?autoplay=1&loop=1&muted=1" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }} frameBorder="0" allowFullScreen></iframe>
        </Box> */}
      </SectionBody>
    </Box>

  )
}
