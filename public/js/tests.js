const testsCompletedBtn = document.querySelector('#testsCompletedBtn');

async function testsCompleted(){
  const testsCompleted = true;

  const response = await fetch('/api/visit', {
    method: 'POST',
    body: testsCompleted,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.ok){
    $('#instructionsModal').modal('show');
  } else {
    alert('Error')
  }
};

$('#instructionsModal').on('hidden.bs.modal', function (e) {
  document.location.replace('/patient_dashboard')
});

testsCompletedBtn.addEventListener('click', testsCompleted);
