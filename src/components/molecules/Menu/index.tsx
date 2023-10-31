import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import logo from '@/assets/brand/MUG_Logo_Azul.png';
import CustomButton from '@/components/atoms/CustomButton';
import SectionBody from '@/components/atoms/SectionBody';

interface MenuProps {
  isHome?: boolean;
}

export default function Menu({ isHome }: MenuProps) {
  return (
    <Box sx={{
      height: 100,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Box display={'flex'} position="relative" width={{xs: "150px", md: "280px"}} minWidth={{xs: "150px", md: "280px"}} alignItems={'center'} left={"44px"}>
        <Image src={logo} fill style={{ objectFit: 'contain' }} alt="" quality={100} priority />
      </Box>
      <SectionBody>
        <Box sx={{
          height: 32,
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%'
        }}>
          <Box sx={{
            display: { xs: 'none', lg: 'flex' },
            columnGap: '108px',
            alignItems: 'center',
          }}>
            {!!isHome && <Typography color="text.secondary">sobre</Typography>}
            <Typography color="text.secondary">projetos</Typography>
            <CustomButton label='FAÇA SEU ORÇAMENTO' />
          </Box>
        </Box>
      </SectionBody>
    </Box>
  )
}
