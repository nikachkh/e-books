// Books API

function bookSearch() {
  let search = document.getElementById("filter").value;

  document.getElementById("results").innerHTML = "";

  console.log(search);

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,

    success: function(json) {
      let title = "";

      for (let i = 0; i < json.items.length; i++) {
        let item = json.items[i];

        title +=
          "<div id='item'>" +
          "<button onclick='addBook(\"" +
          item.volumeInfo.imageLinks.smallThumbnail +
          '", "' +
          item.volumeInfo.previewLink +
          '", "' +
          item.volumeInfo.title +
          "\")'class='APIButton' style='width:120px' >add book</button>" +
          "<a href=" +
          item.volumeInfo.previewLink +
          ">" +
          "<img src=" +
          item.volumeInfo.imageLinks.smallThumbnail +
          "/>" +
          "<br>" +
          item.volumeInfo.title +
          "<br></a>" +
          "Author: " +
          item.volumeInfo.authors[0] +
          "<br></div>";
      }

      document.getElementById("results").innerHTML =
        "<h2>" + title + "</h2><br>";
    }
  });
}

function addBook(img, lnk, ttl) {
  let saved = document.getElementById("saveBook");

  saved.innerHTML +=
    "<a href=" +
    lnk +
    ">" +
    "<img src=" +
    img +
    "/>" +
    "</a><br/>" +
    "<h3>" +
    ttl +
    "</h3><br>";
}

document.getElementById("button").addEventListener("click", bookSearch, false);
