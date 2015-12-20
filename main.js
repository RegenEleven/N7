var version = "0.1";
var startMessage = "Welcome Dan! You are currently using version " + version + "!";
var removeAnnouncement = function() {
function remove(id) {
    return (elem=document.getElementById(id)).parentNode.removeChild(elem);
}
remove("static-announcement");
document.getElementById("messages").style.height="470px";
