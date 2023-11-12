import CustomButton from '@/components/atoms/CustomButton';
import SectionBody from '@/components/atoms/SectionBody';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import patternImage from '../../../assets/home/MUG_Pattern.svg';
import grafismoRight from '../../../assets/home/grafismo-right.svg';


export default function HomeSection5() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'secondary.main',
        display: "flex",
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Image quality={100} src={patternImage} fill style={{ zIndex: 0, objectFit: 'cover', opacity: 0.7 }} alt="" />

      <SectionBody>
        <Grid container pb="158px" pt={"177px"}>
          <Grid item xs={12} sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Box height={"112px"} width="3600px" position={'absolute'} zIndex={2000} display={{ xs: 'none', sm: 'initial' }} marginLeft={{ xs: '-3500px', sm: '-3700px', lg: '-3000px' }} mt={18}>
              <Image quality={100} src={grafismoRight} fill style={{ zIndex: 30000, objectFit: 'cover', alignSelf: 'end' }} alt="" />
            </Box>
            <Typography textAlign={'start'} textTransform={'uppercase'} color={theme.palette.text.secondary} fontSize={70} fontWeight={300}>Tá faltando o que</Typography>
            <Box height={"112px"} width="3600px" position={'absolute'} zIndex={2000} display={{ xs: 'none', sm: 'initial' }} marginLeft={{ xs: '-4000px', sm: '750px' }}>
              <Image quality={100} src={grafismoRight} fill style={{ zIndex: 30000, objectFit: 'cover', alignSelf: 'end', rotate: '180deg' }} alt="" />
            </Box>
            <Typography textAlign={'end'} textTransform={'uppercase'} color={theme.palette.text.secondary} fontSize={70} fontWeight={300} pb="80px" pt={5}>pra começar?</Typography>
          </Grid>
          <Grid item xs={12} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <CustomButton label='Faça seu Orçamento' height='48px' fontSize='23px' fontWeight={300} />
          </Grid>

        </Grid>
      </SectionBody>
    </Box>
  )
}
