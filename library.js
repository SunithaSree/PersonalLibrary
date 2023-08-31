class Book {
    constructor(title, author, yearPublished, readStatus) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.readStatus = readStatus;
        this.getSummary = function () {
            return `The Book ${this.title} written by ${author} was published in the year ${this.yearPublished} is ${readStatus}`;
        };
    }
}
function createBook(){
    let title=prompt("What is the title of the book?");
    let author=prompt("Who is the author?");
    let yearPublished=prompt("Publication Year?");
    let readStatus=confirm("Have you read this book?");
    if(readStatus==true){
        readStatus="read"
    }
    else{
        readStatus="unread";
    }
    let b=new Book(title,author,yearPublished,readStatus);
    return b;
}
// createBook();
let bookarray=[];
function addBook(){
    let b=createBook();
    bookarray.push(b);
    //console.log(bookarray);
    let table=document.getElementById("btable");
    let row=table.insertRow(-1);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    cell1.innerHTML=`${b.title}`;
    cell2.innerHTML=`${b.author}`;
    cell3.innerHTML=`${b.yearPublished}`;
    cell4.innerHTML=`${b.readStatus}`;
}
function removelastBook(){
    bookarray.pop();
    document.getElementById("btable").deleteRow(-1);
    alert("The last Book was removed");
}
function addBookFront(){
    let b=createBook();
    bookarray.unshift(b);
    let table=document.getElementById("btable");
    let row=table.insertRow(1);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    cell1.innerHTML=`${b.title}`;
    cell2.innerHTML=`${b.author}`;
    cell3.innerHTML=`${b.yearPublished}`;
    cell4.innerHTML=`${b.readStatus}`;
}
function removeFirstBook(){
    bookarray.shift();
    document.getElementById("btable").deleteRow(1);
    alert("The first book was removed");
}
//extra
//title array
function getAllTitles(){
    let titles=(book)=>book.title;
    let titleArray=bookarray.map(titles);
    console.log(titleArray);
    document.getElementById("filter").innerHTML="Available Book Titles";
   let titletable=document.getElementById("filtertable");
   for(let i=0;i<titleArray.length;i++){
   let trow=titletable.insertRow(0);
   let cell1=trow.insertCell(0);
   cell1.innerHTML=`${titleArray[i]}`;
   }
}
//filtering by author
function getBooksByAuthor(){
    let authorname=prompt("What is the Author name?");
    let bookbyone=(book)=>book.author==authorname;
    let bookbyoneArr=bookarray.filter(bookbyone);
    console.log(bookbyoneArr);
    document.getElementById("filter").innerHTML="Filtered by Author";
    let authorfilter=document.getElementById("filtertable");
    let headrow=authorfilter.insertRow(0);
    let cell1=headrow.insertCell(0);
    let cell2=headrow.insertCell(1);
    let cell3=headrow.insertCell(2);
    let cell4=headrow.insertCell(3);
    cell1.innerHTML="<b>Title</b>";
    cell2.innerHTML="<b>Author</b>";
    cell3.innerHTML="<b>Year of Publication<b>";
    cell4.innerHTML="<b>ReadStatus<b>";
    for(let i=0;i<bookbyoneArr.length;i++){
    let row=authorfilter.insertRow(1);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    cell1.innerHTML=`${bookbyoneArr[i].title}`;
    cell2.innerHTML=`${bookbyoneArr[i].author}`;
    cell3.innerHTML=`${bookbyoneArr[i].yearPublished}`;
    cell4.innerHTML=`${bookbyoneArr[i].readStatus}`;
    }
}
//totalbooks in a year
function getBooksbyPublishedaYear(){
    let searchyear=prompt("Enter the year?");
    let bookbyyear=(book)=>book.yearPublished===searchyear;
    let bookbyyearArr=bookarray.filter(bookbyyear);
    let bcount=bookbyyearArr.length;
    document.getElementById("filter").innerHTML=`${bcount} books were/was  published in that year`;
}
//remove book by title
function removeByBookbyTitle(){
    let removetitle=prompt("Enter title of the book:");
    let index;
    for(let i=0;i<bookarray.length;i++){
    if(bookarray[i]==removetitle){
    index=bookarray.indexOf(bookarray[i]);
    bookarray.splice(index,1);
    }
    }
}
//filtering book by status
function getBookByReadStatus(){
    let givenstatus=prompt("Enter Status?");
    let filterStatus=(book)=>book.readStatus==givenstatus;
    let BookByStatusArr=bookarray.filter(filterStatus);
    document.getElementById("filter").innerHTML="Filtered By Status"
    let authorfilter=document.getElementById("filtertable");
    let headrow=authorfilter.insertRow(0);
    let cell1=headrow.insertCell(0);
    let cell2=headrow.insertCell(1);
    let cell3=headrow.insertCell(2);
    let cell4=headrow.insertCell(3);
    cell1.innerHTML="<b>Title</b>";
    cell2.innerHTML="<b>Author</b>";
    cell3.innerHTML="<b>Year of Publication</b>";
    cell4.innerHTML="<b>ReadStatus</b>";
    for(let i=0;i<BookByStatusArr.length;i++){
    let row=authorfilter.insertRow(1);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
    cell1.innerHTML=`${BookByStatusArr[i].title}`;
    cell2.innerHTML=`${BookByStatusArr[i].author}`;
    cell3.innerHTML=`${BookByStatusArr[i].yearPublished}`;
    cell4.innerHTML=`${BookByStatusArr[i].readStatus}`;
    }
}
function moreopts(){
    document.getElementById("mops").innerHTML=`<button
    type="button"
    class="btn btn-primary mt-4"
    id="titlearr"
    style="font-family: sans-serif"
    onclick="getAllTitles()"
  >
    GetAllTitles
  </button>
  <button
    type="button"
    class="btn btn-primary mt-4"
    id="authorfilter"
    style="font-family: sans-serif"
    onclick="getBooksByAuthor()"
  >
    FilterbyAuthor
  </button>
  <button
    type="button"
    class="btn btn-primary mt-4"
    id="bcount"
    style="font-family: sans-serif"
    onclick="getBooksbyPublishedaYear()"
  >
    YearPublished
  </button>
  <button
    type="button"
    class="btn btn-primary mt-4"
    id="rem"
    style="font-family: sans-serif"
    onclick="removeByBookbyTitle()"
  >
    RemoveBookByTitle
  </button>
  <button
    type="button"
    class="btn btn-primary mt-4"
    id="rem"
    style="font-family: sans-serif"
    onclick="getBookByReadStatus()"
  >
    getBookByStatus
  </button> `
}