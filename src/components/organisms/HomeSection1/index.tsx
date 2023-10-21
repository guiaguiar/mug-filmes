import SectionBody from '@/components/atoms/SectionBody';
import { Box, Typography, useTheme } from '@mui/material';

export default function HomeSection1() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'secondary.main',
        display: "flex",
        justifyContent: 'center',
        paddingTop: '50px'
      }}
    >
      <SectionBody>
        <Box display="flex" justifyContent="space-between">
          <Typography
            color={theme.palette.text.secondary}
            style={{
              fontSize: '30px',
              fontWeight: 300,
              textTransform: 'uppercase',
            }}
          >
            SOLUÇÕES CRIATIVAS
          </Typography>
          <Typography
            color={theme.palette.text.secondary}
            style={{
              fontSize: '30px',
              fontWeight: 300,
              textTransform: 'uppercase',
            }}
          >
            EM PROJETOS AUDIOVISUAIS
          </Typography>
        </Box>

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
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          paddingRight: '80px',
          paddingTop: '48px',
          paddingBottom: '80px'
        }}>
          <Box>
            <Typography fontSize={"22px"} color="text.secondary" fontWeight={300}>Do papel para realidade,</Typography>
            <Typography fontSize={"22px"} color="text.secondary" fontWeight={300}>transformando seu</Typography>
            <Typography fontSize={"22px"} color="text.secondary" pb="35px" fontWeight={700}>plano em movimento.</Typography>
          </Box>
        </Box>
      </SectionBody>
    </Box>

  )
}
