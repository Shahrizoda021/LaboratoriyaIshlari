document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("author").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("year").value = "";
  document.getElementById("lang").value = "";
  document.getElementById("onlyEbook").checked = false;
  document.getElementById("onlyAudio").checked = false;
  document.getElementById("onlyFree").checked = false;

  displayBooks(books);});