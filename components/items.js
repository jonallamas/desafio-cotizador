import { useState } from 'react'

import Item from './item'

import moment from 'moment'
import { Button, message } from 'antd'
const dateFormat = 'DD/MM/YYYY'

export default function Items({ base, date, rates }){

    const [ visible, setVisible ] = useState(false)
    const [ loader, setLoader ] = useState(true)

    const handleClick = () => {
        message.warning('Ups, estamos trabajando para arreglarlo :)')
    }

    return(
        <>
            {
                rates != null && (
                    <>
                        <div className="cont">
                            <h3>Referencia de la moneda <strong>{base}</strong> para la fecha: {moment(date).format(dateFormat)}</h3>
                            <div className="list">
                                {
                                    Object.keys(rates).map(key => {
                                        if(base != key){
                                            return(
                                                <Item 
                                                    key={key}
                                                    val={key}
                                                    price={rates[key].toFixed(2)}
                                                />
                                            )
                                        }
                                    })
                                }
                                <div className="list-footer">
                                    <Button 
                                        type="default" 
                                        block
                                        size='large'
                                        shape='round'
                                        onClick={() => handleClick()}
                                    >Ver más</Button>
                                </div>
                            </div>
                            <style jsx>{`
                                .cont{
                                    background-color: #fff;
                                    margin-top: -4rem;
                                    margin-bottom: 3rem;
                                    border-radius: 4px;
                                    padding: 1.2rem;
                                    box-shadow: 0px 18px 40px rgba(0,0,0,.15)
                                }
                                .list-footer{
                                    margin-top: 1rem
                                }    
                            `}</style>
                        </div>
                    </>
                )
            }
        </>
    )
}