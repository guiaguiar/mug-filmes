import { Box, useTheme } from '@mui/material';

interface SectionBodyProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const SectionBody: React.FC<SectionBodyProps> = ({
  children,
  backgroundColor,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: backgroundColor,
    }}>
      <Box
        sx={{
          position: 'relative',
          maxWidth: '1400px',
          width: '100%',
          paddingRight: {xs: '32px', md: '64px'},
          paddingLeft: {xs: '32px', md: '64px'}

        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default SectionBody;