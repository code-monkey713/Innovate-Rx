let doctorButtons = document.querySelectorAll("#chooseDoctorButton");
const patientID = document.querySelector('#pId').textContent;
async function createNewVisit() {
  chosenDoctorId = parseInt(this.dataset.doctorid);
  document
    .querySelector("#chooseDoctorContainer")
    .setAttribute("style", "display: none");
  document.querySelector("#visitContainer").removeAttribute("style");

  const doctor_id = chosenDoctorId;
  // const pId = document.querySelector('#pId').innerHTML;
  // const patient_id = parseInt(pId);

  const response = await fetch(`/api/visits`, {
    //placeholder route//
    method: "POST",
    body: JSON.stringify({ doctor_id }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert("new visit created");
    console.log(response);
  } else {
    alert("new visit not created");
    // console.log(response);
  }
}

async function getSymptoms(event) {
  event.preventDefault();

  let checkedSymptomsIdArray = [];

  const symptomContainer = document.querySelector('#symptomsForm');
  const symptoms = symptomContainer.querySelectorAll('.form-check-input');
  const symptomsArr = Array.from(symptoms)
  const newArr = symptomsArr.map((s) => {
    if (s.checked){
      checkedSymptomsIdArray.push(s.dataset.id)
    }
  });
  console.log(checkedSymptomsIdArray);
  console.log(patientID);
  const response1 = await fetch(`/patients/${patientID}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response1.ok){
    console.log(response1);
    let data = await response1.json();
    let visitArr = data.visits
    let lastId = visitArr.length -1;
    let lastVisitId = visitArr[lastId].id;
    console.log(lastVisitId);
  } else  {
    alert('oops')
  }

  const abc = checkedSymptomsIdArray.forEach((stdModelId) => {
    let response2 = await fetch(`/api/visit_symptoms`, {
      method: "POST",
      body: JSON.stringify({ 
        stdModelId,
        lastVisitId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("new VS model created");
      console.log(response);
    } else {
      console.log("new VS model not created");
      // console.log(response);
    }
  })



  // if (response.ok) {
    // alert("new visit created");
    // console.log(response);
  // } else {
  //   alert("new visit not created");
    // console.log(response);
  // }
  // pass the visit_id, symptoms_id, random function to positive STDmodel on Visit_Symptoms table

  // launchVisitCompleteModal();
}

async function launchVisitCompleteModal() {
  $("#visitCompleteModal").modal("show");
  // we need to redirect the patient to the patient_dashboard after the patient click 'ok' on the modal
  // location.href = '/patient_dashboard';
}

async function launchVisitFailModal() {
  $("#visitFailModal").modal("show");
}

// console.log(doctorButtons);
doctorButtons.forEach((b) => {
  b.addEventListener("click", createNewVisit);
});

document
  .querySelector("#symptomsForm")
  .addEventListener("submit", getSymptoms);
