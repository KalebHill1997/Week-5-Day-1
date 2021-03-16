function getRandomNumber() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      const rand = Math.floor(Math.random() * 1000);
      resolve(rand);
    }, 500);
  });
}

//second half of first part of assignment

async function newFunction() {
  let randomNum = await getRandomNumber();
  console.log(randomNum);
}
newFunction();

//second part of assignment

async function city(cityName) {
  const response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
  const info = await response.json();
  console.log("The latitude is " + info.longt + ".\nThe longitude is " + info.latt);
}
city("new york city");