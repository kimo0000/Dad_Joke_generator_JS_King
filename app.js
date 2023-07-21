const API_KEY = "LUmXeNMkctXrhpcV8h+LnQ==QYaOKA0bVInCDkl1";

const API_URL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  methode: "GET",
  headers: {
    "X-Api-Key": API_KEY,
  },
};

const btn = document.querySelector("#generate");
const result = document.querySelector(".result");

let counter = 0;

btn.addEventListener("click", getData);

async function getData() {
  try {
    result.textContent = "Updating...";
    btn.style.pointerEvents = "none";
    btn.textContent = "Download...";

    const response = await fetch(API_URL, options);
    const data = await response.json();
    console.log(data);

    // counter++;

    // if(counter > data.length-1) {
    //     counter = 0;
    // }

    // if(counter < 0) {
    //     counter = data.length-1;
    // }

    // console.log(counter)
    // console.log(data[counter])

    showData(data);
  } catch (error) {
    result.textContent = "Error Happing Please Try Again !";
    btn.style.pointerEvents = "auto";
    btn.textContent = "Tell me A Jocke";
  }
}

function showData(data) {
  btn.style.pointerEvents = "auto";
  btn.textContent = "Tell me A Jocke";
  result.textContent = data[0].joke;
}
