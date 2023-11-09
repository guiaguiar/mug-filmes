"use client"
import Footer from '@/components/molecules/Footer'
import Menu from '@/components/molecules/Menu'
import HomeSection1 from '@/components/organisms/HomeSection1'
import HomeSection2 from '@/components/organisms/HomeSection2'
import HomeSection3 from '@/components/organisms/HomeSection3'
import HomeSection4 from '@/components/organisms/HomeSection4'
import HomeSection5 from '@/components/organisms/HomeSection5'
import { Box } from '@mui/material'

export default function Home() {
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
      <Menu isHome />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <Footer />
    </Box>
  )
}
