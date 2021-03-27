const newVisitStartBtn = document.querySelector('#newVisitStartBtn');
const uploadImgBtn = document.querySelector('#patientImageSubmit');
let uploadedImg = document.querySelector('#uploadImg').value

async function startNewVisit(){
    location.href = '/visit'
};

async function uploadImg(event){
    event.preventDefault();

    console.log(uploadedImg);
}

newVisitStartBtn.addEventListener('click', startNewVisit)

uploadImgBtn.addEventListener('submit' uploadImg)