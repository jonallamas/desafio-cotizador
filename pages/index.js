import { useState } from 'react'

import Header from '../components/header'
import Layout from '../components/layout'
import Formbox from '../components/form'
import Items from '../components/items'

import { getRates } from './api/exchangeratesapi'

export default function Home(){

    const [ rates, setRates ] = useState(null)
    const [ form, setForm ] = useState({
        currency: '',
        date: ''
    })
    const { currency, date } = form
    const [ seach, setSearch ] = useState({
        base: '',
        date: ''
    })

    const setCurrency = currency => {
        setForm({
            ...form,
            currency
        })
    }

    const setDate = date => {
        setForm({
            ...form,
            date
        })
    }

    const onSubmit = async () => {
        const res = await getRates(form)
        const json = await res.json()

        setRates(json.rates)
        setSearch({
            ...form,
            base: json.base,
            date: json.date
        })
    }

    return(
        <>
            <Header>
                <Layout>
                    <Formbox
                        currency={currency}
                        date={date}

                        setCurrency={setCurrency}
                        setDate={setDate}
                        onSubmit={onSubmit}
                    />
                </Layout>
            </Header>
            <Layout>
                <Items 
                    base={seach.base}
                    date={seach.date}
                    rates={rates}
                />
            </Layout>
        </>
    )
}