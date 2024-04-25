import React, { useContext, useEffect, useState } from 'react'
import Footer from '../footer.js'
import { Context } from '../../index.js';
import { Navigate } from 'react-router-dom';
import UserNavbar from './userNavbar.js';
import axios from 'axios';
import "./contracts.css"

const UserHome = () => {
  const {userId, setUserId} = useContext(Context);
  

  const [contracts, setContracts] = useState([
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
    }
  ]);

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://example.com/api/contracts', userId);
        setContracts(response.data);
      } catch (error) {
        console.error('Error fetching contracts:', error);
      }
    };

    fetchData();
  }, []);




  return (
    <div>
      <UserNavbar />
    
      {
      
      
      
      contracts.map((contract,index) => (
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
                onClick={""}
                >
                Accept
            </button>
            <button
                className="view-prescription-button"
                id="view-prescription"  
                
                onClick={""}
            >
                Revoke
            </button>
          </div>
          
        ))}
       
    </div>
  );
};

export default UserHome
