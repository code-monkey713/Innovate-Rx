async function loginFailModal(){
  $('#loginFailModal').modal('show');
}

async function pageReload (){
  location.reload();
}


// Sends Information from Login form to Patient Controller for Logging In
async function patientLoginHandler(event){
  event.preventDefault();

  const pLoginEmail = document.querySelector('#pLoginEmail').value;
  const pLoginPassword = document.querySelector('#pLoginPassword').value;

  if (pLoginEmail && pLoginPassword){
    const response = await fetch(`/api/patients`, { //placeholder route//
        method: 'POST',
        body: JSON.stringify({
        pLoginEmail,
        pLoginPassword,
        }),
        headers: {
        'Content-Type': 'application/json',
        },
    },
    console.log(response)
    );

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