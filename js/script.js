/*Jacky Tran
  CS290 - Final Project
  Nov. 27, 2019
  JavaScript file*/

var url = 'http://httpbin.org/post';

document.addEventListener('DOMContentLoaded', bindButtons);

// Requirement: POST request
function bindButtons(){
    document.getElementById('postSubmit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var payload = {name:null, email:null, message:null};
        payload.name = document.getElementById('name').value;
        payload.email = document.getElementById('email').value;
        payload.message = document.getElementById('message').value;
        req.open('POST', url, true);
        req.setRequestHeader('Content-Type', 'application/json');
        
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                var response = JSON.parse(req.responseText);
                console.log(response);
                alert("Message Sent!");
            } else
                console.log('Error in network request: ' + req.statusText);
        });    
        req.send(JSON.stringify(payload));
        event.preventDefault();
    });
} 