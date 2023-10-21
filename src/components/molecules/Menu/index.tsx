import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import logo from '@/assets/logo-menu.png';
import SectionBody from '@/components/atoms/SectionBody';

export default function Menu() {
  return (
    <Box sx={{
      // backgroundColor: "primary.main",
      height: 100,
      paddingTop: 3,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Box display={'flex'} alignItems={'center'} left={"44px"}>
        <Image src={logo} width={353} height={128} alt="" quality={100} priority />
      </Box>
      <SectionBody>
        <Box sx={{
          height: 32,
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%'
        }}>
          <Box sx={{
            display: {xs: 'none', lg: 'flex'},
            columnGap: '108px',
            alignItems: 'center',
          }}>
            <Typography color="text.secondary">sobre</Typography>
            <Typography color="text.secondary">projetos</Typography>
            <Typography color="text.secondary">contato</Typography>
          </Box>
        </Box>
      </SectionBody>

    </Box>
  )
}
