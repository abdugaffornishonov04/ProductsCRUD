import { useState } from "react";

import { Button, Form } from "react-bootstrap";

import "../styles/styles.scss";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      const formData = new FormData(form);
      const fullName = formData.get("loginNameID");
      const password = formData.get("loginPassowrdID");

      console.log(fullName);
      console.log(password);

      if(password == "2023"){
        navigate("/products");
      } else {
        alert("Wrong password. The original password is 2023");
      }
    }

    setValidated(true);
  };

  return (
    <div>
      <div className="loginPage-wrapper">
        <div className="theContainer">
            <div className="loginPage-form">
              <p className="badge text-primary text-center loginn-text">
                Log In
              </p>
              <Form
                className="login-form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Form.Group md="4" controlId="loginNameID">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    className="mb-3"
                    required
                    type="text"
                    placeholder="Full name"
                    name="loginNameID"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your full name
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="loginPassowrdID">
                  <Form.Label>Enter password</Form.Label>
                  <Form.Control
                    className="mb-3"
                    required
                    type="password"
                    placeholder="Password"
                    name="loginPassowrdID"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter password
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className="mt-5" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
