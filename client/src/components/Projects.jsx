import photoProject from '../assets/photo-project.png'

function Projects() {
    return (
        <div className="flex flex-col justify-center px-4 mt-4 tablet:h-screen">
            <h1
                className="mb-4 text-center text-4xl
            text-primary"
            >
                Projects
            </h1>
            <div className="flex flex-col gap-4 tablet:flex-wrap tablet:flex-row tablet:justify-between">
                <div className="tablet:w-[30%]">
                    <div className="rounded-t-l">
                        <div className="flex items-center justify-center gap-4">
                            <img src={photoProject} alt="Ptoject picture" className='w-full rounded-t-l' />
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-4 rounded-b-lg
                        bg-neutral p-4 text-base"
                    >
                        <h1><span className='font-medium'>Title:</span> User Authentication App</h1>
                        <p><span className='font-medium'>Description:</span> This app allows users register and log in</p>
                        <p><span className='font-medium'>Tech used:</span> React, Tailwind, Nodejs and MongoDB</p>
                        <div className='flex justify-between'>
                            <button
                                className="rounded-3xl border-2 border-base bg-primary px-4 
                            py-2 text-base font-medium tablet:hover:bg-base tablet:hover:text-primary
                            tablet:hover:border-primary"
                            >
                                Demo
                            </button>
                            <button
                                className="rounded-3xl border-2 border-base bg-primary px-4 
                            py-2 text-base font-medium tablet:hover:bg-base tablet:hover:text-primary
                            tablet:hover:border-primary"
                            >
                                Source
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tablet:w-[30%]">
                    <div className="rounded-t-l">
                        <div className="flex items-center justify-center gap-4">
                            <img src={photoProject} alt="Ptoject picture" className='w-full rounded-t-l' />
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-4 rounded-b-lg
                        bg-neutral p-4 text-base"
                    >
                        <h1><span className='font-medium'>Title:</span> User Authentication App</h1>
                        <p><span className='font-medium'>Description:</span> This app allows users register and log in</p>
                        <p><span className='font-medium'>Tech used:</span> React, Tailwind, Nodejs and MongoDB</p>
                        <div className='flex justify-between'>
                            <button
                                className="rounded-3xl border-2 border-base bg-primary px-4 
                            py-2 text-base font-medium tablet:hover:bg-base tablet:hover:text-primary
                             tablet:hover:border-primary"
                            >
                                Demo
                            </button>
                            <button
                                className="rounded-3xl border-2 border-base bg-primary px-4 
                            py-2 text-base font-medium tablet:hover:bg-base tablet:hover:text-primary
                             tablet:hover:border-primary"
                            >
                                Source
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tablet:w-[30%]">
                    <div className="rounded-t-l">
                        <div className="flex items-center justify-center gap-4">
                            <img src={photoProject} alt="Ptoject picture" className='w-full rounded-t-l' />
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-4 rounded-b-lg
                        bg-neutral p-4 text-base"
                    >
                        <h1><span className='font-medium'>Title:</span> User Authentication App</h1>
                        <p><span className='font-medium'>Description:</span> This app allows users register and log in</p>
                        <p><span className='font-medium'>Tech used:</span> React, Tailwind, Nodejs and MongoDB</p>
                        <div className='flex justify-between'>
                            <button
                                className="rounded-3xl border-2 border-base bg-primary px-4 
                            py-2 text-base font-medium tablet:hover:bg-base tablet:hover:text-primary
                             tablet:hover:border-primary"
                            >
                                Demo
                            </button>
                            <button
                                className="rounded-3xl border-2 border-base bg-primary px-4 
                            py-2 text-base font-medium tablet:hover:bg-base tablet:hover:text-primary
                             tablet:hover:border-primary"
                            >
                                Source
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tablet:w-[30%]">
                    <div className="rounded-t-l">
                        <div className="flex items-center justify-center gap-4">
                            <img src={photoProject} alt="Ptoject picture" className='w-full rounded-t-l' />
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-4 rounded-b-lg
                        bg-neutral p-4 text-base"
                    >
                        <h1><span className='font-medium'>Title:</span> User Authentication App</h1>
                        <p><span className='font-medium'>Description:</span> This app allows users register and log in</p>
                        <p><span className='font-medium'>Tech used:</span> React, Tailwind, Nodejs and MongoDB</p>
                        <div className='flex justify-between'>
                            <button
                                className="rounded-3xl border-2 border-base bg-primary px-4 
                            py-2 text-base font-medium tablet:hover:bg-base tablet:hover:text-primary
                             tablet:hover:border-primary"
                            >
                                Demo
                            </button>
                            <button
                                className="rounded-3xl border-2 border-base bg-primary px-4 
                            py-2 text-base font-medium tablet:hover:bg-base tablet:hover:text-primary
                             tablet:hover:border-primary"
                            >
                                Source
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
