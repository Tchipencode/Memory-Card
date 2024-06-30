import { useState } from "react";

export default function SoftwaresForm({inputs, setInputs, handleOutputSoftwares, softwares}){
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
      const software=newInputs.software;
      const id=newInputs.id;
      handleOutputSoftwares(software, id);
      setNewInputs({software:""});

   }
   function handleAdd(){
      document.querySelector(".softwares-form").style.display="flex";
      document.querySelector(".btn-add-softwares").style.display="none";
      setInputs(inputs);
   }
   function handleCancel(){
      document.querySelector(".softwares-form").style.display="none";
      document.querySelector(".btn-add-softwares").style.display="flex";

   }
   function SoftwareList(){
      return(
         <ul id="softwares-list" className="softwares-list">
            {softwares.map((software, index)=>{
               return software? <li key={index} >
                  <h4 className="softwareList-software" >{software.software}</h4>
                  <div className="softwareList-btns">
                     <button className="softwareList-btn" type="button" id={index} onClick={handleEdit}>Edit</button>
                     <button className="softwareList-btn" type="button" id={index} onClick={handleDelete}>Delete</button>
                  </div>
               </li>:null;
            })}
         </ul>
      )
   }
   function handleEdit(e){
      const index=e.target.id;
      const inputValue=document.querySelector("#software");
      const item=softwares[index].software;
      inputValue.value=item;
      const newInputsCopy={...newInputs, software:item, id:index};
      setNewInputs(newInputsCopy);         
      console.log(newInputs);
      
      // const index=softwares.indexOf(software);
      // console.log(index);
      // for (let i=0; i<=softwares.length; i++){
      //    const item=softwares[index].software;
      //    inputValue.value=item;         
      //    console.log(item);

      // }
      
      console.log(index);
   }
   function handleDelete(e){
      const index=e.target.id;
      console.log(index);
      softwares.splice(index, 1);
      console.log(softwares);
      const inputsCopy={...inputs, softwares: softwares};
      setInputs(inputsCopy);
   }
   function handleButtonDisplay(softwares){
      for(let i=0; softwares.length; i++){
         if(softwares[i].software===null){
            softwares.splice(i, 1);
            document.querySelector(".softwaresList-softwares").style.display="none";
            console.log(document.querySelector(".softwaresList-softwares"));
         } else{
            document.querySelector(".softwaresList-softwares").style.display="inline-block";
         }
      }
      

   }
   return(
      <>
      <section className="softwares-section">
         <h3>SOFTWARES</h3>
         <SoftwareList  softwares={softwares} onLoad={handleButtonDisplay}/>
         <form className="softwares-form" onSubmit={handleSubmit}>
            <div className="softwares-input">
               <label htmlFor="software">
                  <p>Software</p>
                  <input type="text" name="software" value={newInputs.software} onChange={handleChange} id="software"/>
               </label>
               <div className="removeBtn">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={handleCancel}>Cancel</button>
               </div>
            </div>
         </form>
         <button className="btn-add-softwares" type="button" onClick={handleAdd}>Add More</button>
      </section>

      </>
   );

}





