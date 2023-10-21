import imageBanner from '@/assets/side-projects/Vila das Artes/VILADASARTES_0.jpg';
import Footer from '@/components/molecules/Footer';
import Menu from '@/components/molecules/Menu';
import BigVideoSession from '@/components/organisms/BigVideoSession';
import ProjectDescription from '@/components/organisms/ProjectDescription';
import ProjectHomeSection from '@/components/organisms/ProjectHomeSection';
import { Box, Typography, useTheme } from '@mui/material';

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
            fontSize="18px"
          >
            A <span>Vila das Artes</span> nasce a partir da colaboração de artistas, gestores e pesquisadores dos campos da dança e do audiovisual. Este encontro resulta na criação de um espaço de formação artística interdisciplinar, orientado pelas necessidades da sociedade civil. O documentário busca resgatar essa história, por meio de entrevistas com os principais protagonistas e agentes envolvidos no projeto.
          </Typography>
        }
      />
      <BigVideoSession title="Vivemos de pequenas revoluções." title2='E essa pequena revolução é nossa.' />
      <ProjectDescription descriptionComponent={<Typography
        color={theme.palette.text.secondary}
        fontSize="18px"
      >
        Em parceria com o Instituto Cultural Iracema, desenvolvemos um projeto para celebrar os <span>15 anos de existência do Complexo Cultural Vila das Artes</span>. O objetivo principal foi destacar a trajetória desse espaço, abordando suas diversas áreas de atuação, como as escolas de circo, dança, audiovisual e teatro. Como parte desse projeto, produzimos teasers que refletem as diretrizes de cada escola, bem como um vídeo institucional que apresenta a história e os desafios enfrentados por esse espaço cultural gerido pela Prefeitura de Fortaleza.
      </Typography>} />
      <Footer />
    </Box>
  )
}
