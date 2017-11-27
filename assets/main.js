var client = ZAFClient.init();

console.log("connected!");

var display = document.querySelector("#display");
var button = document.querySelector("button");

//ticket_id
//var displayData = client.get('ticket.id').then(function(data) {
//var data = (data["ticket.id"]); 

//var displayData = client.get('ticket.assignee').then(function(data) {
//var data = (data);
//console.log(data);

//["ticket_assignee"] 
//group, group.id, group.name
//user, user groups, etc.
//var displayData = client.get('ticket.assignee').then(function(data) {
//var data = (data["ticket.assignee"].user.name);

//var displayData = client.get('ticket.brand').then(function(data) {
//var data = (data);
//console.log(data);

var displayData = client.get('currentUser').then(function(data) {
var data = (data["currentUser"].name);
//console.log(data);
//});

button.addEventListener("click", function() {
	display.textContent = data;
});
});




