// COMPONENTS
import CardProjects from "../Components/CardProjects";
import Footer from "../Components/Footer";
import Navigations from "../Components/Navigations";
import worldWisePhoto from "/images/worldwise.png";
import fastReactPizza from "/images/fastReactPizza.png";
import usePopCorn from "/images/usePopCorn.png";
import Projects from "../Components/Projects";
import SecondaryButton from "../Components/SecondaryButton";

function Works() {
    return (
        <div>
            <Navigations />
            <Projects>
                <div
                    className="xs:w-[100%] xs:gap-3 bg-background flex 
                    w-[65%] flex-col items-center justify-center gap-10 p-5"
                >
                    <h1
                        className="xs:text-lg xs:text-center pb-5 pt-5 text-3xl 
                        tracking-[0.5rem] opacity-50 sm:text-2xl"
                    >
                        Projects
                    </h1>
                    <CardProjects>
                        <img
                            src={worldWisePhoto}
                            className="flex flex-col items-center pb-4"
                            alt="World wise photo"
                        />
                        <h1 className="text-logo xs:text-base pb-3 md:text-2xl">
                            Wordwise App
                        </h1>
                        <p className="xs:text-justify pb-3 md:text-left">
                            This application allow users register all the cities that they
                            have ever traveled to.
                        </p>
                        <SecondaryButton to='https://github.com/Adair-Costa/worldwise'>
                            See more
                        </SecondaryButton>
                    </CardProjects>
                    <CardProjects>
                        <img
                            src={fastReactPizza}
                            className="flex flex-col items-center pb-4"
                            alt="World wise photo"
                        />
                        <h1 className="text-logo xs:text-base pb-3 md:text-2xl">
                            Fast React Pizza
                        </h1>
                        <p className="xs:text-justify pb-3 md:text-left">
                            This is a application allow their customers to order pizzas and
                            get them delivered to their home..
                        </p>
                        <SecondaryButton to='https://github.com/Adair-Costa/fast-react-pizza-co'>
                            See more
                        </SecondaryButton>
                    </CardProjects>
                    <CardProjects>
                        <img
                            src={usePopCorn}
                            className="flex flex-col items-center pb-4"
                            alt="World wise photo"
                        />
                        <h1 className="text-logo xs:text-base pb-3 md:text-2xl">
                            Usepopcorn App
                        </h1>
                        <p className="xs:text-justify pb-3 md:text-left">
                            This application allow users search, select, rate and add movies
                            to our list.
                        </p>
                        <SecondaryButton to='https://github.com/Adair-Costa/use-pop-corn'>
                            See more
                        </SecondaryButton>
                    </CardProjects>
                </div>
            </Projects>
            <Footer />
        </div>
    );
}

export default Works;
