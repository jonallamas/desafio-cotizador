import {
    Row,
    Col
} from 'antd'


export default function Layout({ children }){
    return(
        <>
            <Row>
                <Col 
                    span={8} 
                    offset={8}
                >
                    { children }
                </Col>
            </Row>
        </>
    )
}