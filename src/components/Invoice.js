
export const Invoice = (props) => {

    const {item, view} = props;
    return (    
        <div className="invoice_item">
            <div>Invoice No: {item.invoiceNumber} <span className="right">Date: {item.dateOfIssue} </span> </div>
            <div>From : {item.billFrom} <span className="right">To:  {item.billTo} </span> </div>
            <div >{item.billFromEmail}<span className="right">{item.billToEmail} </span> </div> 
            <div className="action"> 
                <img className="image" onClick={view} src="https://www.svgrepo.com/show/513026/view-close-818.svg" />
                <img className="image"  src="https://www.svgrepo.com/show/511904/edit-1479.svg" />
                <img className="image"  src="https://www.svgrepo.com/show/500534/delete-filled.svg" />
            </div> 
        </div>
    )
}