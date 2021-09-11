const s_form = document.querySelector("#form");
const s_email = s_form.querySelector("#email");
const s_text = s_form.querySelector("#text");
const s_icon = s_form.querySelector("#icon");

let debufNum = false;

const EMAIL_PATTERN = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const VAILD = "vaild";
const INVAILD = "invaild";

function InVaild(){
    s_form.classList.remove("invaild");
    s_form.classList.add("vaild");
    s_text.innerHTML ="Your Email Address in Vaild";
    s_text.style.color = "#00ff00";
    s_icon.innerHTML = "✔️";
}

function Notvaild(){
    s_form.classList.remove("vaild");
    s_form.classList.add("invaild");
    s_text.innerHTML ="Please Enter Vaild Email";
    s_text.style.color = "#ff0000";
    s_icon.innerHTML = "❌";
}

function typingNvalidating(){
    s_email.addEventListener('keydown', (event) => {
        let isvaild = s_form.className;

        if(s_email.value !== null){
            if(s_email.value.match(EMAIL_PATTERN)){
                InVaild();
                
                if(debufNum) {
                    console.log("match");
                    console.log(s_form);
                } 
                
            }
            else{
                Notvaild()

                if(debufNum){
                    console.log("notmatch");
                    console.log(s_form);
                }
            }
        }
    });
}

function init()
{
    typingNvalidating();
}

init();