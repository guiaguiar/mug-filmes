"use client"
import imageBanner from '@/assets/side-projects/zona-de-criacao/1.jpg';
import Menu from '@/components/molecules/Menu';
import BigVideoSection from '@/components/organisms/BigVideoSection';
import ProjectDescription from '@/components/organisms/ProjectDescription';
import ProjectHomeSection from '@/components/organisms/ProjectHomeSection';
import { Box, Typography, useTheme } from '@mui/material';

import Footer from '@/components/molecules/Footer';
import ProjectsList from '@/components/organisms/ProjectsList';
import VideosSection from '@/components/organisms/VideosSection';

export default function ProjectZonaDeCriacao() {
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
        title='ZONA DE CRIAÇÃO'
        subtitle='Websérie'
        year="2022"
        descriptionComponent={
          <Typography
            color={theme.palette.text.secondary}
            fontSize="18px"
          >
            Webserie antológica composta por oito episódios, nos quais <span>artistas cearenses apresentam narrativas que exploram diferentes formas de expressão, como literatura, música, teatro, circo e dança</span>. A série oferece uma imersão nos territórios periféricos de Fortaleza, evidenciando a diversidade da produção artística local em uma perspectiva de experimentação de linguagem.
          </Typography>
        }
      />
      <BigVideoSection link='https://player.vimeo.com/video/819689888' title="Uma trama plural que explora os limites do território da linguagem." />
      <ProjectDescription
        title1='O que'
        title2='Produzimos'
        descriptionComponent={
          <Typography
            color={theme.palette.text.secondary}
            fontSize="18px"
          >
            Em parceria com o Porto Dragão, equipamento cultural gerido pelo Instituto Dragão do Mar, <strong>produzimos oito episódios da Websérie Zona de Criação</strong>, que atualmente está em sua quarta temporada. Neste projeto, contamos com uma equipe interdisciplinar composta por consultoria de acessibilidade, consultoria de roteiro e produtores culturais. A partir do processo de uma residência criativa, produzimos em conjunto com os artistas convidados filmes originais que são disponibilizados ao público em geral. O objetivo do trabalho é proporcionar uma experiência diversificada, explorando diversos temas e formas de expressão artística.
          </Typography>}
      />

      <VideosSection videoCodeArray={[`/819695204`, `/819696733`, `/819698025`, `/819696047`, `/819698062`, `/819698165`]} />

      <ProjectsList />

      <Footer />


    </Box>
  )
}
