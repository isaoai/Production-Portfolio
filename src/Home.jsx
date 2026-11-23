
import About from "./About";
import Stack from "./right-side/Stack";

export default function Home() {
    return (
        <div className="w-full min-h-screen px-6 md:px-12 lg:px-16 flex flex-col md:flex-row md:gap-0">

            {/* Left Side - Fixed at Center of Left Half */}
            <aside className="w-full p-6 md:fixed md:top-0 md:left-0 md:w-1/2 md:h-screen md:flex md:items-center md:justify-center md:pl-16 lg:pl-24 md:pr-8">
                <div className="w-full max-w-xl">
                    <About />
                </div>
            </aside>

            {/* Right Side - Normal Browser Scrolling */}
            <main className="w-full p-6 md:p-10 md:ml-[50%] md:w-1/2 flex flex-col gap-2 md:pl-3 md:pr-0 lg:pl-6 lg:pr-0  md:items-center md:justify-center">

                <div>
                    <Stack />
                </div>

                <div>
                    <h1 className="font-bold">[02] experience</h1>
                    <p>Welcome to my portfolio website! Here you can find information about my work experience, technical skills, and projects.</p>
                </div>

                <div>
                    <h1 className="font-bold">[03] certifications</h1>
                    <p>Welcome to my portfolio website! Here you can find information about my work experience, technical skills, and projects.</p>
                </div>

                <div>
                    <h1 className="font-bold">[04] projects</h1>
                    <p>Welcome to my portfolio website! Here you can find information about my work experience, technical skills, and projects.</p>
                </div>

                <div>
                    <h1 className="font-bold">[04] projects</h1>
                    <p>Welcome to my portfolio website! Here you can find information about my work experience, technical skills, and projects.</p>
                </div>

                <div>
                    <h1 className="font-bold">[04] projects</h1>
                    <p>Welcome to my portfolio website! Here you can find information about my work experience, technical skills, and projects.</p>
                </div>

                <div>
                    <h1 className="font-bold">[04] projects</h1>
                    <p>Welcome to my portfolio website! Here you can find information about my work experience, technical skills, and projects.</p>
                </div>

                <div>
                    <h1 className="font-bold">[04] projects</h1>
                    <p>Welcome to my portfolio website! Here you can find information about my work experience, technical skills, and projects.</p>
                </div>

                <div>
                    <h1 className="font-bold">[04] projects</h1>
                    <p>Welcome to my portfolio website! Here you can find information about my work experience, technical skills, and projects.</p>
                </div>

                <div>
                    <h1 className="font-bold">[04] projects</h1>
                    <p>Welcome to my portfolio website! Here you can find information about my work experience, technical skills, and projects.</p>
                </div>

                

            </main>
        </div>
    );
}
