function withPatientAuth(req, res, next) {
  if (!req.session.isDoctor) {
    if (!req.session.loggedIn){
    res.redirect('/patient_login');
  } else {
    next();
  }
}
};

function withDoctorAuth(req, res, next) {
  if (req.session.isDoctor) {
    if (!req.session.loggedIn){
    res.redirect('/doctor_login');
  } else {
    next();
  }
}
};

// function withDoctorAuth(req, res, next){
//   if (req.session.loggedIn){
//     if ()
//   }
// }



  
  module.exports = { withPatientAuth, withDoctorAuth };

