/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

const itemsPerPage = 9;

/**
 * 
 * @param {*} tag This function will create an element based on the passed tag value 
 * @param {*} classList The class list that will be added to the tag
 * @param {*} insertElement The parent element that this tag will insert to
 * @returns 
 */
function createElement(tag, classList, insertElement) {
   const element = document.createElement(tag);

   if(classList.length != 0) {
      for(let classItem of classList) {
         element.classList.add(classItem);
      }
   }

   if(insertElement) {
      insertElement.insertAdjacentElement("beforeend", element);
   }
   return element;
}

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

/**
 * Show students in a form of cards
 * @param {*} list The list of student
 * @param {*} page Page number
 */
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   const studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";



   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex) {

         const listElement = createElement("li", ["student-item", "cf"]);

         const studentDetailsElement = createElement("div", ["student-details"], listElement);

         const imageElement = createElement("img", ["avatar"], studentDetailsElement);
         imageElement.src = list[i].picture.large;

         const headerThree = createElement("h3", [], studentDetailsElement);
         headerThree.innerText = `${list[i].name.first} ${list[i].name.last}`;

         const emailSpan = createElement("span", ["email"], studentDetailsElement);
         emailSpan.innerText = `${list[i].email}`;

         const joinedDetails = createElement("div", ["joined-details"], listElement);

         const dateSpan = createElement("span", ["date"], joinedDetails);
         dateSpan.innerText= `${list[i].registered.date}`;

         studentList.append(listElement);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

/**
 * Add the pagination functionality
 * @param {*} list The list of student
 */
function addPagination(list) {
   const numberOfPaginationButtons = Math.floor(list.length / itemsPerPage);
   const linkList = document.querySelector("ul.link-list");
   linkList.innerHTML = "";
   
   for(let i = 1; i <= numberOfPaginationButtons; i++) {
      let buttonList = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = i;
      button.type = "button";
      buttonList.append(button);
      linkList.insertAdjacentElement("beforeend", buttonList);
   }

   if(linkList.innerHTML !== "") {
      linkList.firstChild.firstChild.classList.add("active");
   }

   linkList.addEventListener("click", (e) => {
      if(e.target.tagName === "BUTTON") {
         for(let list of linkList.childNodes) {
            list.firstChild.classList.remove("active");
         }
         e.target.classList.add("active");
         showPage(list, e.target.innerText);
      }
   });
}

/**
 * Generate the student search textbox and button 
 */
function createStudentSearch() {
   const label = createElement("label", ["student-search"]);
   label.setAttribute("for", "search");

   const input = createElement("input", [], label);
   input.id = "search";
   input.placeholder = "Search by name...";

   const button = createElement("button", [], label);
   button.type = "button";

   const img = createElement("img", [], button);
   img.src = "img/icn-search.svg";
   img.alt = "Search icon";

   const header = document.getElementsByClassName("header")[0];
   header.insertAdjacentElement("beforeend", label);

   searchStudent(input, button);
}

/**
 * Search and then show the search result
 * @param {*} searchElement Student search textbox
 * @param {*} searchButtonElement Student search button
 */
function searchStudent(searchElement, searchButtonElement) {
   if(searchElement) {
      const performSearch = (target) => {
         const newData = [];
         const userInput = target.value.toLowerCase();
         for(let i =0; i < data.length; i++) {
            const studentName = data[i].name.first.toLowerCase() + " " + data[i].name.last.toLowerCase();
            if(studentName.includes(userInput)){
               newData.push(data[i]);
            }
         }
         showPage(newData, 1);
         addPagination(newData);

      }; 
      searchElement.addEventListener("keyup", (e) => {performSearch(e.target)});
      searchElement.addEventListener("submit", (e) => {performSearch(e.target)});
      searchButtonElement.addEventListener("click", (e) => {performSearch(searchButtonElement.previousSibling)});
   }
}

// Call functions
createStudentSearch();
showPage(data, 1);
addPagination(data);