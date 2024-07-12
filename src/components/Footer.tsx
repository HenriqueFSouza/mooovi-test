'use client'
import { Box, Typography } from "@mui/material"
import { GreenBox, Line } from "./styles";
import { formatCurrency } from "@/utils/formatCurrency";
import ArrowUp from "@material-ui/icons/KeyboardArrowUp"
import CircleChecked from "./../../public/checked";


const PaymentFooter: React.FC<{
  data: {
    quantity: number;
    value: number;
  },
  isCreditCard?: boolean;
}> = ({
  data,
  isCreditCard
}) => {

    const handleText = (index: number) => {
      const position = index + 1
      if (position === 1) {
        return '1º pagamento no Pix'
      } else {
        return position + 'ª no cartão'
      }
    }
    return (
      <>
        {data.quantity && (
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            pb={2}
            mt={2}
            borderBottom="2px solid #E5E5E5"
          >
            {Array.from({ length: data.quantity }).map((item, index) => (
              <Box
                key={index}
                display="flex"
                gap={1}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                >
                  {!isCreditCard && index === 0 && <GreenBox isGreen={index === 0} />}
                  {!isCreditCard && index != 0 && <GreenBox isGreen={index === 0} />}
                  {isCreditCard && index != 0 && <GreenBox isGreen={index === 1} />}
                  {isCreditCard && index === 0 && <CircleChecked size={16} />}
                  {index !== data.quantity - 1 && <Line />}
                </Box>
                <Box
                  display="flex"
                  alignItems="initial"
                  width="100%"
                  justifyContent="space-between"
                >
                  <Typography variant="body2" fontWeight={600}>
                    {handleText(index)}
                  </Typography>

                  <Typography variant="body2" fontWeight={800}>
                    {formatCurrency(data.value)}
                  </Typography>
                </Box>


              </Box>
            ))}

          </Box>
        )}

        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          pb={2}
          mt={2}
          borderBottom="2px solid #E5E5E5"
        >
          <Typography variant="body2" fontWeight={600}>
            CET: 0.5%
          </Typography>

          <Typography variant="body2" fontWeight={600}>
            Total:{' '}
            {formatCurrency(data.quantity * data.value)}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          pb={2}
          mt={2}
          borderBottom="2px solid #E5E5E5"
        >
          <Typography variant="body2" fontWeight={800}>
            Como funciona?
          </Typography>

          <ArrowUp />
        </Box>

        <Typography variant="body2" mt={2}>
          Identificador:
        </Typography>
        <Typography variant="body2" fontWeight={800}>
          2c1b951f356c4680b13ba1c9fc889c47
        </Typography>
      </>
    );
  }

export default PaymentFooter
