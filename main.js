var list = Array["Background Noise", "Clap", "Spoon & Glass", "Water Going into Bottle"
];
var numbers =  Array["one","two","three","four"];
var count,show;
function record() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JrtfmnDKJ/model.json', modelloaded);
}
function modelloaded() {
    classifier.classify(gotresults);
}
function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result1").innerHTML = "I Can Hear - " + results[0].label;
        document.getElementById("result2").innerHTML = "Accuracy - " + results[0].confidence;
        if (results[0].label == list[0]){
            show == 1;
            showorhide();
        }
        if (results[0].label == list[1]){
            show == 2;
            showorhide();
        }
        if (results[0].label == list[2]){
            show == 3;
            showorhide();
        }
        if (results[0].label == list[3]){
            show == 4;
            showorhide();
        }
    }
}
function showorhide() {
    for (count = 0; count <= 3; count++) {
        if ((count + 1) == show) {
            document.getElementById(numbers[count]).src = "aliens-0"+(count+1)+".gif";
        }
        else {
            document.getElementById(numbers[count]).src = "aliens-0"+(count+1)+".png";
        }
    }
}