import Row from "./Row";

function Experiences() {
    return (
        <div className="pb-10]">
            <h1
                className="xs:text-lg xs:text-center pb-10 text-3xl 
                    tracking-[0.5rem] opacity-50 sm:text-2xl"
            >
                Experiences
            </h1>
            <div className="flex flex-col items-center justify-center gap-5
                text-paragraph text-xl xs:pb-10 xs:text-lg sm:text-xl">
                <div className="flex gap-10 xs:flex-col xs:gap-5 xs:text-center
                    md:flex-row">
                    <p>2022 - Present</p>
                    <h2 className="captalize cursor-pointer"> Web Design </h2>
                </div>
                <Row />
                <div className="flex gap-10 xs:flex-col xs:gap-5 xs:text-center
                    md:flex-row">
                    <p>2021 - Present</p>
                    <h2 className="captalize cursor-pointer">Back End</h2>
                </div>
                <Row />
                <div className="flex gap-10 xs:flex-col xs:gap-5 xs:text-center
                    md:flex-row">
                    <p>2019 - Present</p>
                    <h2 className="captalize cursor-pointer">Front End </h2>
                </div>
                <Row />
            </div>
        </div>
    );
}

export default Experiences;
