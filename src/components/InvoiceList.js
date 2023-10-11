import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Invoice } from './Invoice';
import Button from 'react-bootstrap/Button';
import InvoiceModal from './InvoiceModal';
import { useState } from 'react';
import { STATE } from '../constants';

export default function InvoiceList() {

    const invoices_state = useSelector((state) => state.invoiceData);
    const dispatch = useDispatch();
    console.log("State - ", invoices_state);
    const [view, setView] = useState(false);
    const [state, setState] = useState(STATE)

    const viewInvoice = (props) => {
        setState(props);
        setView(true);
    }

    const closeInvoice = () => setView(false);

    const DisplayInvoices = () => {
        return invoices_state.map((item, index) => <Invoice key={index} item={item} view={() => viewInvoice(item)} />);
    }

    return (
        <div className='invoiceApp'>
            <h1>Welcome to Invoice List</h1>
            <Row className='createBtn'>
               <Button href='/create-invoice'> Create New Invoice</Button>
            </Row>
            <Row className='list'>
                {
                    invoices_state.length < 1 ? <h2> No Invoices Available </h2> : <DisplayInvoices/> 
                }
            </Row>
            <InvoiceModal showModal={view} closeModal={closeInvoice} info={state} items={state.items} currency={state.currency} subTotal={state.subTotal} taxAmmount={state.taxAmmount} discountAmmount={state.discountAmmount} total={state.total}/>
        </div>
    )
}