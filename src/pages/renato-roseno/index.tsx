import Footer from '@/components/molecules/Footer'
import Menu from '@/components/molecules/Menu'
import ProjectHomeSection from '@/components/organisms/ProjectHomeSection'
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
      <Menu />
      <ProjectHomeSection />
      <Footer />
    </Box>
  )
}
