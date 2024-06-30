import { useState } from "react";
// import DisplayEducation from "./DisplayEducation";


export default function EducationForm({inputs, setInputs, handleOutputEducation, educations}){
   const [newInputs, setNewInputs]=useState({});

   function handleChange(event){
      const name=event.target.name;
      const value=event.target.value;
      setNewInputs((values)=>({...values, [name]:value}));
      console.log(newInputs);
   }
   function handleSubmit(event){
      event.preventDefault();
      console.log("form submitted");
      const schoolName=newInputs.schoolName;
      const studyTitle=newInputs.studyTitle;
      const graduatedYears=newInputs.graduatedYears;
      handleOutputEducation(schoolName, studyTitle, graduatedYears);
      setNewInputs({schoolName:"",studyTitle:"",graduatedYears:""});

   }
   function handleAdd(){
      document.querySelector(".education-form").style.display="flex";
      document.querySelector(".btn-add-edu").style.display="none";
      setInputs(inputs);
   }
   function handleCancel(){
      document.querySelector(".education-form").style.display="none";
      document.querySelector(".btn-add-edu").style.display="flex";

   }
   function EducationList(){
      return(
         <ul id="education-list" className="education-list">
            {educations.map((education, index)=>{
               return education? <li key={index} >
                  <h5 className="educationList-studyTitle" >{education.studyTitle}</h5>
                  <div className="educationList-btns">
                     <button className="educationList-btn" type="button" id={index} onClick={handleEdit}>Edit</button>
                     <button className="educationList-btn" type="button" id={index} onClick={handleDelete}>Delete</button>
                  </div>
               </li>:null;
            })}
         </ul>

      )
   }
   function handleEdit(e){
      const index=e.target.id;
      const inputSchoolName=document.querySelector("#schoolName");
      const inputStudyTitle=document.querySelector("#studyTitle");
      const inputGraduatedYears=document.querySelector("#graduatedYears");
      const schoolItem=educations[index].schoolName;
      const studyItem=educations[index].studyTitle;
      const graduatedYearsItem=educations[index].graduatedYears;
      inputSchoolName.value=schoolItem;
      inputStudyTitle.value=studyItem;
      inputGraduatedYears.value=graduatedYearsItem;
      const newInputsCopy={...newInputs, schoolName:schoolItem, studyTitle:studyItem, graduatedYears:graduatedYearsItem, id:index};
      setNewInputs(newInputsCopy);         
      console.log(newInputs);
   }
   function handleDelete(e){
      const index=e.target.id;
      console.log(index);
      educations.splice(index, 1);
      console.log(educations);
      const inputsCopy={...inputs, education: educations};
      setInputs(inputsCopy);
   }
   function handleButtonDisplay(educations){
      for(let i=0; educations.length; i++){
         if(educations[i].schoolName===null){
            educations.splice(i, 1);
            document.querySelector(".education-list").style.display="none";
            console.log(document.querySelector(".education-list"));
         } else{
            document.querySelector(".education-list").style.display="inline-block";
         }
      }
   }
   return(
      <>
      <section className="education-section">
         <h3>EDUCATION</h3>
         <EducationList  educations={educations} onLoad={handleButtonDisplay}/>
         <form className="education-form" onSubmit={handleSubmit}>
            <div className="education-input">
               <label htmlFor="schoolName">
                  <p>School Name</p>
                  <input type="text" name="schoolName" value={newInputs.schoolName} className="schoolName" onChange={handleChange} id="schoolName"/>
               </label>
               <label htmlFor="studyTitle">
                  <p>Study title</p>
                  <input type="text"name="studyTitle" value={newInputs.studyTitle} onChange={handleChange} id="studyTitle"/>
               </label>
               <label htmlFor="graduatedYears">
                  <p>Years graduated</p>
                  <input type="number" name="graduatedYears" value={newInputs.graduatedYears} onChange={handleChange} id="graduatedYears"/>
               </label>
            </div>

            <div className="removeBtn">
               <button type="submit">Submit</button>
               <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
         </form>
         <button className="btn-add-edu" type="button" onClick={handleAdd}>Add More</button>
      </section>
      </>
   )
}

