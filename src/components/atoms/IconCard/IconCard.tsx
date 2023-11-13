import curtaMetragem from '@/assets/home/curta-metragem.png';
import documentario from '@/assets/home/documentario.png';
import institucional from '@/assets/home/institucional.png';
import webSerie from '@/assets/home/webserie.png';
import { Box, Grid, Typography } from '@mui/material';
import { useMemo } from 'react';
import { IconCardProps } from '.';

export const IconCard: React.FC<IconCardProps> = ({ title, description }) => {

  const selectIcon = useMemo(() => {
    if (title === "INSTITUCIONAL") return institucional;
    if (title === "DOCUMENTÁRIO") return documentario;
    if (title === "WEBSÉRIE") return webSerie;
    return curtaMetragem;
  }, [title]);

  return (
    <Grid item xs={12} md={6} lg={3} sx={{
      minHeight: '160px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Box sx={{
        position: 'relative',
        maxWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '110px',
            height: '110px',
            pb: 2
          }}
        >
          {/* <Image quality={100} src={selectIcon} width={104} height={104} alt="" style={{ objectFit: 'cover', objectPosition: 'top left' }} /> */}
          {/* <Image quality={100} src={selectIcon} width={104} height={104} alt="" style={{ objectFit: 'cover', objectPosition: 'top left' }} /> */}
          {/* <Image quality={100} src={selectIcon} width={104} height={104} alt="" style={{ objectFit: 'cover', objectPosition: 'top left' }} /> */}
          {/* <Image quality={100} src={selectIcon} width={104} height={104} alt="" style={{ objectFit: 'cover', objectPosition: 'top left' }} /> */}

          {/* <Image quality={100} src={selectIcon} width={104} height={104} alt="" style={{ objectFit: 'cover', objectPosition: 'top left' }} /> */}
        </Box>
        <Typography color="text.secondary" fontSize={"25px"} textAlign={"center"}>{title}</Typography>
        <Typography pb={2} color="text.secondary" fontSize={"16px"} textAlign={"center"}>{description}</Typography>
      </Box>
    </Grid>
  );
};
