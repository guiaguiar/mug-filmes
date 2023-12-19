import BudgetButton from '@/components/atoms/BudgetButton';
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
      <Image src={patternImage} fill style={{ zIndex: 0, objectFit: 'cover', opacity: 0.7 }} alt="" />

      <SectionBody>
        <Grid container pb={{xs: '90px', md: "158px"}} pt={{ xs: '80px', md: "177px" }}>
        <Grid item xs={12} sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
        }}>
          <Box height={"112px"} width="3600px" position={'absolute'} zIndex={2000} display={{ xs: 'none', sm: 'initial' }} marginLeft={{ xs: '-3500px', sm: '-3700px', lg: '-3000px' }} mt={18}>
            <Image src={grafismoRight} fill style={{ zIndex: 30000, objectFit: 'cover', alignSelf: 'end' }} alt="" />
          </Box>
          <Typography textAlign={'start'} textTransform={'uppercase'} color={theme.palette.text.secondary} fontSize={70} fontWeight={300}>Tá faltando o que</Typography>
          <Box height={"112px"} width="3600px" position={'absolute'} zIndex={2000} display={{ xs: 'none', sm: 'initial' }} marginLeft={{ xs: '-4000px', sm: '750px' }}>
            <Image src={grafismoRight} fill style={{ zIndex: 30000, objectFit: 'cover', alignSelf: 'end', rotate: '180deg' }} alt="" />
          </Box>
          <Typography textAlign={'end'} textTransform={'uppercase'} color={theme.palette.text.secondary} fontSize={70} fontWeight={300} pb="80px" pt={5}>pra começar?</Typography>
        </Grid>
        <Grid item xs={12} sx={{
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'column',
        }}>
          <Typography pb="20px" textAlign={'center'} textTransform={'uppercase'} color={theme.palette.text.secondary} fontSize={30} fontWeight={300}>Tá faltando o que pra começar?</Typography>
        </Grid>
        <Grid item xs={12} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Box display={{ xs: 'initial', md: 'none' }}>
            <BudgetButton small />
          </Box>
          <Box display={{ xs: 'none', md: 'initial' }}>
            <BudgetButton />
          </Box>
        </Grid>

      </Grid>
    </SectionBody>
    </Box >
  )
}
