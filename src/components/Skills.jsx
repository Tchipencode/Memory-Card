import { useState } from "react";

export default function SkillsForm({inputs, setInputs, handleOutputSkills, allSkills}){
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
      const skill=newInputs.skill;
      handleOutputSkills(skill);
      setNewInputs({skill:""});

   }
   function handleAdd(){
      document.querySelector(".skills-form").style.display="flex";
      document.querySelector(".btn-add-skills").style.display="none";
      setInputs(inputs);
   }
   function handleCancel(){
      document.querySelector(".skills-form").style.display="none";
      document.querySelector(".btn-add-skills").style.display="flex";

   }
   function SkillsList(){
      return(
         <ul id="skills-list" className="skills-list">
            {allSkills.map((skills, index)=>{
               return skills? <li key={index} >
                  <h4 className="skillsList-skills" >{skills.skill}</h4>
                  <div className="skillsList-btns">
                     <button className="skillsList-btn" type="button" id={index} onClick={handleEdit}>Edit</button>
                     <button className="skillsList-btn" type="button" id={index} onClick={handleDelete}>Delete</button>
                  </div>
               </li>:null;
            })}
         </ul>
      )
   }
   function handleEdit(e){
      const index=e.target.id;
      const inputValue=document.querySelector("#skill");
      const item=allSkills[index].skill;
      inputValue.value=item;
      const newInputsCopy={...newInputs, skill:item, id:index};
      setNewInputs(newInputsCopy);         
      console.log(newInputs);
   }
   function handleDelete(e){
      const index=e.target.id;
      console.log(index);
      allSkills.splice(index, 1);
      console.log(allSkills);
      const inputsCopy={...inputs, allSkills: allSkills};
      setInputs(inputsCopy);
   }
   function handleButtonDisplay(allSkills){
      for(let i=0; allSkills.length; i++){
         if(allSkills[i].skill===null){
            allSkills.splice(i, 1);
            document.querySelector(".skillsList-skills").style.display="none";
            console.log(document.querySelector(".skillsList-skills"));
         } else{
            document.querySelector(".skillsList-skills").style.display="inline-block";
         }
      }
      

   }
   return(
      <>
      <section className="skills-section">
         <h3>SKILLS</h3>
         <SkillsList  allSkills={allSkills} onLoad={handleButtonDisplay}/>
         <form className="skills-form" onSubmit={handleSubmit}>
            <div className="skills-input">
               <label htmlFor="skill">
                  <p>Skill</p>
                  <input type="text" name="skill" value={newInputs.skill} onChange={handleChange} id="skill"/>
               </label>
               <div className="removeBtn">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={handleCancel}>Cancel</button>
               </div>
            </div>
         </form>
         <button className="btn-add-skills" type="button" onClick={handleAdd}>Add More</button>
      </section>

      </>
   );

}





