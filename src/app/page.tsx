'use client'
import { useCallback, useMemo, useState } from "react";
import CreditCard from "@/components/Steps/CreditCard";
import Payment from "@/components/Steps/Payment";
import PaymentMethod from "@/components/Steps/PaymentMethod";
import { Wrapper } from "@/components/styles";
import { paymentData } from "@/consts/paymentData";

export type Data = typeof paymentData & { method?: { value: number, id: number, quantity: number } };
export default function Home() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<Data>(paymentData)

  const handleGoBack = useCallback(() => {
    setStep(state => state - 1)
  }, [])

  const handleFinishStep = useCallback((newData: object) => {
    setData(state => ({ ...state, ...newData }))
    setStep(state => state + 1)
  }, [])

  const subPages = useMemo(() => {
    const defaultProps = {
      data,
      handleFinishStep,
      handleGoBack,
    }

    return [
      <PaymentMethod key="subpage-1" {...defaultProps} />,
      <Payment key="subpage-2" {...defaultProps} />,
      <CreditCard key="subpage-3" {...defaultProps} />
    ]
  }, [data, handleFinishStep, handleGoBack])

  return (
    <Wrapper>
      {subPages[step]}
    </Wrapper>
  );
}
