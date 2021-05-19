import React from 'react'
import { Jumbotron, Row, Col, Form, Button } from 'react-bootstrap'
//import propTypes from 'prop-types'
import './add-ticket-form.style.css'

const AddTicketForm = ({handleOnChange, handleOnSubmit, frmData, frmDataError}) => {

    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">
               <h1 className="text-info text-center" >Add New Ticket</h1>
               <hr />
               <div className="form-frame">
               <Form autoComplete="off" onSubmit={handleOnSubmit}  >
                      
                     <Form.Group as={Row}>
                        <Form.Label column as={3}>
                            Subject
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control
                          type="text" 
                          name="subject" 
                          //value={frmData.subject}
                          onChange={handleOnChange}
                          placeholder="Enter Subject"
                          required
                        /><Form.Text className="text-danger">
                            {/*!frmDataError.subject && "Subject is required"*/}
                        </Form.Text>
                        </Col>
                     </Form.Group>
                     <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                           Issue Found
                        </Form.Label>
                        <Col sm={9}>
                        <Form.Control
                          type="date" 
                          name="issueDate" 
                          //value={frmData.issueDate}
                          onChange={handleOnChange}
                          //placeholder="password"
                          required
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                           Detail
                        </Form.Label>
                        <Form.Control
                          as="textarea" 
                          name="detail" 
                          rows="5"//value={password}
                          onChange={handleOnChange}
                          //value={frmData.detail}
                          //placeholder="password"
                          required
                        />
                    </Form.Group>
                
                    <Button type="submit" variant="info" block className="mt-3 ml-3 mb-3" >Add New</Button>
                    
                    </Form>
                    </div>
                    </Jumbotron>
    ) }

export default AddTicketForm;

//AddTicketForm.propTypes = {
//    handleOnChange: propTypes.func.isRequired,
//    handleOnSubmit: propTypes.func.isRequired,
//    frmData: propTypes.object.isRequired,
//    frmDataError: propTypes.object.isRequired,
//}
