import SectionBody from '@/components/atoms/SectionBody';
import { Box, Grid, useTheme } from '@mui/material';
import Image, { StaticImageData } from 'next/image';


interface Images4SectionProps {
  subtitle?: string;
  imgArray: StaticImageData[];
  emphasis?: boolean;
}

export default function Images4Section({ imgArray, emphasis }: Images4SectionProps) {
  const theme = useTheme();

  console.log(imgArray);

  return (
    <SectionBody>
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          pb: 10,
        }}
      >
        <Grid container spacing={2}>
          {imgArray.map((item, i) => {
            if (emphasis && i === 0) {
              return (
                <Grid item xs={12} key={i}>
                  <Box sx={{ position: 'relative', width: '100%', height: {xs: '310px', md: '643px'} }}>
                    <Image src={item} quality={50} fill alt="" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                  </Box>
                </Grid>
              )
            }
            return (
              <Grid item xs={12} md={emphasis ? 4 : 6} key={i}>
                <Box sx={{ position: 'relative', width: '100%', height: '310px' }}>
                  <Image quality={50} src={item} fill alt="" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </SectionBody>
  )
}
