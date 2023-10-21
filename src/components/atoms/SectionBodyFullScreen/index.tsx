import { Box } from '@mui/material';
import { CSSProperties } from 'react';

interface SectionBodyProps {
  children: React.ReactNode;
  backgroundColor?: string;
  minHeight?: number;
  sx?: CSSProperties;
}

const SectionBodyFullScreen: React.FC<SectionBodyProps> = ({
  children,
  backgroundColor,
  minHeight,
  sx
}) => {
  return (
    <Box sx={{
      position: 'relative',
      display: 'flex',
      // alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: backgroundColor,
      minHeight: minHeight,
      ...sx
    }}>
      {children}
    </Box>
  )
}

export default SectionBodyFullScreen;