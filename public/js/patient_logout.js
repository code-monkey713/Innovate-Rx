const patientLogoutButton = document.querySelector('#patientLogoutBtn')

async function logoutHandler () {
  alert('trying to log out')
  const response = await fetch('/api/patients/patient_logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
      document.location.replace('/home');
  } else {
    logoutFailModalLaunch();
  }
};

if (patientLogoutButton){
patientLogoutButton.addEventListener('click', logoutHandler);
}