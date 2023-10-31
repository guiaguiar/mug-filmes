import imageBanner from '@/assets/side-projects/unaids/UNAIDS_0.jpg';
import Footer from '@/components/molecules/Footer';
import Menu from '@/components/molecules/Menu';
import BigVideoSection from '@/components/organisms/BigVideoSection';
import Images4Section from '@/components/organisms/Images4Section';
import ProjectDescription from '@/components/organisms/ProjectDescription';
import ProjectHomeSection from '@/components/organisms/ProjectHomeSection';
import { Box, Typography, useTheme } from '@mui/material';

import images4section1 from '@/assets/side-projects/unaids/UNAIDS_1.jpg';
import images4section2 from '@/assets/side-projects/unaids/UNAIDS_2.jpg';
import images4section3 from '@/assets/side-projects/unaids/UNAIDS_3.jpg';
import images4section4 from '@/assets/side-projects/unaids/UNAIDS_4.jpg';
import images4section5 from '@/assets/side-projects/unaids/UNAIDS_5.jpg';
import images4section6 from '@/assets/side-projects/unaids/UNAIDS_6.jpg';
import images4section7 from '@/assets/side-projects/unaids/UNAIDS_7.jpg';
import images4section8 from '@/assets/side-projects/unaids/UNAIDS_8.jpg';
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
            Em 2022, a Rede Nacional de Pessoas Vivendo com HIV e AIDS no Ceará (RNP+ CE) desenvolveu o projeto “Pessoas Vivendo com HIV/AIDS e Gestores: Diálogos PositHIVos Para Melhorar os Indicadores”, contemplado pelo Edital Fast-Track Cities, do UNAIDS Brasil. O projeto teve como objetivo <span>contribuir na disseminação de informações, aumentar a vinculação e a adesão ao tratamento</span> antirretroviral, assim como viabilizar o Indetectável = Intransmissível.
          </Typography>
        }
      />
      <BigVideoSection link='https://player.vimeo.com/video/819679983' title="Contra o preconceito, juntos somos mais fortes." />
      <ProjectDescription
        title1='O que'
        title2='Produzimos'
        descriptionComponent={
          <Typography
            color={theme.palette.text.secondary}
            fontSize="18px"
          >
            Neste projeto, realizado em parceria com UNAIDS Brasil, ficamos responsável pela <span>captação e edição do material do Edital Fast Track Cities</span>. A partir de um roteiro idealizado pela própria organização, fizemos uma imersão na sede da Rede Nacional de Pessoas Vivendo com HIV (RNP) no Ceará. Na ocasião, captamos depoimentos e relatos que ajudam a contribuir com o combate ao preconceito, conscientizando a população sobre a importância da prevenção e orientando pessoas que possuem HIV na adesão ao tratamento.
          </Typography>}
      />

      <Images4Section imgArray={[images4section1, images4section2, images4section3, images4section4]} />

      
      <ProjectDescription
        title1='Personagem'
        descriptionComponent={
          <>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
            >
              “É uma luta de mais de 25 anos, que vem ajudando muitas pessoas, na qual eu sou também um dos contemplados com essa política da Rede Nacional de Pessoas Vivendo com HIV (RNP).”
            </Typography>
            <Typography
              pb={2}
              color={theme.palette.text.secondary}
              fontSize="18px"
              fontWeight={700}
            >
              Carlos Salomão, Ativista Social
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
