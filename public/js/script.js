const dismissSplashBtn = document.querySelector('#dismissSplashBtn');

async function logoutHandler () {
  const response = await fetch('/api/patients/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
      document.location.replace('/home');
  } else {
    logoutFailModalLaunch();
  }
};

async function doctorLogoutHandler () {
const response = await fetch('/api/doctors/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
});

if (response.ok) {
    document.location.replace('/home');
} else {
  logoutFailModalLaunch();
}
};

async function logoutFailModalLaunch (){
$('#myModal').modal('show');
}


if (window.location === "/home"){
document.querySelector('#logoutBtn').addEventListener('click', logoutHandler);
document.querySelector('#doctorLogoutBtn').addEventListener('click', doctorLogoutHandler);
}


function makeSplash (){
  let splash = document.querySelector('.splash');
  setTimeout (()=>{
    splash.classList.add("fade-out");
  },4500);
};

$("document").ready(makeSplash);

async function dismissSplash(){
  let splash = document.querySelector('.splash');
  setTimeout (()=>{
    splash.classList.add("display-none");
  },4500);
}

dismissSplashBtn.addEventListener('click', dismissSplash);
