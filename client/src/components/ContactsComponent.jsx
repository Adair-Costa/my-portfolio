import { useState } from "react";

// COMPONENTS
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Contacts() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (!firstName || !lastName || !email || !message) {
            window.alert("Please fill all the fields!");
            return;
        }

        try {
            const sendEmail = await fetch("http://localhost:3000/api/v1/email", {
                method: "POST",
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (sendEmail.ok) {
                window.alert("Email sent successfull");
            }
        } catch (error) {
            console.error(error);
        }

        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="mt-4 flex flex-col justify-center px-4">
            <h1
                className="mb-4 text-center text-4xl
            text-primary"
            >
                Contacts
            </h1>
            <div
                className="flex flex-col gap-4 tablet:flex-row tablet:items-center
                tablet:justify-between"
            >
                <div className="text-center font-mono tablet:w-[50%]">
                    <div className="mb-4 flex items-center justify-center tablet:justify-start">
                        <h1
                            className="hidden tablet:flex tablet:font-medium
                        tablet:text-primary"
                        >
                            Get in touch
                        </h1>
                    </div>
                    <div
                        className="mb-4 flex items-center justify-center gap-4
                        tablet:justify-start"
                    >
                        <FaPhone className="hidden tablet:flex" />
                        <p>0899410640</p>
                    </div>
                    <div
                        className="flex items-center justify-center gap-4
                        tablet:justify-start"
                    >
                        <FaRegEnvelope className="hidden tablet:flex" />
                        <p>aldairquintas125@hotmail.com</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-end gap-4 tablet:w-[50%]"
                >
                    <div className="flex w-full flex-col gap-4">
                        <div className="flex w-full flex-col items-start">
                            <label htmlFor="first-name" className="hidden tablet:flex">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full rounded-3xl border-2 border-primary
                                bg-base p-2 focus:outline-none tablet:placeholder:opacity-0"
                                placeholder="First name"
                                required
                            />
                        </div>
                        <div className="flex w-full flex-col items-start">
                            <label htmlFor="last-name" className="hidden tablet:flex">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full rounded-3xl border-2 border-primary
                                bg-base p-2 focus:outline-none tablet:placeholder:opacity-0"
                                placeholder="Last name"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start">
                        <label htmlFor="email" className="hidden tablet:flex">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-3xl border-2 border-primary
                            bg-base p-2 focus:outline-none tablet:placeholder:opacity-0"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="flex w-full flex-col items-start">
                        <label htmlFor="message" className="hidden tablet:flex">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="h-[5rem] w-full rounded-3xl
                            border-2 border-primary bg-base p-2
                            focus:outline-none tablet:h-[8rem] tablet:placeholder:opacity-0"
                            placeholder="Message"
                            required
                        ></textarea>
                    </div>
                    <div className="w-full tablet:w-[50%]">
                        <button
                            className="flex w-full items-center justify-center gap-4 
                            rounded-3xl border-2 border-white bg-primary 
                            px-4 py-2 text-base font-medium 
                        tablet:hover:bg-base tablet:hover:text-primary"
                        >
                            Send <FaArrowRight className="hidden tablet:flex" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
