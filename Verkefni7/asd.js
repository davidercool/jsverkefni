function checkUsername() {
    var target = e.target;
    console.log(target)
}
var el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);