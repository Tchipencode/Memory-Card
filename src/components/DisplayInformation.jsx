export default function DisplayInformation({informations}){
   return(
      <>
      <div className="cv-information">
         <h2 className="info-firstName" >{informations.firstName +" "}{informations.lastName}</h2>
         <h4 className="info-qualification">{informations.qualification}</h4>
         <p className="info-email">{informations.email}</p>
         <p className="info-telephone">{informations.telephone}</p>
      </div>
      </>
   )
}