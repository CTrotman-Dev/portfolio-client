import React from "react";

import Form from "../components/Form";

const Contact = () => {
    return (
        <div className="contact-page row">
            <h1>
                Contact Us
            </h1>

            <div className="row">
                <div className="col-md-6">
                    <p>
                        Please use the form to send an email (NOTE: this will open default email app.)
                    </p>
                    <Form />
                </div>
              
            </div>


        </div>
    );
}

export default Contact;