export default function Header({ children }){
    return(
        <>
            <header>
                { children }
            </header>
            <style jsx>{`
                header{
                    position: relative;
                    padding-top: 2rem;
                    padding-bottom: 6rem;
                    margin-bottom: 2rem
                    background-color: #ffe8e0;
                }
                header:before{
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: .05;
                    background-image: url('/bg.jpg');
                    background-position: center center;
                    z-index: 0
                }    
                header
            `}</style>
        </>
    )
}