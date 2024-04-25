import React, { useContext, useEffect, useState } from 'react'
import AdminNavbar from './adminNavbar'
import Footer from '../footer'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import "../Employee/contracts.css";
import { Context } from '../..';
import CreateContract from './createContract';

const AdminHome = () => {


  const {userId, setUserId} = useContext(Context);
  const [createdContracts, setCreatedContracts] = useState([
    {
      ContractID: "contractId",
      EmployerId: "employerId",
      EmployeeId: "employeeId",
      Payment: 1000,
      Duration: 12,
      BankName_Employer: "employerBankName",
      BankAccountNumber_Employer: "employerBankAccountNumber",
      BankName_Employee: "employeeBankName",
      BankAccountNumber_Employee: "employeeBankAccountNumber",
      STATUS: "active",
      Last_Payment_Date: "2022-01-01",
      All_Transactions: []
    },{
      ContractID: "contractId",
      EmployerId: "employerId",
      EmployeeId: "employeeId",
      Payment: 1000,
      Duration: 12,
      BankName_Employer: "employerBankName",
      BankAccountNumber_Employer: "employerBankAccountNumber",
      BankName_Employee: "employeeBankName",
      BankAccountNumber_Employee: "employeeBankAccountNumber",
      STATUS: "active",
      Last_Payment_Date: "2022-01-01",
      All_Transactions: []
    }
  ]);
  const [flag , setFlag] = useState(true);

  const handlePayment = async (userId) => {
    try {
      const response = await axios.post('https://example.com/api/payments', { userId });
      console.log('Payment successful:', response.data);
    } catch (error) {
      console.error('Error making payment:', error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://example.com/api/contracts', userId);
        setCreatedContracts(response.data);
      } catch (error) {
        console.error('Error fetching contracts:', error);
      }
    };

    fetchData();
    if(createdContracts){
      setFlag(true);
    }
  }, []);

  




    return (
    <div>
    <AdminNavbar/>
    <CreateContract/>
    <hr />
    {flag ? createdContracts.map((contract,index) => (
        <div key={index} className="appointment-box">
        <span>
              <strong>EmployeeId</strong> {contract.EmployeeId}&nbsp;&nbsp;
              <strong>Payment</strong> {contract.Payment}&nbsp;&nbsp;
              <strong>Duration</strong> {contract.Duration}&nbsp;&nbsp;
              <strong>STATUS</strong> {contract.STATUS}&nbsp;&nbsp;


        </span>&nbsp;&nbsp;&nbsp;
        <button
          className="view-prescription-button"
          id="view-prescription"  
          onClick={handlePayment(contract.EmployeeId)}
          >
          Payment
        </button>
        <button
          className="view-prescription-button"
          id="view-prescription"  
          
          onClick={""}
        >
          Revoke
        </button>
        </div>
        
      )) : <p>No entries to display</p>}


    
    </div>
    )
}

export default AdminHome
