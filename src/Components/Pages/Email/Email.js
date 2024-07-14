import Header from '../../Common/Header/Header'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
                                
const Contact = () => {
    const [formData, setFormData] = useState({
        to_name: '',
        from_name: '',
        message: '',
    });
                                    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
                                    
    const sendEmail = (e) => {
        e.preventDefault();
                                        
        emailjs.sendForm('service_x9wirb3', 'template_voopv6y', e.target, 'Sh4gz4zz7HG_d7Kec')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
                                        
        setFormData({
            to_name: '',
            from_name: '',
            message: '',
        });
    };
                                    
    return (
    <>

      <Header />
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Send an Email</h2>
          <Form onSubmit={sendEmail}>
            <Form.Group controlId="formToName">
              <Form.Label>recipient's name</Form.Label>
              <Form.Control 
                type="text" 
                name="to_name" 
                value={'Jatin Rai'}
                onChange={handleChange} 
                placeholder="Enter recipient's name" 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formFromName">
              <Form.Label>Your Email</Form.Label>
              <Form.Control 
                type="text" 
                name="from_name" 
                value={formData.from_name} 
                onChange={handleChange} 
                placeholder="Enter your Email" 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Enter your message" 
                required 
                style={{resize: 'none', marginBottom: '1rem'}}
              />
            </Form.Group>
            <div className='text-center'>
            <Button variant="primary" type="submit">
              Send Email
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Contact;