const dataSelected=[];
export default function handleScore(){
   const itemDiv=document.querySelector(".card-item");
   const itemTitle=document.querySelector(".card-item > h3");
   const itemName=itemTitle.textContent;
   console.log(itemName);
   dataSelected.push[itemName];
   let score=0;
   for (let i=0; i<dataSelected.length; i++){
      if(!itemName){
         score+=1;
         console.log(score);
      } else{
         score=0;
         console.log(score);
      }
   }
}