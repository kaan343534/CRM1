import React from 'react';
import propTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const LoginForm = ({handleOnChange, handleOnSubmit, formSwitcher, email, password}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-center">Client login</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnSubmit} >
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
                    </Form.Group><Form.Group>
                        <Form.Label>
                           Password 
                        </Form.Label>
                        <Form.Control
                          type="password" 
                          name="password" 
                          value={password}
                          onChange={handleOnChange}
                          placeholder="password"
                          required
                        />
                    </Form.Group>
                    <Button className="mt-2" type="submit">Login</Button>
                </Form>
                <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <a href="#!" onClick={()=>formSwitcher("reset")}>Forget password</a>
                </Col>
            </Row>
        </Container>
    )
}

LoginForm.propTypes = {
    handleOnChange: propTypes.func.isRequired,
    handleOnSubmit: propTypes.func.isRequired,
    formSwitcher: propTypes.func.isRequired,
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
}; 