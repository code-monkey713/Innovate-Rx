async function submitVisitForm (event){
  event.preventDefault();

  const headache = document.querySelector("#checkboxHeadache").checked;
  const blurry_vision = document.querySelector("#checkboxBlurryVision").checked;
  const runny_nose = document.querySelector("#checkboxRunnyNose").checked;
  const cough = document.querySelector("#checkboxCough").checked;
  const fever = document.querySelector("#checkboxFever").checked;
  const high_blood_pressure = document.querySelector("#checkboxHighBloodPressure").checked;
  const high_blood_sugar = document.querySelector("#checkboxHighBloodSugar").checked;
  const nausea = document.querySelector("#checkboxNausea").checked;
  const vomiting = document.querySelector("#checkboxVomiting").checked;
  const back_pain = document.querySelector("#checkboxBackPain").checked;
  const joint_pain = document.querySelector("#checkboxJointPain").checked;
  const weakness = document.querySelector("#checkboxWeakness").checked;
  const difficulty_breathing = document.querySelector("#checkboxDifficultyBreathing").checked;
  const urinary_issues = document.querySelector("#checkboxUrinaryIssues").checked;
  const digestive_issues = document.querySelector("#checkboxDigestiveIssues").checked;
  const other = document.querySelector("#checkboxOther").checked;
  const description = document.querySelector("#descriptionBox").value;


  console.log(headache);
  console.log(description);


  const response = await fetch(`/api/symptoms`, { //placeholder route//
      method: 'POST',
      body: JSON.stringify({
      headache, blurry_vision, runny_nose, cough, fever, high_blood_pressure, high_blood_sugar, nausea, vomiting,
      back_pain, joint_pain, weakness, difficulty_breathing, urinary_issues, digestive_issues, other, description
      }),
      headers: {
      'Content-Type': 'application/json',
      },
    }),


  if (response.ok){
    launchVisitCompleteModal();
    window.location.replace('/tests');

  } else {
    launchVisitIncompleteModal();
    window.location.replace('/patient_dashboard');

  }
};

async function launchVisitCompleteModal(){
  document.querySelector('#visitCompleteModal').modal('show');
};

async function launchVisitFailModal(){
  document.querySelector('#visitFailModal').modal('show');
};

document.querySelector("#visitForm").addEventListener('submit', submitVisitForm)