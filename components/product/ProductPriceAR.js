export default function(price, dolarPrice, iva) {
  const priceAR = price * dolarPrice * (1+iva/100)
  return priceAR
}

export function productPriceTotalAR(totalPriceUSD, dolarPrice) {
  const priceAR = totalPriceUSD * dolarPrice
  return priceAR
}