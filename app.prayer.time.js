function dayNightVisualizer() {
  let hoursChangingForTime = new Date().getHours();
  console.log(hoursChangingForTime);
  let headingText = document.getElementById("headText");
  let divParent = document.getElementById("parentDiv");
  let changeTimePictures = document.getElementById("imageChange");
  let time = document.getElementById("time");
  time.innerHTML = new Date().toLocaleTimeString();
  //   <!-- Fajar -->//
  if (hoursChangingForTime >= 4 && hoursChangingForTime < 6) {
    headingText.innerHTML = "(فجر)";
    headingText.style.color = "rgb(255, 255, 255)";
    divParent.style.backgroundImage = "url('fajer pic.jpg')";
    changeTimePictures.style.backgroundImage =
      "url('earth-11015_1280-removebg-preview.png')";
    //   <!-- Fajar -->//

    // <!-- Ishraq -->//
  } else if (hoursChangingForTime >= 6 && hoursChangingForTime < 7) {
    headingText.innerHTML = "(إشراق)";
    divParent.style.backgroundImage = "url('ishraq.jpg')";
    headingText.style.color = "rgb(255, 255, 255)";
    changeTimePictures.style.backgroundImage =
      "url('earth-11015_1280-removebg-preview.png')";
    // <!-- Ishraq -->//

    // <!-- Chasht -->//
  } else if (hoursChangingForTime >= 7 && hoursChangingForTime <= 10) {
    headingText.innerHTML = "چاشت";
    divParent.style.backgroundImage = "url('chast pic.jpg')";
    headingText.style.color = "rgb(255, 255, 255)";
    changeTimePictures.style.backgroundImage =
      "url('earth-11015_1280-removebg-preview.png')";
    // <!-- Chasht -->//

    // <!-- Zohar -->//
  } else if (hoursChangingForTime >= 11 && hoursChangingForTime < 17) {
    headingText.innerHTML = "ظہر";
    divParent.style.backgroundImage = "url('Zohar pic.jpg')";
    headingText.style.color = "rgb(255, 255, 255)";
    changeTimePictures.style.backgroundImage =
      "url('earth-11015_1280-removebg-preview.png')";
    // <!-- Zohar -->//

    // <!-- Aser -->//
  } else if (hoursChangingForTime >= 17 && hoursChangingForTime < 18) {
    headingText.innerHTML = "عصر";
    divParent.style.backgroundImage = "url('aserPic.webp')";
    headingText.style.color = "rgb(255, 255, 255)";
    changeTimePictures.style.backgroundImage =
      "url('earth-11015_1280-removebg-preview.png')";
    // <!-- Aser -->//

    // <!-- Magrib -->//
  } else if (hoursChangingForTime >= 18 && hoursChangingForTime < 20) {
    headingText.innerHTML = "مغرب";
    divParent.style.backgroundImage = "url('magrib pic.jpg')";
    headingText.style.color = "rgb(255, 255, 255)";
    changeTimePictures.style.backgroundImage =
      "url('earth-11015_1280-removebg-preview.png')";
    // <!-- Magrib -->//

    //  <!-- Isha -->//
  } else if (hoursChangingForTime >= 20 || hoursChangingForTime <= 1) {
    headingText.innerHTML = "عشا";
    divParent.style.backgroundImage = "url('nighting.jpg')";
    headingText.style.color = "rgb(255, 255, 255)";
    changeTimePictures.style.backgroundImage =
      "url('earth-11015_1280-removebg-preview.png')";
    //  <!-- Isha -->//

    // <!-- Tahjjud -->//
  } else {
    headingText.innerHTML = "تہجد";
    divParent.style.backgroundImage = "url('nighting.jpg')";
    headingText.style.color = "rgb(255, 255, 255)";
    changeTimePictures.style.backgroundImage =
      "url('earth-11015_1280-removebg-preview.png')";
    // <!-- Tahjjud -->//
  }
}

setInterval(dayNightVisualizer, 1000);
