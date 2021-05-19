import React from 'react';
import propTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email, password}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-center mt-5">Password reset</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnResetSubmit} >
                     <Form.Group>
                        <Form.Label>
                            Email Address
                        </Form.Label>
                        <Form.Control
                          type="email" 
                          name="email" 
                          value={email}
                          onChange={handleOnChange}
                          placeholder="Enter Email"
                          required
                        />
                   </Form.Group>
                   <Button className="mt-2"type="submit">Reset</Button>
                </Form>
                <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!" onClick={()=>formSwitcher("login")}>Login Now!</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange: propTypes.func.isRequired,
    handleOnSubmit: propTypes.func.isRequired,
    formSwitcher: propTypes.func.isRequired,
    email: propTypes.string.isRequired,
}