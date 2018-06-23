//Settings FILE

var app_name = "Year Book";
var developer_url = "https://onlinemedia.com.ng";
var developer_email = "admin@onlinemedia.com.ng";
var supervisor = "OnlineMedia";


//var url = 'http://app.onlinemedia.com.ng/quiz/api.php';
var url;

var env,server_upload_url,app_path;
env = "locals";

var base_url;

if(env == "local"){
    url = "http://project.apps/year_book/api.php";
    base_url = "http://project.apps/year_book";
    server_upload_url = "http://project.apps/cdn/";

}else{
    base_url = "https://projects.onlinemedia.com.ng/yearbook";
    url = 'https://projects.onlinemedia.com.ng/yearbook/api.php';
    server_upload_url = "https://cdn.uwansell.com.ng/apps/";
}

app_path = "year_book/";

$(document).ready(function () {
    //myApp.alert("Hello dude");

    //$(".supervisor").html(supervisor);
});


function is_login() {
    var user_id = localStorage.getItem("uwansell_user_id");
    if(user_id == "" || user_id == null){
        return false;
    }else{
        return true;
    }
}

function show_toast(msg,color) {
    if(color == "red"){
        var title = '<i class="fa fa-warning"></i>';
    }else{
        var title = '';
    }
    iziToast.show({
        title: title,
        message: msg,
        color: color,
        timeout: 7000
    });
}
