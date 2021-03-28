// let birthDate ;
// let upload = new FileUploadWithPreview("myUniqueUploadId");

async function registrationFailModal(){
  $('#registrationFailModal').modal('show');
}

async function pageReload (){
  location.reload();
}



// Sends Information from Registration Form to Patient Controller for Creating New Patient
async function patientRegistrationHandler(event){
  event.preventDefault();

  const title = document.querySelector('#pRegisterTitle').value;
  const firstName = document.querySelector('#pRegisterFirstName').value;
  const lastName = document.querySelector('#pRegisterLastName').value;
  const birthDate = document.querySelector('#pRegisterBirthDate').value;
  const email = document.querySelector('#pRegisterEmail').value;
  const password = document.querySelector('#pRegisterPassword').value;

  if (title && firstName && lastName && birthDate && email && password){
    const response = await fetch(`/api/patients`, {
        method: 'POST',
        body: JSON.stringify({
        title,
        firstName,
        lastName,
        birthDate,
        email,
        password,
        }),
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/patient_dashboard');
    } else {
        registrationFailModal();
    }
  } else {
    registrationFailModal();
  }
};

document
.querySelector('#registrationForm')
.addEventListener('submit', patientRegistrationHandler);
