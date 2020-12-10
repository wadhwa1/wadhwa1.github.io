window.renderApp1 = function (elementId) {
    var element = document.getElementById(elementId);
    element.innerHTML = "<h2>Hello world</h2><input type='button' value='Submit and alert' onclick='myalert()'/>";
}

window.myalert = function() {
    alert('Hello this is my alert')
}