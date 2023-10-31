import CustomButton from '@/components/atoms/CustomButton';
import SectionBody from '@/components/atoms/SectionBody';
import { Box, Grid, Typography, useTheme } from '@mui/material';

export default function HomeSection5() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'secondary.main',
        display: "flex",
        justifyContent: 'center',
      }}
    >
      <SectionBody>
        <Grid container pb="180px" pt={"82px"}>
          <Box>
            <Typography
              fontWeight={300}
              style={{
                color: theme.palette.text.secondary,
                fontSize: '50px',
                paddingBottom: 40,
                textTransform: 'uppercase',
              }}>
              NOSSOS PARCEIROS
            </Typography>

          </Box>

          <Grid item xs={12} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Typography color={theme.palette.text.secondary} fontSize={40} lineHeight={1}>Tá faltando o que pra</Typography>
            <Typography color={theme.palette.text.secondary} fontSize={120} fontWeight={500} lineHeight={0.6}>começar?</Typography>
          </Grid>

          <Grid item display="flex" justifyContent="center" xs={12} pt={10}>
            <CustomButton label='FAÇA SEU ORÇAMENTO' />
          </Grid>

        </Grid>
      </SectionBody>
    </Box>
  )
}
