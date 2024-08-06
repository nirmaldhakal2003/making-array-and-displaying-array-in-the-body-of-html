let course = ['csit','it','bca','bim'];
var text = " ";
for(let i=0;i<course.length;i++){
    text = course[i];
    document.getElementById("Display").innerHTML += text + "<br>";
}