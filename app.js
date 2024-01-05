const btn =  document.querySelector('#talk');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition = new SpeechRecognition();

var day=new Date();
var hr= day.getHours();
var mi= day.getMinutes();
let ap="AM"

recognition.onstart= function(){
    console.log("activated");
    talk.style.boxshadow = '0px 0px 10px white';
}

function wishme(){
    var day=new Date();
    var hr= day.getHours();

    if(hr>=0 && hr<12){
        readOut("Good Morning");
    }
    else if(hr>=12 && hr<=17){
        readOut("Good Afternoon");
    }
    else{
        readOut("Good Evening");
    }
}
  
recognition.onresult= function(event){
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript=transcript.toLowerCase();
    console.log(transcript);
    document.querySelector('#query').textContent=transcript;

    if(transcript.includes('hello')||transcript.includes('hi')||transcript.includes('hey')){
       readOut("hello there , i am jain university's voice assistant , how may i assist you");
       console.log("Hello there, I am jain university's voice assistant , how may i assist you");
       document.querySelector('#answer').textContent="Hello there, I am jain university's voice assistant , how may i assist you";
    }

    else if(transcript.includes('good morning') || transcript.includes('good afternoon')|| transcript.includes('good evening')){
        readOut(wishme());
        // console.log(wishme());
        // document.querySelector('#answer').textContent=wishme();
    }

    else if(transcript.includes('how are you')){
        readOut('i am fine, how are you doing');
        console.log('I am fine , how are you doing');
        document.querySelector('#answer').textContent='I am fine , how are you doing';
    }
    
    else if(transcript.includes('what is your name')){
        readOut('i dont have any name as  i am an a i of jain university, my job is to assist the students and faculties of jain university');
        console.log('I dont have any name as  i am an AI of Jain University, my job is to assist the students and faculties of Jain University');
        document.querySelector('#answer').textContent='I dont have any name as  i am an AI of Jain University, my job is to assist the students and faculties of Jain University';
    }

    else if(transcript.includes('time')){
        if(hr>12){
            hr=hr-12;
            ap="PM";}
        readOut("the time is")
        readOut(hr);
        readOut(mi);
        readOut(ap);
        console.log(hr+':'+mi+' '+ap);
        document.querySelector('#answer').textContent=hr+':'+mi+' '+ap;
    }

    else if(transcript.includes('open youtube')){
        readOut('opening youtube');
        window.open("https://www.youtube.com/");
    }

    else if(transcript.includes('open google')){
        readOut('opening google');
        window.open("https://www.google.com/");
    }

    else if(transcript.includes('hod of bca')){
        readOut('doctor suchitra');
        console.log('Dr.Suchitra');
        document.querySelector('#answer').textContent='Dr. Suchitra';
    }

    else if(transcript.includes('pcl guide')){
        readOut('doctor nidhya');
        console.log('Dr.Nidhya');
        document.querySelector('#answer').textContent='Dr. Nidhya';

    }

    else if(transcript.includes('play some music in youtube')|| transcript.includes('play some music on youtube')){
        readOut('okay');
        console.log('okay');
        document.querySelector('#answer').textContent='okay';
        window.open("https://www.youtube.com/watch?v=34Na4j8AVgA");
    }

    else if(transcript.includes('open jain university website') ||transcript.includes('open chain university website') || transcript.includes('open jnu university website')){
        readOut('opening jain university website');
        console.log('opening jain university website');
        document.querySelector('#answer').textContent='opening jain university website';
        window.open("https://www.jainuniversity.ac.in/");
    }

    else if(transcript.includes('pcl coordinator')){
        readOut('doctor ananta ojha');
        console.log('Dr.Ananta ojha');
        document.querySelector('#answer').textContent='Dr. Anata Ojha';

    }

    else if(transcript.includes('location')){
        readOut("here's the location for jain university, jayanagar");
        console.log("here's the location for jain university, jayanagar");
        document.querySelector('#answer').textContent="here's the location for jain university, jayanagar";
        window.open("https://goo.gl/maps/c122V6RecoMr1tcm6");

    }

    else if(transcript.includes('21 bcar 0045') || transcript.includes('21bcar0045') || transcript.includes('21 bca are 0045') || transcript.includes('21 bca or 0045') || transcript.includes('0045')){
        readOut('mohammed suhail');
        console.log('Mohammed Suhail');
        document.querySelector('#query').textContent='21BCAR0045';
        document.querySelector('#answer').textContent='Mohammed Suhail';
    }

    else if(transcript.includes('21 bcar 0166') || transcript.includes('21bcar0166') || transcript.includes('21 bca are 0166') || transcript.includes('21 bca or 0166') || transcript.includes('0166')){
        readOut('murali mohan reddy');
        console.log('Murali mohan reddy ');
        document.querySelector('#query').textContent='21BCAR0166';
        document.querySelector('#answer').textContent='Murali Mohan Reddy';
    }
    
    else if(transcript.includes('21 bcar 0164') || transcript.includes('21bcar0164') || transcript.includes('21 bca are 0164') || transcript.includes('21 bca or 0164') || transcript.includes('0164')){
        readOut('monish');
        console.log('Monish');
        document.querySelector('#query').textContent='21BCAR0164';
        document.querySelector('#answer').textContent='Monish';
    }
    
    else if(transcript.includes('class teacher of mact')||transcript.includes('class teacher of mset')||transcript.includes('class teacher of msgt') || transcript.includes('class teacher of ma ct') || transcript.includes('m a c t') || transcript.includes('class teacher of mac t')|| transcript.includes('class teacher of mac')){
        readOut('taskeen zaidi');
        console.log('Dr.Taskeen Zaidi');
        document.querySelector('#query').textContent='Class teacher of MACT';
        document.querySelector('#answer').textContent='Dr. Taskeen Zaidi';

    }

    else if(transcript.includes('search for')){
        let input=transcript.split("");
        input.splice(0,11);
        input.pop();
        input=input.join("").split(".").join("+")
        readOut("here's the result for" + input);
        window.open(`https://www.google.com/search?q=${input}`);
    }
    else if(transcript.includes('shut down') || transcript.includes('bye') || transcript.includes('shutdown')){
        readOut("okay, have a nice day");
        console.log('okay, have a nice day');
        document.querySelector('#answer').textContent='okay, have a nice day';
        var a=true;
        if(a==true){
        window.close(`http://127.0.0.1:5555/index.html`);}
    }
    else{
        readOut('i did not understand the question, please try again');
        console.log('i did not understand the question, please try again');
        document.querySelector('#answer').textContent="I didn't understand the question please, try again";    
    }
    
}

recognition.onend= function(){
    console.log("deactivated")
}

function readOut(message){
    const speech = new SpeechSynthesisUtterance;
    const allVoices = speechSynthesis.getVoices();
    speech.voice=allVoices[8];
    speech.text=message;
    speech.volume=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
    
}

window.addEventListener("load", ()=>{
    // wishme();
    // readOut("I am jain university's voice assistant , how may i assist you") 
})
talk.addEventListener("click", ()=>{
    recognition.start();
    // talk.style.box-shadow = '0px 0px 10px white';



})