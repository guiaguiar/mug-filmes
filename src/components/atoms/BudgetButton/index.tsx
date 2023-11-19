"use client"
import CustomButton from "../CustomButton";

interface BudgetButtonProps {
  small?: boolean;
}

const BudgetButton = ({ small }: BudgetButtonProps) => {
  if (small) {
    return <CustomButton label='Faça seu orçamento' height='32px' fontSize='16px' fontWeight={300} />
  }
  return (
    <CustomButton label='Faça seu orçamento' height='48px' fontSize='23px' fontWeight={300} />
  )
}

export default BudgetButton;