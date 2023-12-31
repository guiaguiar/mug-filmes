import ProjectCard from '@/components/atoms/ProjectCard';
import { Box, Grid, useTheme } from '@mui/material';

import image1 from '@/assets/projects-card-images/1.jpg';
import image3 from '@/assets/projects-card-images/3.jpg';
import image4 from '@/assets/projects-card-images/4.jpg';
import image5 from '@/assets/projects-card-images/5.jpg';
import image6 from '@/assets/projects-card-images/6.jpg';
import image2 from '@/assets/side-projects/zona-de-criacao/1.jpg';
import SectionBodyFullScreen from '@/components/atoms/SectionBodyFullScreen';




const images = [
  {
    title: 'Sanit Engenharia',
    image: image1,
    url: 'sanit-engenharia'
  },
  {
    title: 'Zona de Criação',
    image: image2,
    url: 'zona-de-criacao'
  },
  {
    title: 'Renato Roseno',
    image: image3,
    url: 'renato-roseno'
  }, 
  {
    title: 'Vila das Artes',
    image: image4,
    url: 'vila-das-artes'
  },
  {
    title: 'UNAIDS',
    image: image5,
    url: 'unaids'
  },
  {
    title: 'Enquanto Acaba',
    image: image6,
    url: 'enquanto-acaba'
  }
]

export default function HomeSection3() {
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
      <SectionBodyFullScreen>
        <Grid container>
          {images.map((item, i) => {
            return <ProjectCard title={item.title} url={item.url} key={i} imageName={item.image} />;
          })}
        </Grid>
      </SectionBodyFullScreen>
    </Box>
  )
}
