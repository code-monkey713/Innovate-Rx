async function ShowFeedbackSubmission(){
    //document.getElementById("feedbacksubmitted").style.display = "block";
    alert("Feedback submitted");
}

async function ShowFeedbackSubmissionError(){
  //document.getElementById("feedbacksubmitted").style.display = "block";
  alert("Error when submitting a Feedback");
}

async function submitFeedback(event){
  event.preventDefault();

  const feedbackVar = document.querySelector("#feedbackSection").value;
console.log(feedbackVar);
if(feedbackVar){
  try{
  const response = await fetch(`/api/feedback`, {
    method: "POST",
    body : JSON.stringify( {
      feedbackVar: feedbackVar,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response.status)
  if(response.ok){
    alert(response.body.JSON);
    console.log(response.value);
  }
}catch(e){
  console.log(e);
  }
}else{
    alert("Please enter a feedback to submit");
  }
}

document
  .querySelector("#submitFeedback")
  .addEventListener( "click", submitFeedback);


  // submitFeedback()