import React, { useState } from "react";

const Form = (props) => {
    const [contact, setContact] = useState({
        fullname: "",
        email: "",
        message: ""
    });

    function handleFormChanges(event) {
        const { value, name } = event.target;
        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handleSubmit(event){
        window.open("mailto:c.trotman92@gmail.com?subject=Customer%20Enquiry&body="+contact.message);
        event.preventDefault();
    }

    return (
        <div className="contact-card">
            {/* <form className="contact-form" onSubmit={handleSubmit}>
                <input onChange={handleFormChanges} value={contact.fullname} type="text" placeholder="Full name" name="fullname" />
                <input onChange={handleFormChanges} value={contact.email} type="text" placeholder="Email" name="email" />
                <textarea onChange={handleFormChanges} value={contact.message} name="message" placeholder="Enter message here" rows={5} cols={50} />
                <button type="submit" className="contact-btn btn btn-lg">
                    Send
                </button>
            </form>
             */}

            <form action="https://send.pageclip.co/E3XGNxyvpXaW8eovvBFLD6IfNEcUZSEa" class="pageclip-form" method="post">

                <input type="text" name="name" value="Roscoe Jones" />
                <input type="email" name="email" value="roscoe@example.com" />
                <input type="text" name="message" value="Enter Message" />

                <button type="submit" class="pageclip-form__submit">
                    <span>Send</span>
                </button>
            </form>
        </div>
    );
}

export default Form;