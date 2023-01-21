var i = 0; // Startpunkt
var images = [];
var time = 1000;

// image Liste
images[0] = 'p1.jpeg';
images[1] = 'p2.jpeg';
images[2] = 'p3.jpeg';
images[3] = 'p4.jpeg';

function changeImg() {
    document.slide.scr = images[i];

    if (i < images.length - 1) {
        i++;

    } else {

        i = 0;
    }
    setTimeout(changeImg(), time)


}
var interval = setInterval(changeImg(), time);
window.onload = changeImg;