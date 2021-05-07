const patientLogoutButton = document.querySelector("#patientLogoutBtn");

async function logoutHandler() {
  const response = await fetch("/api/patients/patient_logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/home");
  } else {
    logoutFailModalLaunch();
  }
}

async function logoutFailModalLaunch() {
  $("#myModal").modal("show");
}

if (patientLogoutButton) {
  patientLogoutButton.addEventListener("click", logoutHandler);
}
