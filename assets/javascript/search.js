let query = document.querySelector('.query');
let searchbtn = document.querySelector('.search-btn');

searchbtn.addEventListener("click", () => {
    let url ='https://www.google.com/search?q='+ query.value;
    window.open(url,'_self');
})
   