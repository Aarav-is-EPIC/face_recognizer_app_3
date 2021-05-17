Webcam.set({
    width:350,
    height:350,
    image_format:"jpeg",
    jpeg_quality:90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src ="' + data_uri + '">';

    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GKKc36Qqo/model.json",modelLoaded);

function modelLoaded(){
    console.log("The model has loaded :)!");
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("person_face").innerHTML = results[0].label;
        document.getElementById("face_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}