// Setting up button functions 
document.getElementById("exportClassFile").onclick = exportClassFile_OnClick;
document.getElementById("importClassFile").onchange = importClassFile_OnChange;

//
function exportClassFile_OnClick(){
    SaveAsFile("text","filename.txt","text/plain;charset=utf-8");
}

//
function importClassFile_OnChange(){
	var file = document.getElementById("importClassFile").files[0];
	var fr = new FileReader();
	fr.readAsText(file);
	fr.onload = function (evt) {
		alert(evt.target.result); // whole file as text
	}
	var fr2 = new FileReader();
	fr2.readAsBinaryString(file);
	fr2.onload = function (evt) {
		alert("0x" + evt.target.result.charCodeAt(0).toString(16)); // byte 0
	}

}

