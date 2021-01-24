import { Currency, ETHER, Token } from '@zhiyuan2007/uniscam-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'CURRENCY'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
