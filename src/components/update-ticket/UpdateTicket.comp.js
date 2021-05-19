import React from 'react'
import { Form, Button } from 'react-bootstrap'

const UpdateTicket = ({handleOnChange, handleOnSubmit, msg}) => {
    return (
        <div>
            <Form onSubmit={handleOnSubmit} >
                <Form.Label>
                    Reply
                </Form.Label>
                <div className="ml-2 mb-2">
                <Form.Text>
                    Please reply your message here or update the ticket
                </Form.Text>
                </div>
                <Form.Control
                  as="textarea"
                  row="5"
                  name="detail"
                  value={msg}
                  onChange={handleOnChange}
                />
                <div className="mt-3 mb-3">
                  <Button variant="info" type="submit" >Reply</Button>
                </div>
            </Form>
        </div>
    )
}

export default UpdateTicket
