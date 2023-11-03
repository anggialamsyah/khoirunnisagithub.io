function openShape(shapeName) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(shapeName).style.display = "block";
}

function calculateSquare() {
    var length = parseFloat(document.getElementById("squareLength").value);
    var width = parseFloat(document.getElementById("squareWidth").value);
    var area = length * width;
    var perimeter = 2 * (length + width);

    document.getElementById("squareArea").innerText = area;
    document.getElementById("squarePerimeter").innerText = perimeter;
}

function calculateTriangle() {
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);
    var perimeter = side1 + side2 + side3;
    var s = perimeter / 2;
    var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    document.getElementById("triangleArea").innerText = area;
    document.getElementById("trianglePerimeter").innerText = perimeter;
}

function calculateCircle() {
    var radius = parseFloat(document.getElementById("circleRadius").value);
    var area = Math.PI * radius * radius;
    var circumference = 2 * Math.PI * radius;

    document.getElementById("circleArea").innerText = area;
    document.getElementById("circleCircumference").innerText = circumference;
}
