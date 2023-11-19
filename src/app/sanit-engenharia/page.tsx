"use client"
import imageBanner from '@/assets/side-projects/sanit-engenharia/SANIT_0.jpg';
import Footer from '@/components/molecules/Footer';
import Menu from '@/components/molecules/Menu';
import BigVideoSection from '@/components/organisms/BigVideoSection';
import Images4Section from '@/components/organisms/Images4Section';
import ProjectDescription from '@/components/organisms/ProjectDescription';
import ProjectHomeSection from '@/components/organisms/ProjectHomeSection';
import { Box, Typography, useTheme } from '@mui/material';

import images4section1 from '@/assets/side-projects/sanit-engenharia/SANIT_1.jpg';
import images4section2 from '@/assets/side-projects/sanit-engenharia/SANIT_2.jpg';
import images4section3 from '@/assets/side-projects/sanit-engenharia/SANIT_3.jpg';
import images4section4 from '@/assets/side-projects/sanit-engenharia/SANIT_4.jpg';
import images4section5 from '@/assets/side-projects/sanit-engenharia/SANIT_5.jpg';
import images4section6 from '@/assets/side-projects/sanit-engenharia/SANIT_6.jpg';
import images4section7 from '@/assets/side-projects/sanit-engenharia/SANIT_7.jpg';
import images4section8 from '@/assets/side-projects/sanit-engenharia/SANIT_8.jpg';
import ProjectsList from '@/components/organisms/ProjectsList';

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        scrollBehavior: 'smooth',
        overscrollBehaviorY: 'smooth',
        height: '100%',
        position: 'relative',
        pt: '111px'
      }}
    >
      <Menu />
      <ProjectHomeSection
        img={imageBanner}
        imgPosition="50% 50%"
        title='SANIT ENGENHARIA'
        subtitle='Institucional'
        year="2022"
        descriptionComponent={
          <Typography
            color={theme.palette.text.secondary}
            fontSize="18px"
          >
            A <span>Sanit Engenharia</span>, em parceria com o Consórcio Oeste, está realizando uma recuperação de rede de esgoto na Avenida Leste Oeste, em Fortaleza, Ceará. A empresa, pioneira no Brasil, utiliza métodos não destrutivos na realização de obras de alta complexidade, melhorando seu desempenho e reduzindo transtornos à população do entorno.
          </Typography>
        }
      />
      <BigVideoSection link='https://player.vimeo.com/video/861031218' title="Tecnologia em prol do bem-estar social." />
      <ProjectDescription
        title1='O que'
        title2='Produzimos'
        descriptionComponent={
          <Typography
            color={theme.palette.text.secondary}
            fontSize="18px"
            textAlign='justify'
          >
            O filme institucional surge a partir do processo de documentação da obra de recuperação do Interceptor Oeste em Fortaleza. O objetivo principal desse trabalho é <span>evidenciar a inovação das empresas envolvidas no projeto, reforçando os aspectos ambientais, tecnológicos e sociais que permeiam essa empreitada de longo prazo</span>. Durante a produção, registramos as principais etapas de recuperação, além de conduzir entrevistas com os técnicos responsáveis e moradores locais. O filme oferece uma visão abrangente dessa importante iniciativa, destacando sua relevância e os impactos positivos para a comunidade e o meio ambiente.
          </Typography>}
      />

      <Images4Section imgArray={[images4section1, images4section2, images4section3, images4section4]} />

      <ProjectDescription
        title1='Loc-Off'
        descriptionComponent={
          <>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              O mundo está mudando.
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              Cidades são construídas cada vez mais rápido,
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              de forma sustentável e segura.
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              Na área da engenharia, tecnologias para
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              aumento da capacidade produtiva e
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              preservação do meio ambiente,
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              foram aprimoradas através da
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              fontSize="18px"
              pb={2}
            >
              robótica e da engenharia
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              da computação.
            </Typography>
          </>
        }
      />

      <ProjectDescription
        title1='Personagem'
        descriptionComponent={
          <>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
              textAlign='justify'
            >
              “Buscamos, por meio de nossas obras, promover maior qualidade nas redes de água e esgoto do país, com ética, responsabilidade social e prazer em atender.”
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
              fontWeight={700}
            >
              Antônio Felipe, Auxiliar de Obra
            </Typography>
          </>
        }
      />

      <Images4Section emphasis imgArray={[images4section5, images4section6, images4section7, images4section8]} />

      <ProjectsList />

      <Footer />


    </Box>
  )
}
