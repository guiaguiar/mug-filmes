
interface ButtonProps {
  children?: string;
  size: string;
  color: string;
}

const CustomTypography: React.FC<ButtonProps> = ({ children, size, color}) => {
  
  return (
    <p style={{
      color: color,
      fontSize: size
    }}>
      {children}
    </p>
  )
}

export default CustomTypography;