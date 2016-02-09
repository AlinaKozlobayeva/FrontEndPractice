

function submitFunction(){
    var a = {
        login: document.getElementById("login").value,
        pass: document.getElementById("pass").value
    };
    print(a);
}

function print(a){
    var myWindow = window.open("","MyPage", "width=200, height=300");
    myWindow.document.write(JSON.stringify(a));
}

