const returnToDashboardBtn = document.querySelector('#returnToDashboardBtn');
const showDiagnosisBtn = document.querySelector('#showDiagnosisBtn');
const patientID = document.querySelector('#pId').textContent;
const testsList = document.querySelector('#testResultsList');
const diagnosisIntro = document.querySelector('#diagnosisIntro');
const diagnosisTitle = document.querySelector('#diagnosisTitle');

let testResult;
let diagnosis;
let diagnosingDoctor;

let lastVisitId;
async function showDiagnosis(){

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

  const response2 = await fetch(`/visits/${lastVisitId}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response2.ok){
    let data2 = await response2.json();
    const allResults = data2.visit_symptoms;
    console.log(data2);

    let allTests = allResults.forEach((test) => {
      let t = document.createElement('li');
      if (test.is_positive){
        testResult = `<span style='color: red;'>'Positive/ Abnormal/ "Uh-Oh!"'</span>`
      } else {
        testResult = 'Negative/ Normal/ "Relax!"'
      }
      t.innerHTML = test.stdmodel.test + ': ' + testResult +' .';
      testsList.appendChild(t);
    })

    const getDiagnosis = allResults.forEach((result) =>{ 
      if (result.is_positive){
        diagnosis = result.stdmodel.diagnosis;
        diagnosingDoctor = data2.doctor.last_name + '...';
      }
    });

    diagnosisIntro.innerHTML += diagnosingDoctor;
    diagnosisTitle.textContent = diagnosis;




    $('#diagnosisModal').modal('show');
  } else {
    alert('Error')
  }
};

// $('#diagnosisModal').on('hidden.bs.modal', function (e) {
//   document.location.replace('/patient_dashboard')
// });

showDiagnosisBtn.addEventListener('click', showDiagnosis);
