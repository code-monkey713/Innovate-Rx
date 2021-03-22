async function logoutHandler () {
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

document.querySelector('#patientLogoutBtn').addEventListener('click', logoutHandler);