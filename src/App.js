import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import InvoiceList from './components/InvoiceList';
import {Routes, Route} from 'react-router-dom';


class App extends Component {
  render() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <Routes>
            <Route path="/" element={<InvoiceList />} />
            <Route path="/create-invoice" element={<InvoiceForm />} />
            <Route path='/edit-invoice/:id' element={<InvoiceForm />} />
          </Routes>
        </Container>
    </div>
  );
}}

export default App;
