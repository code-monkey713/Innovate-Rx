async function submitVisitForm (event){
  event.preventDefault();

  let symptomsArray = [];
  let symptomsIdArray = [];

  const headache = {id: 1,
                    value: document.querySelector("#checkboxHeadache").checked,
                  };
  const blurry_vision =  {id: 2,
    value: document.querySelector("#checkboxBlurryVision").checked,
  };
  const runny_nose =  {id: 3,
    value: document.querySelector("#checkboxRunnyNose").checked,
  };
  const cough =  {id: 4,
    value: document.querySelector("#checkboxCough").checked,
  };
  const fever =  {id: 5,
    value: document.querySelector("#checkboxFever").checked,
  };
  const high_blood_pressure =  {id: 6,
    value: document.querySelector("#checkboxHighBloodPressure").checked,
  };
  const high_blood_sugar =  {id: 7,
    value: document.querySelector("#checkboxHighBloodSugar").checked,
  };
  const nausea =  {id: 8,
    value: document.querySelector("#checkboxNausea").checked,
  };
  const vomiting =  {id: 9,
    value: document.querySelector("#checkboxVomiting").checked,
  };
  const back_pain =  {id: 10,
    value: document.querySelector("#checkboxBackPain").checked,
  };
  const joint_pain =  {id: 11,
    value: document.querySelector("#checkboxJointPain").checked,
  };
  const weakness =  {id: 12,
    value: document.querySelector("#checkboxWeakness").checked,
  };
  const difficulty_breathing =  {id: 13,
    value: document.querySelector("#checkboxDifficultyBreathing").checked,
  };
  const urinary_issues =  {id: 14,
    value: document.querySelector("#checkboxUrinaryIssues").checked,
  };
  const digestive_issues =  {id: 15,
    value: document.querySelector("#checkboxDigestiveIssues").checked,
  };
  const other = {id: 16,
                value: document.querySelector("#checkboxOther").checked,
                text: document.querySelector("#descriptionBox").value,
  };
  
  symptomsArray.push(headache, blurry_vision, runny_nose, cough, fever, high_blood_pressure, high_blood_sugar, nausea, vomiting, back_pain, joint_pain, weakness, difficulty_breathing, urinary_issues, digestive_issues, other);
  

  const getId = symptomsArray.map((s)=>{
    if (s.value === true){
      symptomsIdArray.push(s.id);
    }
  });

  console.log((symptomsIdArray));


  const response = await fetch(`/api/symptoms`, { //placeholder route//
      method: 'POST',
      body: JSON.stringify(symptomsIdArray),
      headers: {
      'Content-Type': 'application/json',
      },
    });


  if (response.ok){
    launchVisitCompleteModal();
    window.location.replace('/tests');

  } else {
    launchVisitIncompleteModal();
    window.location.replace('/patient_dashboard');

  }
};

async function launchVisitCompleteModal(){
  $('#visitCompleteModal').modal('show');
};

async function launchVisitFailModal(){
  $('#visitFailModal').modal('show');
};

document.querySelector("#symptomsForm").addEventListener('submit', submitVisitForm)
