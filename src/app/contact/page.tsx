'use client';
import React from 'react'
import { useState , FormEvent} from 'react';


const Contact = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
  
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Prevent default form submission
      // You can handle form submission logic here
      console.log('Form submitted:', { name, email, message });
      // Reset fields after submission if needed
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
        <div id='navigateToContact'>
            <p className=' text-center text-4xl font-serif font-medium mt-24'>Contact <span className='text-blue-400'>.</span></p>

            <div className='c-form'>
            
            <form onSubmit={handleSubmit}>
        <div><h2>Name:</h2>
          <label htmlFor="name"></label>
          <input
          placeholder='Write your Name'
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
  <br />
        <div>
            <h2>Email:</h2>
          <label htmlFor="email"></label>
          <input
            type="email"
              placeholder='Write your Name'
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
  <br />
        <div><h2>
        Your Message:
        </h2>
          <label htmlFor="message"></label>
          <textarea
            // id="message"
            name="message"
            placeholder='Write your Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={10} // Adjust height as needed
            required
          />
        </div> <br />
  
        <button  className="mt-4 px-6 ml-7 py-3 rounded-3xl text-sm bg-blue-500 text-white hover:bg-white hover:text-blue-700 duration-700" type="submit">Submit</button>
      </form>

        </div>
        </div>
        
      
    );
  };
  
  export default Contact;