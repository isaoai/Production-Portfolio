export default function About(){
    return(
        <>
            <h1 className="text-5xl font-bold">Albert Pangan</h1>
            <p className="text-lg mt-4">Associate Software Technical Analyst | Cloud Engineer</p>

            {/* Social Media Links */}
            <div className="flex flex-row gap-4 mt-4">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    linkedin <span>↗</span>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    github <span>↗</span>
                </a>
            </div>

            <p className="mt-10">Reach me through my personal work email: </p>
            <p className="font-bold">✉ user@domain.com</p>

        </>
    )
}