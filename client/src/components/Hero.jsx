import { useNavigate } from 'react-router-dom'

import heroProfile from "../assets/hero-profile.png";

function Hero() {
    const navigate = useNavigate();

    function handleContactRoute() {
        navigate('/contacts')
    }

    return (
        <div
            className="flex flex-col items-center gap-4 px-4
            mt-4 tablet:h-screen tablet:flex-row tablet:items-center
            tablet:justify-between"
        >
            <div className="text-center tablet:w-full tablet:text-left">
                <h1 className="mb-4 text-4xl tablet:text-5xl desktop:w-[75%]">
                    Full Stack{" "}
                    <span className="font-medium text-primary">Web Developer</span> & Web
                    and Mobile <span className="font-medium text-primary">Designer</span>
                </h1>
                <p className="mb-4  desktop:w-[75%]">
                    I help business grow by crafting amazing web experiences. If you’re
                    looking for a web developer that likes to get stuff done, let’s talk.
                </p>
                <button
                    onClick={handleContactRoute}
                    className="rounded-3xl border-2 border-white bg-primary px-4 
                    py-2 text-base font-medium tablet:hover:bg-base tablet:hover:text-primary"
                >
                    Contact me
                </button>
            </div>
            <div>
                <img
                    src={heroProfile}
                    alt="Hero profile"
                    className="max-h-80 phone:max-h-80 tablet:max-h-[50%]"
                />
            </div>
        </div>
    );
}

export default Hero;
