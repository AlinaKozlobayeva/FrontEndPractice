/**
 * Created by Alina on 09.10.2015.
 */

var selectedRow;
//var td = document.getElementById('shopTable').parentNode.nodeName;

document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'complete') {
        initOnCompleteLoad();
    }
};
function initOnCompleteLoad() {
    var td = document.getElementById('shopTable');
    for (var i = 1; i < td.rows.length; i++) {
        td.rows[i].onclick = function () {
            if (selectedRow) {
                unpick(selectedRow);
                if (selectedRow.id != this.id) {
                    selectedRow = this;
                    pick(this);
                } else {
                    selectedRow = null;
                }
            } else {
                selectedRow = this;
                pick(this);
            }

        }

    }
}

function pick(row) {
    row.className = "selectedRow";
    console.log("pick id " + row.id);
}


function unpick(row) {
    row.className = "";
    console.log("pick id " + row.id);
}


var counter = 1;
function countUp() {

    var table = document.getElementById('shopTable');
    if(counter == document.getElementById('shopTable').rows.length){
        counter = document.getElementById('shopTable').rows.length;
        console.log(counter + " == 5");
        pick(table.rows[counter]);
        selectedRow = table.rows[counter];
    }else{
        console.log(counter);
        if(selectedRow){
            unpick(selectedRow);
        }
        if(!selectedRow || selectedRow.id != this.id){
            counter++;
            selectedRow = table.rows[counter];
            console.log(counter);
            pick(selectedRow);
        }

    }

}

function countDown() {
    var table = document.getElementById('shopTable');
    if(counter == 1){
        counter = 1;
        console.log(counter);
        pick(table.rows[counter]);
        selectedRow = table.rows[counter];
    } else {
        console.log(counter);
        if(selectedRow){
            unpick(selectedRow);
        }
        if(!selectedRow || selectedRow.id != this.id){
            counter--;
            selectedRow = table.rows[counter];
            console.log(counter);
            pick(selectedRow);
        }
    }

}



function add() {
    var inputs = selectedRow.getElementsByTagName('input');
        for (var j = 0; j < inputs.length; j++) {
            if (inputs[j].type == "checkbox") {
                if (inputs[j].checked) {
                    inputs[j].checked = false;
                } else {
                    inputs[j].checked = true;

                }
                break;
            }
        }
}


function send(){
    var obj = {};
    var td = document.getElementById('shopTable');
    var inputs = td.getElementsByTagName('input');
    for (var i = 1; i < td.rows.length; i++){
        for(var j = (2*i-1); j < i*2; j++){
            if(inputs[j].type == "checkbox"){
               if(inputs[j].checked){
                   console.log(i + " " + j);
                    obj[td.rows[i].getAttribute('name')] = td.rows[i].id;
               }
            }

        }

    }
    print(obj);
}


function print(a){
    var myWindow = window.open("","MyPage", "width=400, height=400");
    myWindow.document.write(JSON.stringify(a));
}
