// COMPONENTS
import { FaCode } from "react-icons/fa";

function Portfolios() {
    return (
        <div className="flex flex-col justify-center px-4 mt-4 tablet:h-[30rem]">
            <h1
                className="mb-4 text-center text-4xl
                text-primary"
            >
                Portfolios
            </h1>
            <div className="flex flex-col gap-4 tablet:flex-row tablet:justify-between">
                <div className="text-center font-mono tablet:w-[30%]">
                    <div className="rounded-t-lg bg-primary p-4 text-base">
                        <div className="flex items-center justify-center gap-4">
                            <h6>Front-End</h6>
                            <FaCode />
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-4 rounded-b-lg
                    bg-neutral p-4 text-base font-medium"
                    >
                        <p className="uppercase">html</p>
                        <p className="uppercase">css</p>
                        <p className="uppercase">javascript</p>
                        <p className="uppercase">bootstrap</p>
                        <p className="uppercase">tailwind</p>
                        <p className="uppercase">react</p>
                    </div>
                </div>
                <div className="text-center font-mono tablet:w-[30%]">
                    <div className="rounded-t-lg bg-primary p-4 text-base">
                        <div className="flex items-center justify-center gap-4">
                            <h6>Back-End</h6>
                            <FaCode />
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-4 rounded-b-lg
                    bg-neutral p-4 text-base font-medium"
                    >
                        <p className="uppercase">node</p>
                        <p className="uppercase">express</p>
                        <p className="uppercase">mongoose</p>
                        <p className="uppercase">mongodb</p>
                        <p className="uppercase">dynamodb</p>
                        <p className="uppercase">postGreSql</p>
                    </div>
                </div>
                <div className="text-center font-mono tablet:w-[30%]">
                    <div className="rounded-t-lg bg-primary p-4 text-base">
                        <div className="flex items-center justify-center gap-4">
                            <h6>Others</h6>
                            <FaCode />
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-4 rounded-b-lg
                    bg-neutral p-4 text-base font-medium"
                    >
                        <p className="uppercase">figma</p>
                        <p className="uppercase">git</p>
                        <p className="uppercase">github</p>
                        <p className="uppercase">postman</p>
                        <p className="uppercase">Redux</p>
                        <p className="uppercase">React Query</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolios;
