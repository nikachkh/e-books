// Search Modal

// Get the modal

let modal = document.getElementById('myModal');

// click that opens the modal

let click = document.getElementById("searchModal");

click.onclick = function () {

    modal.style.display = "block";

}

// closes the modal

let span = document.getElementsByClassName("closed")[0];

span.onclick = function () {

    modal.style.display = "none";

}

// anywhere outside of the modal, close it

window.onclick = function (event) {

    if (event.target == modal) {

        modal.style.display = "none";

    }
}