// LIBRARIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

// COMPONENTS
import PrimaryButton from "./PrimaryButton";
import CardProjects from "./CardProjects";
import SecondaryButton from "./SecondaryButton";
import worldWisePhoto from "/images/worldwise.png";
import fastReactPizza from '/images/fastReactPizza.png'
import usePopCorn from '/images/usePopCorn.png'
import Projects from "./Projects";

const arrowRight = <FontAwesomeIcon icon={faCircleArrowRight} />;

function Hero({ onClick }) {

    return (
        <Projects>
            <div
                className="xs:w-[100%] xs:gap-3 flex w-[65%] 
                flex-col items-center justify-center gap-10 p-5"
            >
                <h1
                    className="xs:text-xl xs:w-[100%] p-5 text-center leading-tight 
                    sm:w-[65%] sm:text-3xl md:w-[55%] md:text-3xl 
                    lg:w-[45%] lg:text-5xl lg:leading-tight xl:w-[38%]"
                >
                    Full Stack Web Developer & Web and Mobile Designer
                </h1>
                <p
                    className="text-logo xs:w-[100%] px-5 text-center sm:w-[75%] 
                    sm:text-lg md:w-[85%] lg:w-[50%] xs:text-justify md:text-center"
                >
                    I help business grow by crafting amazing web experiences. If you’re
                    looking for a developer that likes to get stuff done, let’s talk.
                </p>
                <PrimaryButton to='/contact'>
                    Contact me <span className="p-1 text-xl">{arrowRight}</span>
                </PrimaryButton>
                <CardProjects>
                    <img src={worldWisePhoto} className="flex flex-col items-center pb-4" alt="World wise photo" />
                    <h1 className="pb-3 text-logo xs:text-base md:text-2xl">Wordwise App</h1>
                    <p className="pb-3 xs:text-justify md:text-left">
                        This application allow users register all the cities that they have ever
                        traveled to.
                    </p>
                    <SecondaryButton to='https://github.com/Adair-Costa/worldwise'>
                        See more
                    </SecondaryButton>
                </CardProjects>
                <CardProjects>
                    <img src={fastReactPizza} className="flex flex-col items-center pb-4" alt="World wise photo" />
                    <h1 className="pb-3 text-logo xs:text-base md:text-2xl">Fast React Pizza</h1>
                    <p className="pb-3 xs:text-justify md:text-left">
                        This is a application allow their customers to order pizzas and get them delivered to their home..
                    </p>
                    <SecondaryButton to='https://github.com/Adair-Costa/fast-react-pizza-co'>
                        See more
                    </SecondaryButton>
                </CardProjects>
                <CardProjects>
                    <img src={usePopCorn} className="flex flex-col items-center pb-4" alt="World wise photo" />
                    <h1 className="pb-3 text-logo xs:text-base md:text-2xl">Usepopcorn App</h1>
                    <p className="pb-3 xs:text-justify md:text-left">
                        This application allow users search, select, rate and add movies to the list.
                    </p>
                    <SecondaryButton to='https://github.com/Adair-Costa/use-pop-corn'>
                        See more
                    </SecondaryButton>
                </CardProjects>
            </div>
        </Projects>
    );
}

export default Hero;
