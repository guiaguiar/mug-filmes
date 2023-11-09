import SectionBody from '@/components/atoms/SectionBody';
import { Box, Grid, useTheme } from '@mui/material';


interface VideosSectionProps {
  subtitle?: string;
  videoCodeArray: string[];
  emphasis?: boolean;
}

export default function VideosSection({ videoCodeArray, emphasis }: VideosSectionProps) {
  const theme = useTheme();

  return (
    <SectionBody>
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          pb: '152px',
        }}
      >
        <Grid container spacing={2}>
          {videoCodeArray.map((item, i) => {
            if (emphasis && i === 0) {
              return (
                <Grid item xs={12} key={i}>
                  <Box position="relative"
                    sx={{
                      width: '100%',
                      height: 'calc(56.25vw)',
                      maxHeight: '788.28px',
                    }}>
                    <iframe src={`https://player.vimeo.com/video${item}?autoplay=0&loop=0&muted=0`} style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }} frameBorder="0" allowFullScreen></iframe>
                  </Box>
                </Grid>
              )
            }
            return (
              <Grid item xs={12} md={emphasis ? 6 : 6} key={i}>
                <Box position="relative"
                  sx={{
                    width: '100%',
                    height: {xs: 'calc(56.25vw)', md: 'calc(56.25vw/2)'},
                    maxHeight: { xs: '600px', md: '360px' },
                  }}>
                  <iframe src={`https://player.vimeo.com/video${item}?autoplay=0&loop=0&muted=0`} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }} frameBorder="0" allowFullScreen></iframe>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </SectionBody>
  )
}
