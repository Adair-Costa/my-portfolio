function Services() {
    return (
        <div>
            <h3
                className="xs:font-thin mb-5 text-center text-xl font-extrabold
            md:font-extrabold"
            >
                Services
            </h3>
            <ul
                className="xs:text-base flex flex-col items-center justify-center
            gap-5 text-lg opacity-50 lg:text-lg"
            >
                <li>
                    <a href="#" className="hover:text-logo hover:transition-all">
                        Development
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-logo hover:transition-all">
                        Web & Mobile design
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Services
