import SectionBody from '@/components/atoms/SectionBody';
import SectionBodyFullScreen from '@/components/atoms/SectionBodyFullScreen';
import { ChevronLeft } from '@mui/icons-material';
import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';


interface ProjectHomeSectionProps {
  descriptionComponent?: ReactElement;
  title?: string;
  subtitle?: string;
  year?: string;
  img: StaticImageData;
  imgPosition?: string;
}

export default function ProjectHomeSection({ descriptionComponent, title, subtitle, img, imgPosition, year }: ProjectHomeSectionProps) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <SectionBody>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          pb: '50px'
        }}>
          <IconButton
            onClick={() => router.push('/')}
            size='small' sx={{
              svg: {
                color: theme.palette.text.secondary
              },
              borderRadius: '12px'
            }}>
              <ChevronLeft width={12} height={12} />
            <Typography
              color="text.secondary"
              pr={1}
              pl={1}
              sx={{
                fontWeight: 400,
                fontSize: '20px',
                textDecoration: 'none'
              }}
            >
              Voltar
            </Typography>
          </IconButton>
        </Box>
      </SectionBody>
      <Box height={400} width={'100%'}>
        <SectionBodyFullScreen>
          <Box height={400} width={'100%'} position={'relative'} overflow={'hidden'}>
            <Image src={img} alt="banner" fill style={{ objectFit: 'cover', objectPosition: imgPosition || 'bottom' }} />
          </Box>
        </SectionBodyFullScreen>
      </Box>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'secondary.main',
          display: "flex",
          justifyContent: 'center',
          paddingTop: { xs: '64px', md: '135px' },
          paddingBottom: { xs: '57px', md: '120px' },
          span: {
            fontWeight: 700
          }
        }}
      >

        <SectionBody>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography
                color={theme.palette.text.secondary}
                sx={{
                  fontSize: { xs: '38px', md: '50px' },
                  fontWeight: 400,
                  textTransform: 'uppercase',
                }}
              >
                {title}
              </Typography>
              <Box pb={{ xs: 4, md: 0 }}>
                <Typography
                  color={theme.palette.text.secondary}
                  style={{
                    fontSize: '18px',
                    fontWeight: 400,
                  }}
                >
                  {subtitle}
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  style={{
                    fontSize: '18px',
                    fontWeight: 400,
                  }}
                >
                  {year}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'justify' }}>
              {descriptionComponent}
            </Grid>
          </Grid>
        </SectionBody>
      </Box>
    </>

  )
}
