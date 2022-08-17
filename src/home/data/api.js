const getCripto = async () => {
    const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

    const result = await fetch(URL)
    const response = await result.json()

    return response
}

const getInfoCripto = async ({currency, selectCripto}) => {
    const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectCripto}&tsyms=${currency}`

    const response = await fetch(URL)
    const result = response.json()

    return result
}

export {getCripto, getInfoCripto}