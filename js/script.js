/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
const itemsPerPage = 20;


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;

   const studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";
   const studentListUl = document.querySelector(".student-list");

   function createElementAndAddClasses(tag, classList) {
      const element = document.createElement(tag);
      element.classList.add(classList.join(", "));
   }

   for(let i = 0; i <= list.length; i++) {
      if(i >= startIndex && i < endIndex) {
         const listElement = document.createElement("li");
         listElement.classList.add("student-item", "cf");

         const studentDetailsElement = document.createElement("div");
         studentDetailsElement.classList.add("student-details");
         listElement.insertAdjacentElement("beforeend", studentDetailsElement);

         const imageElement = document.createElement("img");
         imageElement.classList.add("avatar");
         imageElement.src = list[i].picture.large;
         studentDetailsElement.insertAdjacentElement("beforeend", imageElement);

         const headerThree = document.createElement("h3");
         headerThree.innerText = `${list[i].name.first} ${list[i].name.last}`;
         studentDetailsElement.insertAdjacentElement("beforeend", headerThree);

         const emailSpan = document.createElement("span");
         emailSpan.classList.add("email");
         emailSpan.innerText = `${list[i].email}`;
         studentDetailsElement.insertAdjacentElement("beforeend", emailSpan);

         const joinedDetails = document.createElement("div");
         joinedDetails.classList.add("joined-details");
         listElement.insertAdjacentElement("beforeend", joinedDetails);

         const dateSpan = document.createElement("span");
         dateSpan.classList.name = "date"
         dateSpan.innerText= `${list[i].registered.date}`;
         joinedDetails.insertAdjacentElement("beforeend", dateSpan);

         studentListUl.append(listElement);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
showPage(data, 1);