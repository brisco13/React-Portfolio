import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
    //success message
    const alert = (user) => {
    const alertPlaceholder = document.getElementById('sendNotif');
    alertPlaceholder.innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>Thanks ${user} for the message! I'll reach out as soon as possible!</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
    }

    //get name
    const getInfo = () => {
        const userName = document.getElementById('username');
        const newContact = userName.value;
        return newContact;
    }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zf3et9i', 'template_2np1xef', form.current, 'piNcNX2jq3tnSwyUQ')
      .then((result) => {
        const userInfo = getInfo();
        alert(userInfo);
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div class="col justify-content-evenly">
        <div class="container text-center">
            <h3 >Contact Me!</h3>
            <p/>
            <p>I'd love to hear from you! Please fill out the form below so we can connect.</p>
        </div>

        <div class="container">
    <form ref={form} onSubmit={sendEmail}>
        <div class="mb-3">
            <label for="form-name" class="form-label">Your Name</label>
            <input id="username" type="text" class="form-control" name="user_name" placeholder="Your Name" required/>
        </div>
        <div class="mb-3">
            <label for="form-email" class="form-label">Email Address</label>
            <input id="useremail" type="email" class="form-control" name="user_email" placeholder="name@example.com" required/>
        </div>
        
        <div class="mb-3">
            <label for="form-message" class="form-label">Message Body</label>
            <textarea id="usermessage" class="form-control" rows="4" name="message" placeholder="Inquiry/Message" required></textarea>
            <br/><br/>
            <input type="submit" class = "btn btn-primary" id="sendMes" value="Send the message!" />  
        </div>
        <p/>
        <div id="sendNotif"></div>
    </form>
    </div>
    </div>
  );
};
