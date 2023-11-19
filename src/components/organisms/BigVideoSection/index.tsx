import SectionBody from '@/components/atoms/SectionBody';
import { Box, Typography, useTheme } from '@mui/material';


interface BigVideoSectionProps {
  title?: string;
  title2?: string;
  subtitle?: string;
  link?: string;
}

export default function BigVideoSection({ title, title2, link, subtitle }: BigVideoSectionProps) {
  const theme = useTheme();
  return (
    <SectionBody>
      <Box display={{ xs: 'inherit', md: 'none' }} sx={{ pb: { xs: '0px', md: '80px' } }}>
        <Typography textAlign="center" color="text.secondary" fontSize={{ xs: '38px', md: "50px" }} lineHeight={1} pb={3}>{`${title} ${title2}`}</Typography>
        <Typography textAlign="center" color="text.secondary" fontSize={"20px"} lineHeight={1}>{subtitle}</Typography>
      </Box>

      <Box display={{ xs: 'none', md: 'inherit' }} sx={{ pb: { xs: '0px', md: '80px' } }}>
        <Typography textAlign="center" color="text.secondary" fontSize={{ xs: '38px', md: "50px" }} lineHeight={1} pb={3}>{title}</Typography>
        <Typography textAlign="center" color="text.secondary" fontSize={{ xs: '38px', md: "50px" }} lineHeight={1} pb={3}>{title2}</Typography>
        <Typography textAlign="center" color="text.secondary" fontSize={"20px"} lineHeight={1}>{subtitle}</Typography>
      </Box>

      <Box position="relative" sx={{
        width: '100%',
        height: 'calc(56.25vw)',
        maxHeight: '788.28px',
        mb: { xs: '30px', md: '100px' }
      }}>
        <iframe src={`${link}?autoplay=0&loop=0&muted=0`} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }} frameBorder="0" allowFullScreen></iframe>
      </Box>
    </SectionBody>
  )
}
