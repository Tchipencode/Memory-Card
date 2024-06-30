import { useState } from "react";

export default function ExperienceForm({inputs, setInputs, handleOutputExperience, experiences}){
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
      const companyName=newInputs.companyName;
      const positionTitle=newInputs.positionTitle;
      const missions=newInputs.missions;
      const startDate=newInputs.startDate;
      const endDate=newInputs.endDate;
      handleOutputExperience(companyName, positionTitle, missions, startDate, endDate);
      setNewInputs({companyName:"",positionTitle:"", missions:"", startDate:"", endDate:""});

   }
   function handleAdd(){
      document.querySelector(".experience-form").style.display="flex";
      document.querySelector(".btn-add-exp").style.display="none";
      setInputs(inputs);
   }
   function handleCancel(){
      document.querySelector(".experience-form").style.display="none";
      document.querySelector(".btn-add-exp").style.display="flex";

   }
   function ExperienceList(){
      return(
         <ul id="experience-list" className="experience-list">
            {experiences.map((experience, index)=>{
               return experience? <li key={index} >
                  <h5 className="experienceList-studyTitle" >{experience.positionTitle}</h5>
                  <div className="experienceList-btns">
                     <button className="experienceList-btn" type="button" id={index} onClick={handleEdit}>Edit</button>
                     <button className="experienceList-btn" type="button" id={index} onClick={handleDelete}>Delete</button>
                  </div>
               </li>:null;
            })}
         </ul>

      )
   }
   function handleEdit(e){
      const index=e.target.id;
      const inputCompany=document.querySelector("#companyName");
      const inputPosition=document.querySelector("#positionTitle");
      const inputMissions=document.querySelector("#missions");
      const inputStartDate=document.querySelector("#startDate");
      const inputEndDate=document.querySelector("#endDate");
      const companyItem=experiences[index].companyName;
      const positionItem=experiences[index].positionTitle;
      const missionsItem=experiences[index].missions;
      const startItem=experiences[index].startDate;
      const endItem=experiences[index].endDate;
      inputCompany.value=companyItem;
      inputPosition.value=positionItem;
      inputMissions.value=missionsItem;
      inputStartDate.value=startItem;
      inputEndDate.value=endItem;
      const newInputsCopy={...newInputs, companyName:companyItem, positionTitle:positionItem, missions:missionsItem, startDate:startItem, endDate:endItem, id:index};
      setNewInputs(newInputsCopy);         
      console.log(newInputs);
   }
   function handleDelete(e){
      const index=e.target.id;
      console.log(index);
      experiences.splice(index, 1);
      console.log(experiences);
      const inputsCopy={...inputs, experience: experiences};
      setInputs(inputsCopy);
   }
   function handleButtonDisplay(experiences){
      for(let i=0; experiences.length; i++){
         if(experiences[i].companyName===null){
            experiences.splice(i, 1);
            document.querySelector(".experience-list").style.display="none";
            console.log(document.querySelector(".experience-list"));
         } else{
            document.querySelector(".experience-list").style.display="inline-block";
         }
      }
   }
   return(
      <>
      <section className="experience-section">
         <h3>EXPERIENCE</h3>
         <ExperienceList  experiences={experiences} onLoad={handleButtonDisplay}/>
         <form className="experience-form" onSubmit={handleSubmit}>
            <div className="experience-input">
               <label htmlFor="companyName">
                  <p>Company Name</p>
                  <input type="text" name="companyName" value={newInputs.companyName} onChange={handleChange} id="companyName"/>
               </label>
               <label htmlFor="positionTitle">
                  <p>Position</p>
                  <input type="text" name="positionTitle" value={newInputs.positionTitle} onChange={handleChange} id="positionTitle"/>
               </label>
               <label htmlFor="missions">
                  <p>Missions</p>
                  <textarea name="missions" value={newInputs.missions} onChange={handleChange} id="missions" cols="30" rows="10"></textarea>
               </label>
               <label htmlFor="startDate">
                  <p>Start date</p>
                  <input type="number" name="startDate" value={newInputs.startDate} onChange={handleChange} id="startDate"/>
               </label>
               <label htmlFor="endDate">
                  <p>End date</p>
                  <input type="number" name="endDate" value={newInputs.endDate} onChange={handleChange} id="endDate" />
               </label>
               <div className="removeBtn">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={handleCancel}>Cancel</button>
               </div>
            </div>
         </form>
         <button className="btn-add-exp" type="button" onClick={handleAdd}>Add More</button>
      </section>

      </>
   );

}





