import React from "react";
import emailjs from "emailjs-com";

import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

export default function ContactComponent() {
    // const form = useRef();
    // function sendEmail(e){
    //   e.preventDefault();
    //   emailjs.sendForm('service_jrbizpu', 'template_cdxruyi', form.current, 'l-ClNEwiZMWWj6k3Y')
    //   .then((result)=>{
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
    //   form.current.reset()
    // }
    
    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('service_jrbizpu', 'template_cdxruyi', e.target, 'l-ClNEwiZMWWj6k3Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  // return (
  //   <div>
  //     <div className="spacer bg-light">
  //       <Container>
  //         <Row className="justify-content-center">
  //           <Col md="7" className="text-center">
  //             <h1 className="title font-bold">Contact Form</h1>
  //             <h6 className="subtitle">
  //               Share with us your opinion and if you have any idea please help 
  //               to become better . 
  //             </h6>
  //           </Col>
  //         </Row>
  //       </Container>
  //     </div>
  //     <div className="contact1">
  //       <form  onSubmit={sendEmail}>
  //       <Row>
  //         <Container>
  //           <div className="spacer">
  //             <Row className="m-0">
  //               <Col lg="8">
  //                 <div className="contact-box p-r-40">
  //                   <h4 className="title">Quick Contact</h4>
  //                   <Form>
  //                     <Row>
  //                       <Col lg="6">
  //                     <FormGroup className="m-t-15">
  //                           <Input type="text" placeholder="name" name="name"/>
  //                         </FormGroup>
  //                       </Col>
  //                       <Col lg="6">
  //                         <FormGroup className="m-t-15">
  //                           <Input type="text" placeholder="email" name="email"/>
  //                         </FormGroup>
  //                       </Col>
  //                       <Col lg="6">
  //                         <FormGroup className="m-t-15">
  //                           <Input type="text" placeholder="subject" name="subject"/>
  //                         </FormGroup>
  //                       </Col>
  //                       <Col lg="12">
  //                         <FormGroup className="m-t-15">
  //                           <Input
  //                             type="textarea"
  //                             name="text"
  //                             placeholder="message"
  //                           />
  //                         </FormGroup>
  //                       </Col>
  //                       <Col lg="12">
  //                         <Button
  //                           type="submit"
  //                           className="btn btn-danger-gradiant m-t-20 btn-arrow" >
  //                           <span>
  //                             Submit <i className="ti-arrow-right"></i>
  //                           </span>
  //                         </Button>
  //                          </Col>
  //                     </Row>
  //                   </Form>
  //                 </div>
  //               </Col>
  //               {/* <Col lg="4">
  //                 <div className="detail-box p-40 bg-info">
  //                   <h2 className="text-white">Wrappixel Headquarters</h2>
  //                   <p className="text-white m-t-30 op-8">
  //                     251 546 9442
  //                     <br /> info@wrappixel.com
  //                   </p>
  //                   <p className="text-white op-8">
  //                     601 Sherwood Ave.
  //                     <br /> San Bernandino, CA 92404
  //                   </p>
  //                 </div>
  //               </Col> */}
  //             </Row>
  //           </div>
  //         </Container>
  //       </Row>
  //       </form>
  //     </div>
  //   </div>
  // );


  return(
    <div>
        <div className="container">
        <form onSubmit={sendEmail}>
                 <div className="row pt-5 mx-auto">
                    
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="text"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
)



};

// export default ContactComponent;
