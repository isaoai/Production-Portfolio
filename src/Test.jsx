import { workExperience, technicalSkills } from "./constants/PersonalData"
export default function AA(){
    const workExpList = workExperience.map(work => (
        <div key={work.jobId}>
            <h2 className="text-2xl font-bold">{work.jobTitle}</h2>
            <h3>{work.jobCompany}</h3>
            <h4>{work.jobHireDate}</h4>
            <ul>
                {work.jobResponsibility.map(responsbility => (
                    <li>{responsbility}</li>
                ))}
            </ul>
        </div>
    ));

    const skillsList = Object.entries(technicalSkills).map(([category, skills]) => (
        <div key={category}>
            
            <h3>{category}</h3>
            <ul>
                {skills.map(skills => (
                    <li key={skills}>{skills}</li>
                ))}
            </ul>
        
        </div>
    ));

    return(
        <>
            {workExpList}
            <h2>Technical Skills</h2>
            {skillsList}
        </>
    )
}