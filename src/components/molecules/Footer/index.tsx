import { Box, Typography } from '@mui/material';

import SectionBody from '@/components/atoms/SectionBody';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box sx={{
      backgroundColor: "primary.main",
      height: '399px'
    }}>
      <SectionBody>
        <Box sx={{
          height: 32,
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          pt: '86px'
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
          }}>
            <Typography color="text.primary" fontSize={"50px"} lineHeight={1} textTransform="uppercase">TRABALHE </Typography>
            <Typography color="text.primary" fontSize={"50px"} lineHeight={1} textTransform="uppercase">COM A GENTE</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
          }}>
            <Link href="" color="text.primary" style={{
              fontSize: '20px'
            }}>Instagram</Link>
            <Link href="" color="text.primary" style={{
              fontSize: '20px'
            }}>Vimeo</Link>
            <Link href="" color="text.primary" style={{
              fontSize: '20px'
            }}>Linkedin</Link>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
          }}>
            <Typography color="text.primary" fontSize={"20px"}>(11) 91234 5678</Typography>
            <Typography color="text.primary" fontSize={"20px"}>contato@mugfilmes.com.br</Typography>
          </Box>
        </Box>
      </SectionBody>
    </Box>
  )
}
