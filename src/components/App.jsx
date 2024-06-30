// import { useState } from "react";
import InformationForm from "./Information.jsx"
import ExperienceForm from "./Experience.jsx"
import { useState } from "react";
import EducationForm from "./Education.jsx";
import DisplayEducation from "./DisplayEducation.jsx";
import DisplayExperience from "./DisplayExperience.jsx";
import SkillsForm from "./Skills.jsx";
import DisplaySkills from "./DisplaySkills.jsx";
import DisplaySoftware from "./DisplaySoftware.jsx";
import SoftwaresForm from "./Softwares.jsx";

export default function App(){
   const [inputs, setInputs]=useState({
      information:{
         firstName:"",
         lastName:"",
         qualification:"",
         email:"",
         telephone:"",
         location:"",
         linkedIn:"",
         summary:"",
      },
      education:[{
         schoolName:"",
         studyTitle:"",
         graduatedYears:"",

      }],
      skills:[{
         skill:"",
      }],
      softwares:[{
         software:"",
      }],
      experience:[{
         companyName:"",
         positionTitle:"",
         missions:"",
         startDate:"",
         endDate:"",
      }]
   });


   function handleAdd(){
      document.getElementsByClassName("education-input").style.display="flex";
   }
   function handleOutputInformation(firstName, lastName, qualification, email, telephone, location, linkedIn, summary){
      const inputsCopy={...inputs, information:{firstName:firstName, lastName:lastName, qualification:qualification,email:email, telephone:telephone, location:location,linkedIn:linkedIn, summary:summary}};
      setInputs(inputsCopy);
      console.log(inputs);  
   }
   function handleOutputEducation(schoolName, studyTitle, graduatedYears){
      const inputsCopy={...inputs};
      inputsCopy.education.push({schoolName:schoolName, studyTitle:studyTitle, graduatedYears:graduatedYears});
      setInputs(inputsCopy);
      console.log(inputs);
   }
   function handleOutputSkills(skill){
      const inputsCopy={...inputs};
      inputsCopy.skills.push({skill:skill});
      setInputs(inputsCopy);
      console.log(inputs);  
   }
   function handleOutputSoftwares(software, id){
      const inputsCopy={...inputs};
      inputsCopy.softwares.push({software:software});
      setInputs(inputsCopy);
      console.log(inputs);
      // for(let i=0; i<inputs.softwares.length; i++){
      //    // console.log(inputs.softwares.length);
      //    const index=inputs.softwares.indexOf(i);
      //    console.log(index);
      //    if(id===index){
      //       inputsCopy.softwares.push({software:software});
      //       setInputs(inputsCopy);
      //       console.log(inputs);
      //    }else{
      //       inputsCopy.softwares.push({software:software});
      //       setInputs(inputsCopy);
      //       console.log(inputs);
      //    }
      // }
   }
   function handleOutputExperience(companyName, positionTitle, missions, startDate, endDate){
      const inputsCopy={...inputs};
      inputsCopy.experience.push({companyName:companyName, positionTitle:positionTitle, missions:missions, startDate:startDate, endDate:endDate});
      setInputs(inputsCopy);
      console.log(inputs);  
   }
   return(
      <>
      <header>
         <h1>My curriculum</h1>
      </header>
      <hr/>
      <main>
         <div className="form-inputs">
            <InformationForm inputs={inputs} setInputs={setInputs} informations={inputs.information} handleOutputInformation={handleOutputInformation} />
            <EducationForm inputs={inputs} setInputs={setInputs} educations={inputs.education} handleOutputEducation={handleOutputEducation} />
            <SkillsForm inputs={inputs} setInputs={setInputs} allSkills={inputs.skills} handleOutputSkills={handleOutputSkills} />
            <SoftwaresForm inputs={inputs} setInputs={setInputs} softwares={inputs.softwares} handleOutputSoftwares={handleOutputSoftwares} />
            <ExperienceForm inputs={inputs} setInputs={setInputs} experiences={inputs.experience} handleOutputExperience={handleOutputExperience} />
         </div>
         <div className="form-output">
            <div className="form-output-print">
               <div className="cv-output-header">
                  <h2>{inputs.information.firstName +" "}{inputs.information.lastName}</h2>
                  <h3 className="info-qualification">{inputs.information.qualification}</h3>
               </div>
               <div className="cv-output-main">
                  <div className="cv-output-left-side">
                     <div className="contact">
                        <h4>CONTACT</h4>
                        <div className="contact-items">
                           <div className="contact-items-el">
                              <img src="./src/assets/phone-outline.svg" alt="phone-icon" height={21} width={21}/>
                              <p>{inputs.information.telephone}</p>
                           </div>
                           <div className="contact-items-el">
                              <img src="./src/assets/email-outline.svg" alt="email-icon" height={21} width={21}/>
                              <p>{inputs.information.email}</p>
                           </div>
                           <div className="contact-items-el">
                              <img src="./src/assets/map-marker-outline.svg" alt="map-icon" height={21} width={21}/>
                              <p>{inputs.information.location}</p>
                           </div>
                           <div className="contact-items-el">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="linkedIn-icon" height={21} width={21}/>
                              <p>{inputs.information.linkedIn}</p>
                           </div>  
                        </div>
                     </div>
                     <div className="softwares">
                        <h3>SOFTWARES</h3>
                        <DisplaySoftware softwares={inputs.softwares}/>
                     </div>
                     <div className="skills">
                        <h3>SKILLS</h3> 
                        <DisplaySkills allSkills={inputs.skills}/>                
                     </div>
                  </div>
                  <div className="cv-output-right-side">
                     <div className="summary">
                        <h3>SUMMARY</h3>
                        <p>{inputs.information.summary}</p>
                     </div>
                     <div className="experiences">
                        <h3>EXPERIENCE</h3>
                        <DisplayExperience experiences={inputs.experience}/>
                     </div>
                     <div className="education">
                        <h3>EDUCATION</h3>
                        <DisplayEducation educations={inputs.education}/>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </main>
      </>
   )

}