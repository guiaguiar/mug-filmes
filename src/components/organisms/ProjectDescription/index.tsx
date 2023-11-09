import SectionBody from '@/components/atoms/SectionBody';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { ReactElement } from 'react';


interface ProjectDescriptionProps {
  descriptionComponent?: ReactElement;
  title1?: string;
  title2?: string;
}

export default function ProjectDescription({ descriptionComponent, title1, title2 }: ProjectDescriptionProps) {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'secondary.main',
          display: "flex",
          justifyContent: 'center',
          paddingBottom: '120px',
          span: {
            fontWeight: 700
          }
        }}
      >

        <SectionBody>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                color={theme.palette.text.secondary}
                sx={{
                  fontSize: { xs: '42px', md: '50px' },
                  fontWeight: 400,
                  textTransform: 'uppercase',
                }}
              >
                {title1}
              </Typography>
              <Typography
                color={theme.palette.text.secondary}
                sx={{
                  fontSize: { xs: '42px', md: '50px' },
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  paddingLeft: { xs: 0, md: '94px' }
                }}
              >
                {title2}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} pt={{ xs: '57px', md: '0px' }}>
              {descriptionComponent}
            </Grid>
          </Grid>
        </SectionBody>
      </Box>
    </>

  )
}
