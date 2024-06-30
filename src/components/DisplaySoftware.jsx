export default function DisplaySoftware({softwares}){
   return(
      <>
      {/* <h3>SOFTWARES</h3> */}
      <ul className="cv-software-list">
         {softwares.map((software, index)=>{
            return software? <li key={index} className="software-item" >
               {software.software}  
            </li>:null;
         })}
      </ul>
      </>
   )
}