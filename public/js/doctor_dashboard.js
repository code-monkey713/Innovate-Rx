const treatmentButton = document.querySelector('#assignTreatmentButton');
const saveTreatmentButton = document.querySelector('#saveAssignedTreatmentBtn');
const treatmentSelect = document.querySelector('#treatmentSelect');

let visit_id;
let treatment_id;

async function assignTreatment (){
  $('#assignModal').modal('show');
  console.log(this.dataset.id)
};

async function saveTreatment (){

  visit_id = this.dataset.id;
  treatment_id = treatmentSelect.value;

  const response = await fetch(`/api/visit_treatment`, {
    method: 'POST',
    body: JSON.stringify({
        treatment_id: treatment_id,
        visit_id: visit_id
    }),
    headers:{
        'Content-Type': 'application/json',
    },
  });

  console.log(response);

  if (response.ok) {
      document.location.reload();
  } else {
    alert('error')
    console.log(response)
  }

};

if (treatmentButton){
treatmentButton.addEventListener('click', assignTreatment);
};


saveTreatmentButton.addEventListener('click', saveTreatment);

