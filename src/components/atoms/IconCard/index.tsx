import { Box, Grid, Typography } from '@mui/material';

interface IconCardProps {
  iconUrl?: string;
  title: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ iconUrl, title, description }) => {
  return (
    <Grid item xs={12} md={6} lg={3} sx={{
      height: '160px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Box sx={{
        position: 'relative',
        maxWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* <Image url={iconUrl} alt="" style={{ objectFit: 'cover', objectPosition: 'top left' }} /> */}
        <Typography color="text.secondary" fontSize={"25px"} textAlign={"center"}>{title}</Typography>
        <Typography color="text.secondary" fontSize={"16px"} textAlign={"center"}>{description}</Typography>
      </Box>
    </Grid>
  )
}

export default IconCard;