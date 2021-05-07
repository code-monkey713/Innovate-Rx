const newVisitStartBtn = document.querySelector("#newVisitStartBtn");
const submitImgBtn = document.querySelector("#patientImageUploadForm");

let uploadImgBtn = document.querySelector("#uploadImg");
let uploadedImg;

async function startNewVisit() {
  location.href = "/visit";
}

async function uploadImg(e) {
  e.preventDefault();
  if (uploadImgBtn) {
    uploadedImg = uploadImgBtn.value;
  }
}

newVisitStartBtn.addEventListener("click", startNewVisit);

submitImgBtn.addEventListener("submit", uploadImg);
