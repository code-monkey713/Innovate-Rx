const newVisitStartBtn = document.querySelector('#newVisitStartBtn');

async function startNewVisit(){
    location.href = '/visit'
};

newVisitStartBtn.addEventListener('click', startNewVisit)