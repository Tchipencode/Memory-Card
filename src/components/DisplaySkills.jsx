export default function DisplaySkills({allSkills}){
   return(
      <>
      {/* <h3>SKILLS</h3> */} 
      <ul className="cv-skills-list">
         {allSkills.map((skills, index)=>{
            return skills? <li key={index} className="skill-item" >
               {skills.skill}  
            </li>:null;
         })}
      </ul>
      </>
   )
}