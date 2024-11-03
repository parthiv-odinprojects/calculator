let displaycontent = "";
function appendtodisplay(button) {
    displaycontent += button.textContent;
    console.log(displaycontent);
    document.getElementById("display").textContent = displaycontent;
}
function clearr() {
    displaycontent = "";
    document.getElementById("display").textContent = displaycontent;
}
function deleteitem() {
    displaycontent = displaycontent.slice(0, -1);
    document.getElementById("display").textContent = displaycontent;
}
function calculatee() {
    try {
        displaycontent = eval(displaycontent);
        document.getElementById("display").textContent = displaycontent;
    }
    catch {
        displaycontent = "";
    }
}