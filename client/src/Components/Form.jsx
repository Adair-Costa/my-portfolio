// LIBRARIES
import { useState } from 'react';
import axios from 'axios';

// COMPONENTS
import ProfileImage from './ProfileImage';

const URL = 'http://localhost:3000/api/v1/email';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await fetch(`${URL}`, {
                method: 'POST',
                body: JSON.stringify({ name, email, message }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err.message)
        }

        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <section
            className="xl:items-cente m-auto mb-10 flex items-center 
            justify-center gap-10 xs:w-[100%] xs:flex-col lg:w-[70%] lg:flex-row lg:gap-20
            xl:gap-10"
        >
            <div
                className="flex w-[50%] flex-col items-center gap-60 xs:gap-5
                lg:gap-60 xl:gap-60"
            >
                <h1
                    className="text-4xl tracking-[0.5rem] 
                    opacity-50 xs:text-lg sm:text-2xl"
                >
                    Contact
                </h1>
                <ProfileImage>
                    <img
                        src="/images/aboutMe.png"
                        className="pb-5 xs:w-[65%] sm:w-[50%] md:w-[65%] lg:w-[80%]"
                        alt="Photo about me"
                    />
                </ProfileImage>
            </div>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <h1
                    className="xs:text-center xs:text-2xl md:text-4xl lg:text-left 
                    lg:text-5xl"
                >
                    Let’s Collaborate!
                </h1>
                <div className="xs:flex xs:flex-col xs:items-center xs:text-justify">
                    <p className="w-[70%] text-lg text-paragraph xs:w-[100%] xs:px-2 md:px-3">
                        Use the <span className="uppercase text-logo">form</span> to give me
                        as much <span className="uppercase text-logo">details</span> as
                        possible and I’ll get back to you as soon as I can. Alternatively,
                        get in touch using the information below or contact me via
                        <span className="uppercase text-logo"> social media</span>.
                    </p>
                </div>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="rounded p-3 text-black focus:outline-none focus:ring focus:ring-logo
                     xs:mx-2 md:mx-3"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="rounded p-3 text-black focus:outline-none focus:ring focus:ring-logo
                    xs:mx-2 md:mx-3"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="3"
                    placeholder="Message"
                    className="rounded-md p-3 text-black focus:outline-none focus:ring focus:ring-logo 
                    xs:mx-2 md:mx-3"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                    className="captalize mb-5 rounded bg-logo p-3
                        font-semibold text-btn transition delay-150 
                        duration-200 ease-in-out hover:-translate-y-0.5 hover:opacity-85
                        focus:text-btn focus:ring focus:ring-btn xs:mx-2 md:mx-3"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Form;
