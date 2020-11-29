import CurrencyFlag from 'react-currency-flags'

export default function Item({ val, price }){
    return(
        <>
            <div className={`rate rate-${val}`}>
                <div className="cont-rate">
                    <span className="icon">
                        <CurrencyFlag className="flag" currency={val} size="sm" /> 
                    </span>
                    <span className="name">{val}</span>
                    <span className="price">x <strong>{price}</strong></span>
                </div>
            </div>
            <style jsx>{`
                .cont-rate{
                    padding: .7rem .3rem;
                    border-top: 1px solid #eee;
                    font-size: 1.1rem
                }
                .icon{
                    margin-right: 1rem;
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    background-color: #eee;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .price{
                    font-size: .7rem
                }
                .price strong{
                    font-size: 1rem
                }
            `}</style>
        </>
    )
}