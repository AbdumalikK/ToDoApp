$(document).ready(function() {

    if (localStorage.data) {
        var data = JSON.parse(localStorage.data);
        for(var i = 0; i < data.length; i++) {
            var oldHTML = '<tr><i class="fas fa-running fa-1x"></i><td>' + data[i].title + '</td><td>' + data[i].date + data[i].time + '</td><td>' + data[i].info + '</td></tr>';
            $('tbody').append(oldHTML);
        }
    } else {
        localStorage.data = "[]";
    }

    $('#date').pickadate();
    $('#time').pickatime();
    
    $('form').submit(function(event) {
        event.preventDefault();

        var title = event.currentTarget['title'].value;
        var date = $('#date').val();
        var time = $('#time').val();
        var info = event.currentTarget['info'].value;
        
        var html = '<tr><i class="fas fa-running fa-1x"></i><td>'+ title + "</td><td>" + date + ' ' + time +'</td><td>'+ info +'</td></tr>';
        
        $('tbody').append(html);
        $(this)[0].reset();
       
        var localStorageData = JSON.parse(localStorage.data);
        var newData = { title: title, date: date, time: time, info: info }
        localStorageData.push(newData);

        localStorage.data = JSON.stringify(localStorageData);
   
    });
});

// window.localStorage 
// localStorage.setItem("key", "value"); // save to data
// var lastname = localStorage.getItem("key"); // reading data from local storage
// localStorage.removeItem("key"); // remove data from local storage


// // JSON, LocalStorage, JavaScript
// var myObj, myJSON, text, obj;

// //Storing data:
// myObj = {"name":"John", "age":31, "city":"New York" };
// myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);

// // Retrieving data:
// text = localStorage.getItem("testJSON");
// obj = JSON.parse(text);
// document.getElementById("demo").innerHTML = obj.name;
