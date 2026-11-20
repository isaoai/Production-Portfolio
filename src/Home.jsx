import About from "./About";

export default function Home(){

    return(
        <>
            {/* Layout Structure */}
            <div className="flex flex-row min-w-screen min-h-screen items-center justify-center bg-[#F4EEEE] gap-4">

                {/* Left Side */}

                <div className="flex flex-col justify-start w-1/2 h-full bg-[#F4EEEE]">
                    <About/>
                </div>

            </div>
        </>
    );
}