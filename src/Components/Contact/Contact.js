import React from 'react'
import Model from '../../Images/Hero/9.webp'
function Contact() {
    return (
        <div>
            <h1>CONTACT</h1>
            <div className="contact-form-container">
                <div>
                    <img src={Model} alt="contact-show" />
                </div>
                <div>
                    <h1>MAKE AN ENQUIRY</h1>
                    <label>Name
                        <input type='text'></input>
                    </label>
                    <label>Email
                        <input type='text'></input>
                    </label>
                    <label>Enquiry
                        <textarea type='text' wrap="off" rows="10"></textarea>
                    </label>
                    <button>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
