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
	alert(file.name);
}

