import React, { useState } from "react";
import "../NotLogin/form.css"

const CreateContract = () => {
  const [employerId, setEmployerId] = useState("");
  const [payment, setPayment] = useState();
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add code to handle form submission
  };

  return (
    <div>
    <h1 style={{textAlign: 'center'}}>Create Contract</h1>
    <hr />





      
      <div className="form-container">
        <form
          className="card"
          style={{ background: "#eeeeee" }}
          onSubmit={"handleSubmit"}
        >
          <div className="form my-4" style={{ textAlign: "center" }}>
            <div className="text-center my-2">
              &nbsp;&nbsp;
              <input
                type="id"
                name="email"
                value={employerId}
                style={{ fontFamily: "Helvetica Neue" }}
                onChange={(e) => {
                    setEmployerId(e.target.value);
                }}
                placeholder="Employer Id"
                required
              />
              <br />
            </div>
            <div className="text-center my-2">
              &nbsp;&nbsp;
              <input
                type="password"
                name="password"
                title="password must contains atleast 8 character"
                value={payment}
                onChange={(e) => {
                    setPayment(e.target.value);
                }}
                placeholder="Payment"
                style={{ fontFamily: "Helvetica Neue" }}
                spellcheck="false"
                required
              />
              <br />
            </div>
            <div className="text-center my-2">
              &nbsp;&nbsp;
              <input
                name="password"
                title="password must contains atleast 8 character"
                value={duration}
                onChange={(e) => {
                    setDuration(e.target.value);
                }}
                placeholder="Duration in month"
                style={{ fontFamily: "Helvetica Neue" }}
                spellcheck="false"
                required
              />
              <br />
            </div>

            <div className="text-center my-2">
              <button
                id="click"
                type="submit"
                style={{ border: "none", fontFamily: "Helvetica Neue" }}
              >
                Create
              </button>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContract;
