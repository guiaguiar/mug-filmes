import logo from '@/assets/brand/MUG_Branco.png';
import logoBlue from '@/assets/brand/MUG_Logo_Azul.png';
import logoWhite from '@/assets/brand/MUG_Logo_Branco.png';
import CustomButton from '@/components/atoms/CustomButton';
import SectionBody from '@/components/atoms/SectionBody';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, Fade, IconButton, Link, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface MenuProps {
  isHome?: boolean;
}

interface ListItemProps {
  title: string;
  url: string;
  pb?: string;
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
    title: 'Enquanto Acaba',
    url: 'enquanto-acaba'
  }
]

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Menu({ isHome }: MenuProps) {
  const router = useRouter();
  const theme = useTheme();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [state, setState] = React.useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };


  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState(true);
      };

  const ListItem = ({ title, url, pb }: ListItemProps) => {
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
          marginTop: title === 'SANIT Engenharia' ? '0px' : 0,
        }}
      >
        <Typography
          fontWeight={400}
          fontSize={"14px"}
          mb={pb || '19px'}
          color={theme.palette.secondary.main}
          sx={{
            ':hover': {
              fontWeight: 700,
              transition: '0.2s ease-out',
            }
          }}
        >
          {title}
        </Typography>
      </Link>
    )
  }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={() => setState(false)}
      onKeyDown={() => setState(false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

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
      <Box display={'flex'} position="relative" width={{ xs: "150px", md: "230px" }} minWidth={{ xs: "150px", md: "230px" }} alignItems={'center'} left={"44px"} onClick={() => router.push('/')} sx={{ cursor: isHome ? 'initial' : 'pointer', zIndex: 1 }}>
        {isHome ?
          <Image src={logoWhite} fill style={{ objectFit: 'contain' }} alt="" priority />
          :
          <Image src={logoBlue} fill style={{ objectFit: 'contain' }} alt="" priority />
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
            <Box
              position="relative"
              sx={{
                cursor: 'pointer',
                alignItems: 'center',
                display: 'flex',
              }}
              onClick={() => {
                if (isHome) {
                  document?.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                } else {
                  router.push('/#about')
                }
              }}
            >
              <Typography color={isHome ? "text.primary" : "text.secondary"} pt="8px">
                sobre
              </Typography>
            </Box>
            <Box
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              position="relative"
              sx={{
                cursor: 'default',
              }}
            >
              <Typography
                pl="19px"
                pt="8px"
                fontWeight={isDropdownVisible ? 700 : 400}
                sx={{
                  // backgroundColor: isDropdownVisible ? theme.palette.primary.main : 'transparent',
                  color: isHome || isDropdownVisible ? "text.primary" : "text.secondary",
                  border: 'none',
                  borderRadius: 0,
                  boxShadow: 'none',
                  width: '156px',
                  textTransform: 'none',
                  transition: '0.2s',
                  ':hover': {
                    backgroundColor: theme.palette.primary.main,
                    transition: '0.1s',
                    border: 'none',
                    boxShadow: 'none',
                    borderRadius: 0,
                  },
                }}
              >
                projetos

              </Typography>

              <Fade in={isDropdownVisible} timeout={200}>
                <Box
                  sx={{
                    background: theme.palette.primary.main,
                    boxShadow: ' 0px 10px 30px 0px rgba(82, 63, 105, 0.05)',
                    transition: 'none',
                    position: 'absolute',
                    width: '156px',
                    display: 'flex',
                    flexDirection: 'column',
                    pl: '19px',
                    top: 0
                  }}
                >
                  <Typography
                    pt="8px"
                    pb="8px"
                    fontWeight={isDropdownVisible ? 700 : 400}
                    sx={{
                      color: isHome || isDropdownVisible ? "text.primary" : "text.secondary",
                      border: 'none',
                      borderRadius: 0,
                      boxShadow: 'none',
                      width: '156px',
                      textTransform: 'none',
                      transition: '0.2s',
                      ':hover': {
                        transition: '0.1s',
                        border: 'none',
                        boxShadow: 'none',
                        borderRadius: 0,
                      },
                    }}
                  >
                    projetos

                  </Typography>
                  {projects.map(item => {
                    return <ListItem pb="8px" key={item.title} title={item.title} url={item.url} />
                  })}
                </Box>
              </Fade>



            </Box>
            {/* do not change for BudgetButton */}
            <CustomButton label='FAÇA SEU ORÇAMENTO' onClick={() => window.open('https://api.whatsapp.com/send/?phone=5511981240817&text&type=phone_number&app_absent=0')} />
          </Box>
          <Box display={{ xs: 'flex', lg: 'none' }} sx={{
            alignItems: 'center',

          }}>
            <IconButton
              sx={{
                svg: {
                  fill: isHome ? 'white' : theme.palette.primary.main
                }
              }}
              onClick={() => setState(true)}
              size='large'
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </SectionBody >
      <div>
        <React.Fragment key={1}>
          <Drawer
            anchor={'right'}
            open={state}
            onClose={() => setState(false)}
            sx={{
              zIndex: 30000,
            }}
          >
            <Box sx={{
              width: '230px',
              backgroundColor: theme.palette.primary.main,
              height: '100%',
              paddingLeft: '32px'
            }}>
              <Box
                position="relative"
                sx={{
                  cursor: 'pointer',
                  alignItems: 'center',
                  display: 'flex',
                  paddingTop: '16px'
                }}
                onClick={() => {
                  if (isHome) {
                    document?.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                    setState(false)
                  } else {
                    router.push('/#about')
                  }
                }}
              >
                <Typography fontWeight={700} color={"text.primary"} pt="8px" pb="16px">
                  Sobre
                </Typography>
              </Box>
              <Typography pb="16px" fontWeight={700} color={"text.primary"} pt="8px">
                Projetos
              </Typography>
              <Box pl="16px">
                {projects.map(item => {
                  return <ListItem pb="16px" key={item.title} title={item.title} url={item.url} />
                })}
              </Box>
              <Box
                position="relative"
                sx={{
                  cursor: 'pointer',
                  alignItems: 'center',
                  display: 'flex',
                }}
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5511981240817&text&type=phone_number&app_absent=0')}
              >
                <Typography fontWeight={700} color={"text.primary"} pt="8px" pb="16px">
                  Faça seu orçamento
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                cursor: 'pointer',
                pb: 4
              }}
              position={'relative'}
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              onClick={() => { router.push('/'); setState(false); }}
            >
              <Image src={logo} height={50} width={49} alt="" />
              <Typography pt={2} color="text.primary" fontSize={"12px"} fontWeight={400}>Mug Filmes 2023</Typography>
            </Box>
          </Drawer>
        </React.Fragment>
      </div>
    </Box >
  )
}
