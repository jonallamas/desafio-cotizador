// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'isomorphic-fetch'

export function getRates(data){
  return fetch(`https://api.exchangeratesapi.io/${data.date}?base=${data.currency}`)
}
