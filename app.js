// const wrapper = document.getElementById("wrapper");
// console.log(wrapper)
// Array.from(bookTitles)

// const bookTitles = document.getElementsByClassName("name");
// console.log(bookTitles)
// console.log(Array.isArray(bookTitles))


// console.log(Array.isArray(Array.from(bookTitles)))


// // const arrayResult = Array.isArray(Array.from(bookTitles))
// const arrayResult = Array.from(bookTitles)
//  arrayResult.forEach((element)=>{
//     // console.log(element)

//     console.log(element.textContent)

// });

// const lis = document.getElementsByTagName("li");
// console.log(lis)

// const pageBanner = document.querySelector("#page-banner");
// console.log(pageBanner)
// const pageBanner = document.querySelector("#page-banner");
// console.log(pageBanner)



// const bookToRead = document.querySelector(".title");
// console.log(bookToRead)

// const title = document.querySelector(".title")
// console.log(title)

// title.forEach(element =>{
//     console.log(title)
// });

// });


// const title = document.querySelector(".title")

// console.log(title.parentNode)

// const title = document.querySelector(".title")

// console.log(title.nextSibling)

// const titles = document.querySelector(".titles")

// console.log(titles.getElement)


// const pageBanner = document.querySelector("#page-banner");
// console.log(pageBanner. childElementCount)

// const pageBanner = document.querySelector("#page-banner");
// console.log(pageBanner.nextElementSibling)

// console.log(bookTitles)

// const bookTitles = document.querySelectorAll(".name");


// bookTitles.forEach(element =>{
//     console.log(element.textContent)

//     element.textContent += " test" +  "  chidinma";
// })

// const bookTitles = document.querySelectorAll(".name");
// console.log(bookTitles)


const bookList = document.querySelector("#book-list ul");
console.log(bookList)
 bookList.addEventListener("click", (event)=>{
   //  console.log(event)

   const deleteBtn = event.target.className

   if(deleteBtn == "delete"){
      const liTag =  event.target.parentNode;
      console.log(liTag);
      bookList.removeChild(liTag)

      console.log(liTag)
   }
   // console.log(deleteBtn)
 })
 const addBook = document.querySelector("#add-book input");
 console.log(addBook)
 addBook.addEventListener("click",(event)=>{
  const addABook = event.target.className
  if(addABook == "Add"){
    const input = event.target.parentNode;
    console.log(input);
    addBook.append(input)
  }
  
 })

