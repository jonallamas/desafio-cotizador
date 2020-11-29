import moment from 'moment'
import 'moment/locale/es-mx'
import locale from 'antd/lib/locale/es_ES'

import { Form,Select, DatePicker, Space, Button, message, ConfigProvider } from 'antd'

const { Option } = Select
const dateFormat = 'DD/MM/YYYY'
const dateFormatSend = 'YYYY-MM-DD'

export default function Formbox({ currency, date, setCurrency, setDate, onSubmit }){

    const handleChangeSelect = value => {
        setCurrency(value)
    }

    const handleChangeDate = value => {
        setDate(moment(value).format(dateFormatSend))
    }

    const onFinish = async () => { 
        if(currency === '' || date === ''){
            message.warning('Por favor, rellene correctamente todos los campos')
            return
        }
        onSubmit()
    }

    const disabledDate = (current) => {
        return current && current > moment().endOf('day');
    }

    return(
        <>
            <h1>Histórico de cotizaciones</h1>
            <Form 
                layout="vertical" 
                onFinish={onFinish}
            >
                <Form.Item label="Selecciona una moneda">
                    <Select 
                        defaultValue={currency}
                        onChange={handleChangeSelect}
                        name='currency'
                        size='large'
                    >
                        <Option value="EUR">EUR</Option>
                        <Option value="USD">USD</Option>
                        <Option value="GBP">GBP</Option>
                        <Option value="CAD">CAD</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Fecha de cotización" >
                    {/* <Space 
                        direction="vertical"
                    > */}
                    <ConfigProvider locale={locale}>
                        <DatePicker 
                            defaultValue={date}
                            format={dateFormat}
                            style={{ width: '100%' }} 
                            onChange={handleChangeDate}
                            disabledDate={disabledDate}
                            size='large'
                            locale={locale}
                        />
                    </ConfigProvider>
                    {/* </Space> */}
                </Form.Item>
                {/* <Form.Item> */}
                    <Button 
                        type="primary" 
                        htmlType="submit"
                        block
                        size='large'
                        shape='round'
                    >Buscar</Button>
                {/* </Form.Item> */}
            </Form>
        </>
    )
}