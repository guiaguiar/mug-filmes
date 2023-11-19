"use client"
import imageBanner from '@/assets/side-projects/vila-das-artes/VILADASARTES_0.jpg';
import Footer from '@/components/molecules/Footer';
import Menu from '@/components/molecules/Menu';
import BigVideoSection from '@/components/organisms/BigVideoSection';
import Images4Section from '@/components/organisms/Images4Section';
import ProjectDescription from '@/components/organisms/ProjectDescription';
import ProjectHomeSection from '@/components/organisms/ProjectHomeSection';
import { Box, Typography, useTheme } from '@mui/material';

import images4section1 from '@/assets/side-projects/vila-das-artes/VILADASARTES_1.jpg';
import images4section2 from '@/assets/side-projects/vila-das-artes/VILADASARTES_2.jpg';
import images4section3 from '@/assets/side-projects/vila-das-artes/VILADASARTES_3.jpg';
import images4section4 from '@/assets/side-projects/vila-das-artes/VILADASARTES_4.jpg';
import images4section5 from '@/assets/side-projects/vila-das-artes/VILADASARTES_5.jpg';
import images4section6 from '@/assets/side-projects/vila-das-artes/VILADASARTES_6.jpg';
import images4section7 from '@/assets/side-projects/vila-das-artes/VILADASARTES_7.jpg';
import images4section8 from '@/assets/side-projects/vila-das-artes/VILADASARTES_8.jpg';
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
        imgPosition="50% 40%"
        title='Vila das Artes'
        subtitle='Documentário'
        year="2022"
        descriptionComponent={
          <Typography
            color={theme.palette.text.secondary}
            fontSize={{ xs: '16', md: "18px" }}
          >
            A <span>Vila das Artes</span> nasce a partir da colaboração de artistas, gestores e pesquisadores dos campos da dança e do audiovisual. Este encontro resulta na criação de um espaço de formação artística interdisciplinar, orientado pelas necessidades da sociedade civil. O documentário busca resgatar essa história, por meio de entrevistas com os principais protagonistas e agentes envolvidos no projeto.
          </Typography>
        }
      />
      <BigVideoSection link='https://player.vimeo.com/video/819651715' title="Vivemos de pequenas revoluções." title2='E essa pequena revolução é nossa.' />
      <ProjectDescription
        title1='O que'
        title2='Produzimos'
        descriptionComponent={
          <Typography
            color={theme.palette.text.secondary}
            fontSize={{ xs: '16', md: "18px" }}
            textAlign='justify'
          >
            Em parceria com o Instituto Cultural Iracema, desenvolvemos um projeto para celebrar os <span>15 anos de existência do Complexo Cultural Vila das Artes</span>. O objetivo principal foi destacar a trajetória desse espaço, abordando suas diversas áreas de atuação, como as escolas de circo, dança, audiovisual e teatro. Como parte desse projeto, produzimos teasers que refletem as diretrizes de cada escola, bem como um vídeo institucional que apresenta a história e os desafios enfrentados por esse espaço cultural gerido pela Prefeitura de Fortaleza.
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
              fontSize={{ xs: '16', md: "18px" }}
            >
              De quinze anos pra cá a Vila deixou
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              de ser semente para se tornar esse lugar de plantio.
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              Uma terra compartilhada, onde podemos semear utopias,
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              ressignificar memórias, partilhar afetos, pensamentos e
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              ideias de mundo, que pouco a pouco, se
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              enraízam profundamente dentro de nós.
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              Abrem espaço para novos caminhos,
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
            >
              olhares e perspectivas.
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
              fontSize={{ xs: '16', md: "18px" }}
              textAlign='justify'
            >
              “Independente da vontade do poder público, a história da Vila das Artes é marcada como um lugar de encontro. Nesse sentido, ela passa a ser ocupada e esse processo de ocupação é a própria trajetória do Complexo Cultural Vila das Artes.”
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize={{ xs: '16', md: "18px" }}
              fontWeight={700}
            >
              Lenildo Gomes, Gestor Cultural
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
