'use client'
import { paymentData } from "@/consts/paymentData"
import { Box, Typography } from "@mui/material"
import { InstallmentComponent } from "../InstallmentComponent"
import { useEffect, useState } from "react"
import { calculateInterestRate } from "@/utils/calculateInterestRate"

const PaymentMethod: React.FC<{
  data: typeof paymentData
  handleFinishStep(data: object): void
}> = ({
  data,
  handleFinishStep
}) => {
    const [option, setOption] = useState<{ value?: number; id?: number, quantity?: number }>({});
    const [bestOption, setBestOption] = useState<{ id?: number; interestRate: number } | null>(null);

    useEffect(() => {
      let bestOption = null;
      let lowestInterestRate = Infinity;

      paymentData.installments.forEach((item, index) => {
        const interestRate = calculateInterestRate(item.totalValue, paymentData.value, item.quantity);
        if (interestRate < lowestInterestRate) {
          lowestInterestRate = interestRate;
          bestOption = {
            id: index + 2,
            interestRate: (interestRate * 100).toFixed(2) // Convertendo para porcentagem
          };
        }
      });

      return setBestOption(bestOption)
    }, []);


    const handleRadius = (index: number) => {
      if (index === 0) {
        return '10px 10px 0px 0px';
      } else if (index + 1 === data.installments.length) {
        return '0px 0px 10px 10px';
      } else {
        return '0px';
      }
    }

    const handleChoose = (data: object) => {

      const formatedData = {
        method: data
      }
      setOption(data)

      handleFinishStep(formatedData)
    }

    return (
      <Box>
        <Typography
          mb={4}
          fontWeight={800}
          fontSize={20}
          textAlign="center"
        >
          João, como você quer pagar?
        </Typography>

        <InstallmentComponent
          label='Pix'
          quantity={1}
          installmentValue={data.value}
          cashback={3}
          isSelected={option?.id === 0}
          onSelect={() => handleChoose({ value: data.value, id: 0, quantity: 1 })}
        />

        <Box mt={4}>
          {data.installments.map((item, index) => (
            <InstallmentComponent
              key={index}
              label={index === 0 ? "Pix Parcelado" : ''}
              quantity={index + 2}
              borderRadius={handleRadius(index)}
              installmentValue={item.totalValue / item.quantity}
              isSelected={option?.id === index + 2}
              bestOption={bestOption?.id === index + 2 ? `${bestOption.interestRate}%` : ''}
              onSelect={() => handleChoose({ value: item.totalValue / item.quantity, id: index + 2, quantity: item.quantity })}
            />
          ))}
        </Box>
      </Box>
    );
  }

export default PaymentMethod
