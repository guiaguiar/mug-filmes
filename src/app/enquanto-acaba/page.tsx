"use client"
import imageBanner from '@/assets/side-projects/enquanto-acaba/ENQUANTOACABA_0.jpg';
import Footer from '@/components/molecules/Footer';
import Menu from '@/components/molecules/Menu';
import BigVideoSection from '@/components/organisms/BigVideoSection';
import Images4Section from '@/components/organisms/Images4Section';
import ProjectDescription from '@/components/organisms/ProjectDescription';
import ProjectHomeSection from '@/components/organisms/ProjectHomeSection';
import { Box, Typography, useTheme } from '@mui/material';

import images4section1 from '@/assets/side-projects/enquanto-acaba/ENQUANTOACABA_1.jpeg';
import images4section2 from '@/assets/side-projects/enquanto-acaba/ENQUANTOACABA_2.jpg';
import images4section3 from '@/assets/side-projects/enquanto-acaba/ENQUANTOACABA_3.jpg';
import images4section4 from '@/assets/side-projects/enquanto-acaba/ENQUANTOACABA_4.jpeg';
import images4section5 from '@/assets/side-projects/enquanto-acaba/ENQUANTOACABA_5.jpg';
import images4section6 from '@/assets/side-projects/enquanto-acaba/ENQUANTOACABA_6.jpg';
import images4section7 from '@/assets/side-projects/enquanto-acaba/ENQUANTOACABA_7.jpg';
import images4section8 from '@/assets/side-projects/enquanto-acaba/ENQUANTOACABA_8.jpg';
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
        title='ENQUANTO ACABA'
        subtitle='Curta-Metragem'
        year="2023"
        descriptionComponent={
          <Typography
            color={theme.palette.text.secondary}
            fontSize={{ xs: '16', md: "18px" }}
          >
            Em uma firma de advocacia especializada em partilha de bens, Anna (35) se arrasta no tempo. Soterrada em meio aos obituários e objetos deixados para trás, desenvolve uma relação de codependência com essas memórias abandonadas, das quais se torna íntima. Tudo ao redor parece desmoronar e ruir, inclusive Anna, que vive uma vida disfuncional entre a monotonia árida do seu ambiente de trabalho e as longas jornadas de trem e a pé, nas quais atravessa a cidade.
          </Typography>
        }
      />
      <BigVideoSection link='https://player.vimeo.com/video/ ' title="Como inventar uma memória com os restos?" />
      <ProjectDescription
        title1='O que'
        title2='Produzimos'
        descriptionComponent={
          <Typography
            color={theme.palette.text.secondary}
            fontSize={{ xs: '16', md: "18px" }}
            textAlign='justify'
          >
           Consiste em um <span>projeto de curta-metragem de ficção, com duração de 30 minutos</span>, filmado em Fortaleza, com equipe local, roteiro e direção assinada por Lua Alencar, realizador e sócio-proprietário da Mug Filmes. A obra tem como mote suscitar reflexões e metáforas sobre efemeridade e esquecimento, do ponto de vista da vida solitária da personagem Anna, que trabalha em uma firma de advocacia, escrevendo obituários e inventariando memórias de pessoas mortas.
          </Typography>}
      />

      <Images4Section imgArray={[images4section1, images4section2, images4section3, images4section4]} />

      
      <ProjectDescription
        title1='Diálogo'
        descriptionComponent={
          <>
            <Typography
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              ANNA
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              - O que são essas imagens?
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              NORMA
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              - São memórias. Estou tentando recriá-las.
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              ANNA
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              - Parece que você tá perdendo essa daqui.
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
