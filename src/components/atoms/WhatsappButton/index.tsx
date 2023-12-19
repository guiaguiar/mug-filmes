"use client"
import whatsappLogo from '@/assets/whatsapp-logo.svg';
import { Box, useTheme } from "@mui/material";
import Image from 'next/image';

const WhatsappButton = () => {
  const theme = useTheme();

  return (
    <Box
      onClick={() => window.open('https://api.whatsapp.com/send/?phone=5511981240817&text&type=phone_number&app_absent=0')}
      sx={{
        height:  '50px',
        width: '50px',
        position: 'fixed',
        right: 16,
        bottom: 16,
        cursor: 'pointer',
        zIndex: 30000,
        fontSize: '16px',
        transition: '0.2s',
        ':hover': {
          color: theme.palette.text.primary,
          height: '60px',
          width: '60px',
          transition: '0.2s'
        }
      }}
    >
      <Image src={whatsappLogo} fill alt="" style={{ objectFit: 'fill', objectPosition: 'center' }} />
    </Box>
  )
}

export default WhatsappButton;