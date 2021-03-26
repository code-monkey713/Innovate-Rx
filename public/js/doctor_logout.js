 const doctorLogoutButton = document.querySelector('#doctorLogoutBtn')

async function logoutHandler () {
  const response = await fetch('/api/doctors/doctor_logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
      document.location.replace('/home');
  } else {
    console.log(response)
    logoutFailModalLaunch();
  }
};


if(doctorLogoutButton){
  doctorLogoutButton.addEventListener('click', logoutHandler);
}
