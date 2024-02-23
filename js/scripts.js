import { Player } from "./player.js" 

const player = new Player()

// Nav buttons

Array.from(document.getElementsByClassName("page-button")).forEach(button => {
    // call change page based on page's "page" tag
    button.onclick = () => {
        changePage(button.getAttribute("page"))
    }
})

function changePage(page) {
    const pageElem = document.getElementById(page);
    // get each page and hide them
    Array.from(document.getElementsByClassName("page")).forEach(page => {
        page.style.display = "none"
    })
    // show new page
    pageElem.style.display = "flex"
}

console.log(player)