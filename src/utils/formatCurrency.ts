export function formatCurrency(value: number) {
  return Intl.NumberFormat('es-US', {
    currency: 'USD',
    style: 'currency'
  }).format(value)
}
