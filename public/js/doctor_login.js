async function loginFailModal() {
  $("#loginFailModal").modal("show");
}

async function pageReload() {
  location.reload();
}

//Sends Information from Login Form to Doctor Controller for Logging In
async function doctorLoginHandler(event) {
  event.preventDefault();

  const dLoginEmail = document.querySelector("#dLoginEmail").value;
  const dLoginPassword = document.querySelector("#dLoginPassword").value;

  if (dLoginEmail && dLoginPassword) {
    const response = await fetch(`/api/doctors/doctor_login`, {
      method: "POST",
      body: JSON.stringify({
        dLoginEmail,
        dLoginPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/doctor_dashboard");
    } else {
      loginFailModal();
    }
  } else {
    loginFailModal();
  }
}

document
  .querySelector("#dLoginForm")
  .addEventListener("submit", doctorLoginHandler);
