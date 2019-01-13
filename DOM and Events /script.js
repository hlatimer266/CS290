var newTable = document.createElement("table");
newTable.style.borderWidth = "1px";
newTable.style.borderColor = "#000";
newTable.style.borderStyle = "solid";

var newRow = document.createElement("tr");

for(var i = 0; i < 4; i++){
    var newRowHeader = document.createElement("th");
    newRowHeader.textContent = 'Header '+(i+1);
	newRowHeader.style.borderWidth = "1px";
	newRowHeader.style.borderColor = "#000";
	newRowHeader.style.borderStyle = "solid";
    newRow.appendChild(newRowHeader);
}
newTable.appendChild(newRow);

for(var i = 0; i < 3; i++){
	var newRow = document.createElement("tr");
	newRow.id = i+1;
	for(var j = 0; j < 4; j++){
		var newRowDetail = document.createElement("td");
		newRowDetail.textContent = (i+1).toString()+', '+(j+1).toString();
		newRowDetail.id = (i+1).toString()+', '+(j+1).toString();
		newRowDetail.style.borderWidth = "1px";
		newRowDetail.style.borderColor = "#000";
		newRowDetail.style.borderStyle = "solid";
		newRow.appendChild(newRowDetail);
	}
    
	newTable.appendChild(newRow);
}

document.getElementById("body").appendChild(newTable);

var leftButton = document.createElement("button");
leftButton.textContent = 'left';
leftButton.id = 'leftBtn';
document.getElementById("body").appendChild(leftButton);

var rightButton = document.createElement("button");
rightButton.textContent = 'right';
rightButton.id = 'rightBtn';
document.getElementById("body").appendChild(rightButton);

var upButton = document.createElement("button");
upButton.textContent = 'up';
upButton.id = 'upBtn';
document.getElementById("body").appendChild(upButton);

var downButton = document.createElement("button");
downButton.id = 'downButton';
downButton.textContent = 'down';
document.getElementById("body").appendChild(downButton);

var markButton = document.createElement("button");
markButton.id = 'markButton';
markButton.textContent = 'mark';
document.getElementById("body").appendChild(markButton);


var colNum = 0;
var rowNum = 1;
document.getElementById("1").children[colNum].style.borderWidth = "3px";

function rightMove(event){
		
	if (colNum <= 3){
		if(colNum == 0){
		colNum++;
		document.getElementById(rowNum.toString()).children[colNum].style.borderWidth = "3px";
		document.getElementById(rowNum.toString()).children[colNum-1].style.borderWidth = "1px";
		} else{
			if(colNum < 3){
				colNum++;
			}
			document.getElementById(rowNum.toString()).children[colNum].style.borderWidth = "3px";
			document.getElementById(rowNum.toString()).children[colNum-1].style.borderWidth = "1px";
		}
	}	
	
}

function leftMove(event){
	if (colNum > 0){
		if (colNum == 4){
			colNum--;
			document.getElementById(rowNum.toString()).children[colNum-1].style.borderWidth = "3px";
			document.getElementById(rowNum.toString()).children[colNum].style.borderWidth = "1px";	
		} else{
				document.getElementById(rowNum.toString()).children[colNum-1].style.borderWidth = "3px";
				document.getElementById(rowNum.toString()).children[colNum].style.borderWidth = "1px";
				colNum--;
			}
			
		}
		
}

function downMove(event){
	if (rowNum < 3){
		rowNum++;
		document.getElementById(rowNum.toString()).children[colNum].style.borderWidth = "3px";
		document.getElementById((rowNum-1).toString()).children[colNum].style.borderWidth = "1px";
	}
}	

function upMove(event){
	if (rowNum > 1){
		document.getElementById((rowNum-1).toString()).children[colNum].style.borderWidth = "3px";
		document.getElementById((rowNum).toString()).children[colNum].style.borderWidth = "1px";
		rowNum--;
		
	}
}

function markCell(event) {
	document.getElementById(rowNum.toString()).children[colNum].style.backgroundColor = "yellow";
}	

document.getElementById('rightBtn').addEventListener("click",rightMove);
document.getElementById('leftBtn').addEventListener("click",leftMove);
document.getElementById('downButton').addEventListener("click",downMove);
document.getElementById('upBtn').addEventListener("click",upMove);
document.getElementById('markButton').addEventListener("click",markCell);
