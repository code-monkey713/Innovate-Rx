const newChatMessageBtn = document.querySelector('#newChatMessageBtn');

async function sendChatMessage(){
  const chatMessage = document.querySelector('#newChatMessage').value;

  console.log(chatMessage);

  const response = await fetch(`/api/chat`, {
    method: 'POST',
    body: JSON.stringify(chatMessage),
    headers: {'Content-Type': 'application/json'}
  });

  if (response.ok){
    document.querySelector('#newChatMessage').value = '';
    alert('message sent');
  } else {
    alert('message send failed');
  };
};

newChatMessageBtn.addEventListener('click', sendChatMessage);