

export const formatCurrency = (value: number) => {

  const newValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

  return newValue
}