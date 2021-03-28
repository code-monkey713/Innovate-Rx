const treatmentButtons = document.querySelectorAll('#assignTreatmentButton');
const saveTreatmentButton = document.querySelector('#saveAssignedTreatmentBtn');
const treatmentSelect = document.querySelector('#treatmentSelect');

let visit_id;
let treatment_id;

async function assignTreatment (){
  $(`#assignModal${this.dataset.id}`).modal('show');
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


  if (response.ok) {
      document.location.reload();
  } else {
    alert('Error saving treatment. Please try again.')
  }

};

if (treatmentButtons){
  let x = treatmentButtons.forEach( async (treatmentButton)=>{
    console.log(treatmentButton.dataset.id)
    treatmentButton.addEventListener('click', assignTreatment);
  })

};


saveTreatmentButton.addEventListener('click', saveTreatment);

