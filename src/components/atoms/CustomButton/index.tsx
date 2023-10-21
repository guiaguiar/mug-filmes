import { Button, useTheme } from "@mui/material";
import { useState } from "react";

interface ButtonProps {
  label?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ label }) => {
  const [hover, setHover] = useState<boolean>(false);
  const theme = useTheme();
  
  return (
    <Button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        height: '46px',
        borderRadius: '10px',
        border: `2px solid ${theme.palette.primary.main}`,
        fontSize: '24px',
        display: 'flex',
        paddingRight: 3,
        paddingLeft: 3,
        // ':hover': {
        //   backgroundColor: colors.orange,
        //   color: `${colors.black} !important`
        // }
      }}
    >
        {label}
    </Button>
  )
}

export default CustomButton;