let doctorButtons = document.querySelectorAll("#chooseDoctorButton");

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
    // console.log(response);
  } else {
    alert("new visit not created");
    // console.log(response);
  }
}

async function getSymptoms(event) {
  event.preventDefault();

  let symptomsArray = [];
  let symptomsIdArray = [];

  const headache = {
    id: 1,
    value: document.querySelector("#checkboxHeadache").checked,
  };
  const blurry_vision = {
    id: 2,
    value: document.querySelector("#checkboxBlurryVision").checked,
  };
  const runny_nose = {
    id: 3,
    value: document.querySelector("#checkboxRunnyNose").checked,
  };
  const cough = {
    id: 4,
    value: document.querySelector("#checkboxCough").checked,
  };
  const fever = {
    id: 5,
    value: document.querySelector("#checkboxFever").checked,
  };
  const high_blood_pressure = {
    id: 6,
    value: document.querySelector("#checkboxHighBloodPressure").checked,
  };
  const high_blood_sugar = {
    id: 7,
    value: document.querySelector("#checkboxHighBloodSugar").checked,
  };
  const dizziness = {
    id: 8,
    value: document.querySelector("#checkboxDizziness").checked,
  };
  const vomiting = {
    id: 9,
    value: document.querySelector("#checkboxVomiting").checked,
  };
  const back_pain = {
    id: 10,
    value: document.querySelector("#checkboxBackPain").checked,
  };
  const joint_pain = {
    id: 11,
    value: document.querySelector("#checkboxJointPain").checked,
  };
  const weakness = {
    id: 12,
    value: document.querySelector("#checkboxWeakness").checked,
  };
  const difficulty_breathing = {
    id: 13,
    value: document.querySelector("#checkboxDifficultyBreathing").checked,
  };
  const urinary_issues = {
    id: 14,
    value: document.querySelector("#checkboxUrinaryIssues").checked,
  };
  const abdominal_pain = {
    id: 15,
    value: document.querySelector("#checkboxAbdominalPain").checked,
  };
  const heartburn = {
    id: 16,
    value: document.querySelector("#checkboxHeartburn").checked,
  };
  const i_see_dead_people = {
    id: 17,
    value: document.querySelector("#checkboxISeeDeadPeople").checked,
  };
  const other = {
    id: 18,
    value: document.querySelector("#checkboxOther").checked,
    text: document.querySelector("#descriptionBox").value,
  };

  symptomsArray.push(
    headache,
    blurry_vision,
    runny_nose,
    cough,
    fever,
    high_blood_pressure,
    high_blood_sugar,
    dizziness,
    vomiting,
    back_pain,
    joint_pain,
    weakness,
    difficulty_breathing,
    urinary_issues,
    abdominal_pain,
    heartburn,
    i_see_dead_people,
    other
  );

  const getId = symptomsArray.map((s) => {
    if (s.value === true) {
      symptomsIdArray.push(s.id);
    }
  });

  console.log(symptomsIdArray, symptomsIdArray.length);
  const allVisit = await fetch(`/api/visits`, {
    method: 'get',
  });
  console.log(allVisit);

  if (response.ok) {
    alert("new visit created");
    // console.log(response);
  } else {
    alert("new visit not created");
    // console.log(response);
  }
  // pass the visit_id, symptoms_id, random function to positive STDmodel on Visit_Symptoms table

  launchVisitCompleteModal();
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
