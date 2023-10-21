import SectionBody from '@/components/atoms/SectionBody';
import { Box, Typography, useTheme } from '@mui/material';


interface BigVideoSessionProps {
  title?: string;
  title2?: string;
  subtitle?: string;
  // img: StaticImageData;
}

export default function BigVideoSession({ title, title2 }: BigVideoSessionProps) {
  const theme = useTheme();
  return (
    <SectionBody>
      <Box sx={{ pb: '100px' }}>
        <Typography textAlign="center" color="text.secondary" fontSize={"50px"} lineHeight={1} textTransform="uppercase" pb={3}>{title}</Typography>
        <Typography textAlign="center" color="text.secondary" fontSize={"50px"} lineHeight={1} textTransform="uppercase">{title2}</Typography>
      </Box>

      <Box sx={{
        width: '100%',
        height: '656px',
        backgroundColor: 'black',
        marginBottom: '100px',
      }}></Box>
    </SectionBody>
  )
}
