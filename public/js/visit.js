let doctorButtons = document.querySelectorAll("#chooseDoctorButton");

const patientID = document.querySelector('#pId').textContent;

let lastVisitId;

async function createNewVisit() {
  chosenDoctorId = parseInt(this.dataset.doctorid);
  document
    .querySelector("#chooseDoctorContainer")
    .setAttribute("style", "display: none");
  document.querySelector("#visitContainer").removeAttribute("style");

  const doctor_id = chosenDoctorId;

  const response = await fetch(`/api/visits`, {
    method: "POST",
    body: JSON.stringify({ doctor_id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function getSymptoms(event) {
  event.preventDefault();

  let checkedSymptomsIdArray = [];

  const symptomContainer = document.querySelector('#symptomsForm');
  const symptoms = symptomContainer.querySelectorAll('.form-check-input');
  const symptomsArr = Array.from(symptoms)
  const newArr = symptomsArr.map((s) => {
    if (s.checked){
      s.intId = parseInt(s.dataset.id)
      checkedSymptomsIdArray.push(s.intId)
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
        lastVisitId = parseInt(visitArr[lastId].id);
        console.log(lastVisitId);
      } else  {
        alert('oops')
      }


  // --------------------------------------------------------------------------------------
  // Positive Test Shuffle Logic part 1
  // This part is the logic that randomly assigns one test as positive.
  // It uses a third-party array shuffle function known as "Durstenfeld Shuffle" for ES6.
  // link: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm

  console.log(checkedSymptomsIdArray)
  async function shuffleArray (checkedSymptomsIdArray) {
    for (let i = checkedSymptomsIdArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [checkedSymptomsIdArray[i], checkedSymptomsIdArray[j]] = [checkedSymptomsIdArray[j], checkedSymptomsIdArray[i]];
    }
  };
  shuffleArray(checkedSymptomsIdArray);
  console.log(checkedSymptomsIdArray);
  let x = 0;
  let is_positive = false;
  // ---------------------------------------------------------------------------------------


  if (!checkedSymptomsIdArray.length){
    launchVisitFailModal();
  } else {

    const stdMaker = checkedSymptomsIdArray.map(async (stdModelId) => {
    
      // -------------------------------------------------------------------------
      //  Positive Test Shuffle Logic part 2 
      if (x === 0){
        is_positive = true;
        x++;
      } else {
        is_positive = false;
      }
      // -------------------------------------------------------------------------

      let response2 = await fetch(`/api/visit_symptoms`, {
        method: "POST",
        body: JSON.stringify({ 
          stdModelId,
          lastVisitId,
          is_positive }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    })

      const response3 = await fetch(`/visits/${lastVisitId}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      });


      if (response3.ok){
        let data3 = await response3.json();
        console.log(data3)
        let stdArray = data3.visits_stdmodel;
        let vsArray = data3.visit_symptoms;
        console.log(vsArray);

        let checkedSymptomArray = stdArray.map((std) => {
          return std.symptom;
        })

        let assignedTestArray = stdArray.map((std) => {
          return std.test;
        })

        let xyz = assignedTestArray.forEach((test) => {
          let t = document.createElement('li');
          t.innerHTML = test;
          document.querySelector('#assignedTestsList').appendChild(t);
        })
      } else {
        console.log('oopsie daisy')
      }
      launchVisitCompleteModal();
    };
  };

async function launchVisitCompleteModal() {
  $("#visitCompleteModal").modal("show");
}

async function redirectToPatientDashboard(){
  location.href = '/tests';
}

async function launchVisitFailModal() {
  $("#visitFailModal").modal("show");
}

doctorButtons.forEach((b) => {
  b.addEventListener("click", createNewVisit);
});

document
  .querySelector("#symptomsForm")
  .addEventListener("submit", getSymptoms);

document
  .querySelector("#visitCompleteModalCloseBtn").
  addEventListener("click", redirectToPatientDashboard);