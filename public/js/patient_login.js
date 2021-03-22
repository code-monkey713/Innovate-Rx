async function loginFailModal(){
  $('#loginFailModal').modal('show');
}

async function pageReload (){
  location.reload();
}


// Sends Information from Login form to Patient Controller for Logging In
async function patientLoginHandler(event){
  event.preventDefault();

  const email = document.querySelector('#pLoginEmail').value;
  const password = document.querySelector('#pLoginPassword').value;

  if (email && password){
    const response = await fetch(`/api/patients/patient_login`, {
        method: 'POST',
        body: JSON.stringify({
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
        loginFailModal();
    }
  } else {
    loginFailModal();
  }
};

document
.querySelector('#loginForm')
.addEventListener('submit', patientLoginHandler);