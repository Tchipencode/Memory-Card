
export default function DisplayEducation({educations}){
   return(
      <>
      <div className="cv-education">
         {/* <h3>EDUCATION</h3> */}
         {educations.map((education, index)=>{
            return education? <div className="cv-education-item" key={index}>
               <span>
                  <h4 className="school-name" >{education.studyTitle}</h4>
                  <h4 className="school-title">{education.graduatedYears}</h4>
               </span>
               <p className="graduated-years">{education.schoolName}</p>
            </div>:null;
         })}
      </div>
      </>
   )
}