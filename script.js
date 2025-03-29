let status = document.getElementById("status");
let enterBtn = document.getElementById("enterBtn")

function btnClick(){
	// status.style.backgroundColor = "black";
	// status.style.color = "white";
	status.innerHTML = "<h1>Entered Metaverse</h1>"
}
enterBtn.addEventListener("click", btnClick)
