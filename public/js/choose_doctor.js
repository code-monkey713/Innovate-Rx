async function chooseDoctor(){
  const chosenDoctorId = this.dataset.doctorid;

  const response = await fetch(`/api/visit`, {
    method: 'POST',
    body: JSON.stringify(chosenDoctorId),
    headers: {'Content-Type': 'application/json'},
  })

  if (response.ok){
    document.location.replace('visit');
  } else {
    alert('Doctor selection failed. Response not ok.')
  }
};


document.querySelector('#chooseDoctorButton').addEventListener('click', chooseDoctor);
