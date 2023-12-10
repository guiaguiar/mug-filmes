"use client"
import CustomButton from "../CustomButton";

interface BudgetButtonProps {
  small?: boolean;
}

const BudgetButton = ({ small }: BudgetButtonProps) => {
  if (small) {
    return <CustomButton label='Faça seu orçamento' height='32px' fontSize='16px' fontWeight={300} onClick={() => window.open('https://api.whatsapp.com/send/?phone=5511981240817&text&type=phone_number&app_absent=0')} />
  }
  return (
    <CustomButton label='Faça seu orçamento' height='48px' fontSize='23px' fontWeight={300} onClick={() => window.open('https://api.whatsapp.com/send/?phone=5511981240817&text&type=phone_number&app_absent=0')} />
  )
}

export default BudgetButton;