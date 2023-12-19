import IconCard from '@/components/atoms/IconCard';
import SectionBody from '@/components/atoms/SectionBody';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import patternImage from '../../../assets/home/MUG_Pattern.svg';
import grafismoRight from '../../../assets/home/grafismo-right.svg';


import logo1 from '@/assets/logos/1.png';
import logo10 from '@/assets/logos/10.png';
import logo11 from '@/assets/logos/11.png';
import logo12 from '@/assets/logos/12.png';
import logo13 from '@/assets/logos/13.png';
import logo2 from '@/assets/logos/2.png';
import logo3 from '@/assets/logos/3.png';
import logo4 from '@/assets/logos/4.png';
import logo5 from '@/assets/logos/5.png';
import logo6 from '@/assets/logos/6.png';
import logo7 from '@/assets/logos/7.png';
import logo8 from '@/assets/logos/8.png';
import logo9 from '@/assets/logos/9.png';
import BudgetButton from '@/components/atoms/BudgetButton';



// import inst1 from '@/assets/gif-icons/movies/1.gif';
// import inst1static from '@/assets/gif-icons/movies/1-static.png';
// import inst2 from '@/assets/gif-icons/movies/2.gif';
// import inst2static from '@/assets/gif-icons/movies/2-static.png';


export default function HomeSection2() {
  const theme = useTheme();

  return (
    <>
      <Box
        id="about"
        sx={{
          position: 'relative',
          display: "flex",
          justifyContent: 'center',
          width: '100%',
          pt: { xs: '60px', md: '100px' },
          // backgroundColor: theme.palette.secondary.main,
          zIndex: 0
        }}
      >
        <Image src={patternImage} fill style={{ zIndex: -12, objectFit: 'cover', opacity: 0.4 }} alt="" />

        <Box height={"112px"} width="3600px" position={'absolute'} zIndex={2000} display={{ xs: 'none', sm: 'initial' }} marginLeft={{ xs: '-3500px', sm: '-3700px', lg: '-3316px' }}>
          <Image src={grafismoRight} fill style={{ zIndex: 30000, objectFit: 'cover', alignSelf: 'end' }} alt="" />
        </Box>
        <SectionBody>
          <Grid container pb={{ xs: '80px', md: "140px" }} zIndex={2000}>
            <Grid item xs={12}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'start', sm: 'end' },
              }}
            >

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  span: {
                    fontWeight: 700
                  },
                  pr: { xs: 0, md: 10 },
                  pt: 2.5,
                  height: '100px'
                }}
              >
                <Typography
                  fontWeight={300}
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: { xs: '18px', md: '22px' },
                  }}
                >
                  Do papel para as telas,
                </Typography>
                <Typography
                  fontWeight={300}
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: { xs: '18px', md: '22px' },
                    paddingBottom: 164,
                    zIndex: -1

                  }}>
                  seu <span>plano em movimento</span>.
                </Typography>

              </Box>
            </Grid>

            <Box pt={{ xs: 2, md: 8 }}>
              <Typography
                fontWeight={300}
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: { xs: '42px', md: '50px' },
                  paddingBottom: '40px',
                  textTransform: 'uppercase',
                }}>
                QUEM SOMOS
              </Typography>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '20px'
              }}>

                <Typography fontSize={{ xs: '16px', md: "18px" }} color="text.secondary">
                  Na MUG, <strong>somos apaixonados pela arte de contar histórias em movimento</strong>. Inspirados pela icônica obra &quot;The Horse in Motion&quot;, de Muybridge, acreditamos no audiovisual como ferramenta de imaginação e produção de conhecimento.
                </Typography>
                <Typography fontSize={{ xs: '16px', md: "18px" }} color="text.secondary">
                  Com um olhar que atravessa horizontes, criamos narrativas que inspiram transformações. Somos uma produtora que acredita na pluralidade da arte e da cultura brasileira, traduzida por nós em cor, som e movimento.
                </Typography>
                <Typography fontSize={{ xs: '16px', md: "18px" }} color="text.secondary" pb="35px">
                  Desenvolvemos conteúdos de relevância, em parceria com empresas, instituições, editais de incentivo público e privado. Atuamos entre São Paulo (SP) e Fortaleza (CE), produzindo filmes, institucionais, documentários e webséries.
                </Typography>
                <Typography fontSize={{ xs: '16px', md: "18px" }} color="text.secondary" pb="35px">
                  Junte-se a nós, <strong>inspire-se e deixe sua marca no mundo com a MUG Filmes</strong>.
                </Typography>
              </Box>
            </Box>

            <Grid container item display="flex" justifyContent="center" pt={6} pb={{xs: 6, md: 12}}>
              <IconCard url='/sanit-engenharia' title="INSTITUCIONAL" description="Transmita a essência do seu negócio e se destaque no mercado." />
              <IconCard url='/vila-das-artes' title="DOCUMENTÁRIO" description="Conte histórias relevantes e inspire transformações com seu projeto." />
              <IconCard url='/zona-de-criacao' title="WEBSÉRIE" description="Mergulhe em um universo plural por meio de conteúdos originais." />
              <IconCard url='/enquanto-acaba' title="CURTA-METRAGEM" description="Explore perspectivas e emoções em narrativas autorais." />
            </Grid>

            <Grid item display="flex" justifyContent="center" xs={12} zIndex={2000000000}>
              <Box display={{ xs: 'initial', md: 'none' }}>
                <BudgetButton small />
              </Box>
              <Box display={{ xs: 'none', md: 'initial' }}>
                <BudgetButton />
              </Box>
            </Grid>

          </Grid>
        </SectionBody>

      </Box>
      <Box>
        <SectionBody backgroundColor={theme.palette.primary.main}>
          <Typography pt={{ xs: "40px", md: "82px" }} pb={{ xs: "40px", md: "82px" }} textTransform={'uppercase'} fontSize={{ xs: '38px', md: "50px" }} color="text.primary" fontWeight={300}>
            Nossos Parceiros
          </Typography>
          <Box pb="127px" display={{ xs: 'none', md: "flex" }} flexWrap="wrap" columnGap={4} rowGap={6} alignItems={"center"} justifyContent={"center"}>
            <Image src={logo1} alt="" width={127} height={46} />
            <Image src={logo2} alt="" width={174} height={68} />
            <Image src={logo3} alt="" width={104} height={61} />
            <Image src={logo4} alt="" width={174} height={44} />
            <Image src={logo5} alt="" width={169} height={59} />
            <Image src={logo6} alt="" width={140} height={60} />
            <Image src={logo7} alt="" width={131} height={31} />
            <Image src={logo8} alt="" width={158} height={35} />
            <Image src={logo9} alt="" width={96} height={50} />
            <Image src={logo10} alt="" width={145} height={51} />
            <Image src={logo11} alt="" width={118} height={51} />
            <Image src={logo12} alt="" width={188} height={60} />
            <Image src={logo13} alt="" width={106} height={53} />
          </Box>
          <Box pb="80px" display={{ xs: 'flex', md: "none" }} flexWrap="wrap" columnGap={2} rowGap={2} alignItems={"center"} justifyContent={"center"}>
            <Image src={logo1} alt="" width={127} height={46} style={{ scale: '0.6' }} />
            <Image src={logo2} alt="" width={174} height={68} style={{ scale: '0.6' }} />
            <Image src={logo3} alt="" width={104} height={61} style={{ scale: '0.6' }} />
            <Image src={logo4} alt="" width={174} height={44} style={{ scale: '0.6' }} />
            <Image src={logo5} alt="" width={169} height={59} style={{ scale: '0.6' }} />
            <Image src={logo6} alt="" width={140} height={60} style={{ scale: '0.6' }} />
            <Image src={logo7} alt="" width={131} height={31} style={{ scale: '0.6' }} />
            <Image src={logo8} alt="" width={158} height={35} style={{ scale: '0.6' }} />
            <Image src={logo9} alt="" width={96} height={50} style={{ scale: '0.6' }} />
            <Image src={logo10} alt="" width={145} height={51} style={{ scale: '0.6' }} />
            <Image src={logo11} alt="" width={118} height={51} style={{ scale: '0.6' }} />
            <Image src={logo12} alt="" width={188} height={60} style={{ scale: '0.6' }} />
            <Image src={logo13} alt="" width={106} height={53} style={{ scale: '0.6' }} />
          </Box>
        </SectionBody>
      </Box>
    </>
  )
}
