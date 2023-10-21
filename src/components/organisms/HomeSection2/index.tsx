import CustomButton from '@/components/atoms/CustomButton';
import IconCard from '@/components/atoms/IconCard';
import SectionBody from '@/components/atoms/SectionBody';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import patternImage from '../../../assets/home/pattern.png';

export default function HomeSection2() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'secondary.main',
        display: "flex",
        justifyContent: 'center',
        '.alo': {
          backgroundImage: `url(${patternImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-x',
          maskRepeat: 'repeat-x'
          // maxWidth: '1000px',
        },
        width: '100%',

      }}
    >
      <Image className='alo' quality={100} src={patternImage} fill  style={{ zIndex: 1, objectFit: 'scale-down', backgroundRepeat: 'repeat-x', maskRepeat: 'repeat-x' }} alt="" />
      <SectionBody>

        <Grid container pb="180px">
          <Box>
            <Typography
              fontWeight={300}
              style={{
                color: theme.palette.text.secondary,
                fontSize: '50px',
                paddingBottom: 40,
                textTransform: 'uppercase',
              }}>
              QUEM SOMOS
            </Typography>

            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '20px'
            }}>

              <Typography fontSize={"18px"} color="text.secondary">
                Na MUG, <strong>somos apaixonados pela arte de contar histórias em movimento</strong>. Inspirados pela icônica obra &quot;The Horse in Motion&quot;, de Muybridge, acreditamos no audiovisual como ferramenta de imaginação e produção de conhecimento.
              </Typography>
              <Typography fontSize={"18px"} color="text.secondary">
                Com um olhar que atravessa horizontes, criamos narrativas que inspiram transformações. Somos uma produtora que acredita na pluralidade da arte e da cultura brasileira, traduzida por nós em cor, som e movimento.
              </Typography>
              <Typography fontSize={"18px"} color="text.secondary" pb="35px">
                Desenvolvemos conteúdos de relevância, em parceria com empresas, instituições, editais de incentivo público e privado. Atuamos entre São Paulo (SP) e Fortaleza (CE), produzindo filmes, institucionais, documentários e webséries.
              </Typography>
              <Typography fontSize={"18px"} color="text.secondary" pb="35px">
                Junte-se a nós, <strong>inspire-se e deixe sua marca no mundo com a MUG Filmes</strong>.
              </Typography>
            </Box>
          </Box>

          <Grid container item display="flex" justifyContent="center">
            <IconCard title="INSTITUCIONAL" description="Transmita a essência do seu negócio e se destaque no mercado." />
            <IconCard title="DOCUMENTÁRIO" description="Conte histórias relevantes e inspire transformações com seu projeto." />
            <IconCard title="WEBSÉRIE" description="Mergulhe em um universo plural por meio de conteúdos originais." />
            <IconCard title="CURTA-METRAGEM" description="Explore perspectivas e emoções em narrativas autorais." />
          </Grid>

          <Grid item display="flex" justifyContent="center" xs={12}>
            <CustomButton label='Entre em contato' />
          </Grid>

        </Grid>
      </SectionBody>
    </Box>
  )
}
