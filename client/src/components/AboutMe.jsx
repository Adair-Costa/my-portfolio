import photoSetup from "../assets/photo-setup.png";

function AboutMe({ sectionAbout }) {
    return (
        <div
            ref={sectionAbout}
            className="flex flex-col items-center gap-4 px-4 mt-4
          tablet:flex-row tablet:justify-between tablet:h-screen"
        >
            <div className="order-1 tablet:order-none">
                <img
                    src={photoSetup}
                    alt="Setup"
                    className="max-h-80 phone:max-h-80 tablet:max-h-[50%]"
                />
            </div>
            <div className="flex flex-col gap-4 tablet:max-w-[50%] tablet:gap-4">
                <div>
                    <h1
                        className="mb-4 text-center text-4xl
                    text-primary"
                    >
                        About me
                    </h1>
                    <p className="text-justify">
                        Hi there, I’m Adair Costa. I was born in Lisbon, Portugal. From an
                        early age I showed interest for computers and that grew into a
                        passion during high school. I got into web development in college.
                        Attending the Autonomous University of Lisbon, in Portugal, was the
                        best decision I made because it showed me what I wanted to do for
                        the rest of my life.
                    </p>
                    <p className="text-justify">
                        Currently I help businesses all around the world by coding websites
                        and web apps. Right now I’m based in Dublin, Ireland.
                    </p>
                </div>
                <div className="flex w-full flex-col gap-4">
                    <div className="flex justify-between">
                        <div className="flex flex-col items-start">
                            <h2 className="text-xl text-primary">Name</h2>
                            <p>Adair Costa</p>
                        </div>
                        <div className="flex flex-col items-end tablet:items-start">
                            <h2 className="text-xl text-primary">Education</h2>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center gap-4 tablet:flex-row
                    tablet:justify-between"
                    >
                        <div className="flex flex-col items-center tablet:items-start">
                            <h2 className="text-xl text-primary">Email</h2>
                            <p>aldairquintas125@hotmail.com</p>
                        </div>
                        <div className="flex flex-col items-center tablet:items-start">
                            <h2 className="text-xl text-primary">Employment</h2>
                            <p>Open</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
