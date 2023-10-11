# Invoice management system
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

### Invoice Generator - React-Redux App 

An Invoice creator project built with React and Redux. Homepage displays list of all invoices created and option to create new invoice. Invoice item list shows invoice information, amount, date and options to view-edit-delete that particular invoice item. 
Invoice create page will ask user to fill the form and validate it's values and save the form data to redux store. There's an option to download a invoice detail pdf as well, clicking outside of invoice pop-up window will close the reviewed and submited invoice and reset the form. 

- Click on `Create New Invoice` button will navigate to creating new invoice form. Once you filled all the required information click on `Review and Save Invoice` and it will save new invoice data to list (store state).
- Click on `All Invoice List`, user will go back to homepage and access the list of invoices.
- Each invoice list item, display 3 icons to view, edit and delete the invoice from list.
- `View` will open Invoice details pop-up window to show details of that invoice, click outside of the popped window and window will be closed.
- `Edit` will open invoice form with prefilled information of that invoice, you can edit any field required and click on `Update Invoice` button will save updated invoice information.
- `Delete` will delete the invoice record permantely. 

### Installation

```
git clone git@github.com:VrushaliPatil17/InvoiceGenerator.git

npm install

npm start / npm run build
```
### Live Demo

