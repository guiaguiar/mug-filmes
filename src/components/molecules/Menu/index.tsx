import { Box, Link, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

import logo from '@/assets/brand/MUG_Logo_Azul.png';
import logoWhite from '@/assets/brand/MUG_Logo_Branco.png';
import CustomButton from '@/components/atoms/CustomButton';
import SectionBody from '@/components/atoms/SectionBody';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface MenuProps {
  isHome?: boolean;
}

interface ListItemProps {
  title: string;
  url: string;
}

const projects = [
  {
    title: 'SANIT Engenharia',
    url: 'sanit-engenharia'
  },
  {
    title: 'Zona de Criação',
    url: 'zona-de-criacao'
  },
  {
    title: 'Renato Roseno',
    url: 'renato-roseno'
  },
  {
    title: 'Vila das Artes',
    url: 'vila-das-artes'
  },
  {
    title: 'UNAIDS',
    url: 'unaids'
  },
  {
    title: 'Enquanto acaba',
    url: 'enquanto-acaba'
  }
]

export default function Menu({ isHome }: MenuProps) {
  const router = useRouter();
  const theme = useTheme();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const ListItem = ({ title, url }: ListItemProps) => {
    return (
      <Link
        onClick={() => {
          handleMouseLeave();
          router.push(url);
        }
        }
        sx={{
          width: '156px',
          cursor: 'pointer',
          textDecoration: 'none',
          paddingBottom: '12px',
          marginTop: title === 'SANIT Engenharia' ? '8px' : 0,
        }}
        pl="19px"
      >
        <Typography
          fontWeight={400}
          fontSize={"14px"}
          color={theme.palette.secondary.main}
        >
          {title}
        </Typography>
      </Link>
    )
  }

  return (
    <Box sx={{
      height: 100,
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 30000,
      top: 0,
      left: 0,
      right: 0,
    }}>
      <Box display={'flex'} position="relative" width={{ xs: "150px", md: "280px" }} minWidth={{ xs: "150px", md: "280px" }} alignItems={'center'} left={"44px"} onClick={() => router.push('/')} sx={{ cursor: isHome ? 'initial' : 'pointer', zIndex: 1 }}>
        {isHome ?
          <Image src={logoWhite} fill style={{ objectFit: 'contain' }} alt="" quality={100} priority />
          :
          <Image src={logo} fill style={{ objectFit: 'contain' }} alt="" quality={100} priority />
        }


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
            {!!isHome &&
              <Typography color={isHome ? "text.primary" : "text.secondary"}>
                sobre
              </Typography>
            }

            <Box
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              position="relative"
              sx={{
                cursor: 'default'
              }}
            >
              <Typography
                pl="19px"
                pt="8px"
                fontWeight={isDropdownVisible ? 700 : 400}
                sx={{
                  backgroundColor: isDropdownVisible ? theme.palette.primary.main : 'transparent',
                  color: isHome || isDropdownVisible ? "text.primary" : "text.secondary",
                  border: 'none',
                  borderRadius: 0,
                  boxShadow: 'none',
                  transition: 'none',
                  width: '156px',
                  textTransform: 'none',
                  ':hover': {
                    backgroundColor: theme.palette.primary.main,
                    border: 'none',
                    boxShadow: 'none',
                    borderRadius: 0,
                    transition: 'none'
                  },
                }}
              >
                projetos
              </Typography>
              {isDropdownVisible
                &&
                <Box
                  sx={{
                    background: theme.palette.primary.main,
                    boxShadow: ' 0px 10px 30px 0px rgba(82, 63, 105, 0.05)',
                    transition: 'all linear 0.3s',
                    position: 'absolute',
                    width: '156px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {projects.map(item => {
                    return <ListItem key={item.title} title={item.title} url={item.url} />
                  })}
                </Box>
              }
            </Box>
            <CustomButton label='FAÇA SEU ORÇAMENTO' />
          </Box>
        </Box>
      </SectionBody >
    </Box >
  )
}
