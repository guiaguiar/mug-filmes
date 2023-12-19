"use client"
import { Box, Grid, Typography } from '@mui/material';
import { useWindowSize } from "@uidotdev/usehooks";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IconCardProps {
  title?: string;
  subtitle?: string;
  url: string;
  imageName: any;
}

const ProjectCard: React.FC<IconCardProps> = ({ title, imageName, url, subtitle }) => {
  const [hover, setHover] = useState<boolean>(false);
  const router = useRouter();
  const size = useWindowSize();

  useEffect(() => {
    if (size.width && size.width < 764) {
      setHover(true);
    }else{
      setHover(false);
    }
  }, [size]);

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={6}
    >
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => router.push(url)}
        sx={{
          position: 'relative',
          minHeight: { xs: '300px', sm: '400px', md: '300px', lg: '330px', xl: '430px' },
          height: '100%',
          overflow: 'hidden',
          cursor: 'pointer'
        }}>
        <Box
          sx={{
            height: '100%',
            transform: hover ? 'scale(1.07)' : 0,
            position: 'absolute',
            width: '100%',
            minWidth: '100%',
            transition: 'transform 1s ease 0s',
            margin: '0 auto'
          }}
        >
          <Box
            position="absolute"
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: `rgba(16, 16, 16, 0.60)`,
              zIndex: 3000,
              opacity: hover ? '1' : '0',
              transition: '0.7s',
              display: "flex",
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography color="text.primary" fontSize={"30px"} fontWeight={700}>{title}</Typography>
            <Typography color="text.primary" fontSize={"20px"} fontWeight={300}>{subtitle}</Typography>
          </Box>
          <Image src={imageName} fill alt="" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </Box>
      </Box>
    </Grid>
  )
}

export default ProjectCard;