import { technicalSkills } from "../constants/PersonalData";

export default function Stack() {

    const allSkills = Object.values(technicalSkills).flat();
    console.log(allSkills);

    // Random shuffle and select 8 items

    const randomSkills = [...allSkills].sort(() => 0.5 - Math.random()).slice(0, 8);

    return (
        <>
            <h1 className="font-bold">[01] stack</h1>
            <div className="flex flex-wrap gap-2 mt-2">
                {randomSkills.map((skill, index) => (
                    <p key={index} className="inline-block border border-gray-400 rounded-md px-3 py-1 text-sm">
                        {skill}
                    </p>
                ))}

                <p className="inline-block border border-gray-400 rounded-md px-3 py-1 text-sm">+ More...</p>
            </div>
        </>
    );
}