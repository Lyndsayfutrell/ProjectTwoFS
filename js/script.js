/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


// Variables
let ul = document.querySelector(".student-list");
const buttonUL = document.querySelector(".link-list");
let buttonLI;
let page = 1;
const itemsPerPage = 9;
const list = data;
let search = document.querySelector(".header");
let searchBar;

/*
Adds list of students based on page number given from button eventlistener
*/

function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   for(i=startIndex;i<endIndex;i++){
      const student = list[i];
      const name = student.name;
      ul.innerHTML +=
      `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
               <h3>${name.first} ${name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
      </li>`;
   }
}


/*
Function for adding buttons and event listener for buttons
*/

function addPagination() {
   const pages = Math.ceil(data.length / itemsPerPage);
   let buttonCount = 1;
   for(i=0;i<pages; i++){
      buttonUL.innerHTML += `
      <li>
      <button type="button" class="li-button">${buttonCount}</button>
      </li>
      `;
      buttonCount++;
   }
   buttonLI = document.getElementsByClassName("li-button");
   buttonLI[page-1].classList.add("active");

   buttonUL.addEventListener("click", e=> {
      const checkNaN = e.target.innerHTML * 1;
      if (isNaN(checkNaN)) {
      } else {
      buttonLI[page-1].classList.remove("active");
      page = e.target.innerHTML;
      buttonLI[page-1].classList.add("active");
      ul.innerHTML = "";
      showPage(data, page);
      }
   });
}

// Add search function

function addSearch() {
   search.innerHTML += 
   `<label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `;
   searchBar = document.querySelector("#search");
   searchBar.addEventListener("input", e => {
      const value = e.target.value.toLowerCase();
      const studentLI = document.querySelectorAll(".student-item");
   
      for (i = 0; i < data.length; i++) {
          if (!studentLI[i].innerHTML.toLowerCase().includes(value)) {
              studentLI[i].style.display="none";
          } else {
          studentLI[i].style.display = "";
          }}
   
   
   })

}


// Call functions

showPage(list, page);
addPagination();
addSearch();