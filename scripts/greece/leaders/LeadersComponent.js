const LeadersComponent = leaders => {
  return `
  <section class="content__leaders highlight">
   <h3>${leaders.title}</h3>
   <button id="open--${leaders.title}">Details</button>
     <dialog class="content__leaders">
     <span class="thumbnail"> 
     <li>${leaders.headOfState}</li>
     <span>
       <img class="info-pic-size" src="${leaders.image}" alt="${leaders.headOfState}" />
       <br />
       <h4>${leaders.headOfState}</h4>
       <p>${leaders.leaders_info}</p>
     </span>
   </span><br><br><br>
       <button id="close--${leaders.title}">Close</button>
     </dialog>
  </section>

  `;
};

export default LeadersComponent;
