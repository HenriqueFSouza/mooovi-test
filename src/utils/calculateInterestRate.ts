export const calculateInterestRate = (totalValue: number, principalValue: number, quantity: number) => {
  return (totalValue - principalValue) / principalValue / quantity;
};