"use client"
import imageBanner from '@/assets/side-projects/renato-roseno/RENATOROSENO_0.jpg';
import Menu from '@/components/molecules/Menu';
import BigVideoSection from '@/components/organisms/BigVideoSection';
import ProjectDescription from '@/components/organisms/ProjectDescription';
import ProjectHomeSection from '@/components/organisms/ProjectHomeSection';
import { Box, Typography, useTheme } from '@mui/material';

import Footer from '@/components/molecules/Footer';
import Images4Section from '@/components/organisms/Images4Section';
import ProjectsList from '@/components/organisms/ProjectsList';
import VideosSection from '@/components/organisms/VideosSection';

import images4section1 from '@/assets/side-projects/carrossel/2.jpg';
import images4section2 from '@/assets/side-projects/renato-roseno/RENATOROSENO_1.jpg';
import images4section3 from '@/assets/side-projects/renato-roseno/RENATOROSENO_2.jpg';
import images4section4 from '@/assets/side-projects/renato-roseno/RENATOROSENO_3.jpg';

export default function RenatoRoseno() {
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
        imgPosition="50% 30%"
        title='RENATO ROSENO'
        subtitle='Campanha Política'
        year="2022"
        descriptionComponent={
          <Typography
            color={theme.palette.text.secondary}
            fontSize="18px"
          >
            Por meio de uma campanha plural e marcante em nossa trajetória, reelegemos o <span>Deputado Estadual Renato Roseno</span> no Estado do Ceará. Os filmes abordam questões como terra e território, meio ambiente, diversidade cultural e políticas públicas para minorias sociais. Para isto, produzimos filmes com diversas linguagens e formatos como: documentário, vídeo publicitário e animação.
          </Typography>
        }
      />
      <BigVideoSection link='https://player.vimeo.com/video/819603942' title="“Se muito vale o que já foi feito, vale mais ainda o que será.”" subtitle='Guimarães Rosa' />
      <ProjectDescription
        title1='O que'
        title2='Produzimos'
        descriptionComponent={
          <Typography
            color={theme.palette.text.secondary}
            fontSize="18px"
          >
            Nesta campanha, em conjunto com a assessoria de comunicação do parlamentar, <span>realizamos o planejamento do conteúdo audiovisual de campanha para redes sociais e TV</span>. As peças realizadas eram desenvolvidas por uma equipe interdisciplinar, desde roteiro, direção de arte, direção de fotografia, motion graphics e pós-produção de áudio e colorização. Todo conteúdo foi desenvolvido a partir de temáticas sociais que fazem parte das diretrizes de atuação do candidato, que foi reeleito ao terceiro mandato no Estado do Ceará.
          </Typography>}
      />

      <VideosSection emphasis videoCodeArray={[`/819606308`, `/819603942`, `/819603780`, `/819606584`, `/819602802`]} />

      <ProjectDescription
        title1='Loc-Off'
        descriptionComponent={
          <>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              Somos uma gente de coragem, com força pra lutar.
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              E Renato tem sido parceiro presente nessa resistência
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              Fazemos uma política que se preocupa com o meio ambiente,
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              Que denuncia a desigualdade e o descaso com os mais pobres.
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              Nossa atuação coletiva tem gerado conquistas
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              que fazem a diferença na vida das pessoas.
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              Renato está nas mais diversas lutas, em tudo quanto é município.
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              fontSize="18px"
              pb={2}
            >
              Onde tem luta, tem Renato.
            </Typography>
            <Typography
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              O que não nos falta é <span>coragem pra lutar</span>.
            </Typography>
          </>
        }
      />

      <Images4Section emphasis imgArray={[images4section1, images4section2, images4section3, images4section4]} />

      <ProjectsList />

      <Footer />


    </Box>
  )
}
