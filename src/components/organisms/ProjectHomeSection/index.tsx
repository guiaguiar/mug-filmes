import SectionBody from '@/components/atoms/SectionBody';
import SectionBodyFullScreen from '@/components/atoms/SectionBodyFullScreen';
import { ChevronLeft } from '@mui/icons-material';
import { Box, Grid, IconButton, Link, Typography, useTheme } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
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
  return (
    <>
      <SectionBody>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          pb: '50px'
        }}>
          <IconButton size='small' sx={{
            svg: {
              color: theme.palette.text.secondary
            }
          }}>
            <ChevronLeft width={10} height={10} />
          </IconButton>
          <Link sx={{
            fontWeight: 400,
            fontSize: '20px',
            textDecoration: 'none'
          }}>
            Voltar
          </Link>
        </Box>
      </SectionBody>
      <Box height={400} width={'100%'}>
        <SectionBodyFullScreen>
          <Box height={400} width={'100%'} position={'relative'} overflow={'hidden'}>
            <Image src={img} alt="banner" fill style={{ objectFit: 'cover', objectPosition: imgPosition || 'bottom' }} quality={100} />
          </Box>
        </SectionBodyFullScreen>
      </Box>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'secondary.main',
          display: "flex",
          justifyContent: 'center',
          paddingTop: '135px',
          paddingBottom: '120px',
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
                style={{
                  fontSize: '50px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                }}
              >
                {title}
              </Typography>
              <Box>
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
            <Grid item xs={12} md={6}>
              {descriptionComponent}
            </Grid>
          </Grid>
        </SectionBody>
      </Box>
    </>

  )
}
