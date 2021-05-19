import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp';
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp';

import { shortText } from '../../utils/Validation';

const initialValData = {
      subject: '',
      issueDate: '',
      detail: '',
 };

const initialFrmError = {
    subject: false,
    issueDate: false,
    detail: false,
};


const AddTicket = () => {
    
    const [frmData, setFrmData] = useState(initialValData);
    const [frmDataError, setFrmDataError] = useState(initialFrmError);

    useEffect(() => {
    }, [frmData,frmDataError]);

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setFrmData({ ...frmData, [name]:value });
      console.log(name,value);
    }

    const handleOnSubmit = async (e) => {
      e.preventDefault();
      setFrmDataError(initialFrmError);
      const isValid = await shortText(frmData.subject);
      !isValid && setFrmDataError({...initialFrmError, subject: isValid});
      //const { name, value } = e.target
      //setFrmData({ ...frmData, [name]:value})
      console.log("Submit form action");
    }
    


    return (
        
        <Container>
             <Row>
                <Col>
                  <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                   <AddTicketForm 
                     handleOnChange={handleOnChange}
                     handleOnSubmit={handleOnSubmit}
                     frmData={frmData}
                     frmDataError={frmDataError}
                     />
                </Col>
            </Row>
        </Container>
    );
}

export default AddTicket;
