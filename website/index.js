const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch('https://4gtbpyqpidrkjsb6b3tr34r2om0uqimt.lambda-url.ap-south-1.on.aws/');
    let data = await response.json();
    console.log(data);
    counter.innerHTML = `This Resume has been Viewed by ${data}`;
}

updateCounter();