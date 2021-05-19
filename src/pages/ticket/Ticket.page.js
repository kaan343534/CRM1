import React, { useState , useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp'
import data from '../../assets/data/dummy-tickets.json'
import MessageHistory from '../../components/message-history/MessageHistory.comp'
import UpdateTicket from '../../components/update-ticket/UpdateTicket.comp'


const ticket = data[0]

const Ticket = () => {  

    const [message, setMessage] = useState('')
    const handleOnSubmit = (e) => {
      e.preventDefault()
      alert("Form submitted")
    }
    const handleOnChange = (e) => {
      setMessage(e.target.value)
    }
    useEffect(() => {
        
    }, [message])

    return (
        <Container>
             <Row>
                <Col>
                  <PageBreadcrumb page="Ticket"  />            
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                  <div className="subject">Subject: {ticket.subject}</div>            
                  <div className="date">Ticket Opened: {ticket.addedAt}</div>            
                  <div className="status">Status: {ticket.status}</div>            
                </Col>
                <Col className="text-right">
                 <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
             <Row className="mt-4">
                <MessageHistory msg={ticket.history}  />
            </Row><Row className="mt-4">
                <UpdateTicket 
                  handleOnChange={handleOnChange} 
                  handleOnSubmit={handleOnSubmit} 
                  msg={message}
                />
            </Row>
        </Container>
    )
}

export default Ticket
