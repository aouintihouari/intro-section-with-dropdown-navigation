const open = document.querySelector(".open");
const close = document.querySelector(".close");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");

const featuresNameMobile = document.querySelector(".features__mobile");
const companyNameMobile = document.querySelector(".company__mobile");

const featuresNameDesktop = document.querySelector(
  ".navigation__features-desktop"
);
const companyNameDesktop = document.querySelector(
  ".navigation__company-desktop"
);

function toggleDropDownMobile(element) {
  const image = element.querySelector("img");
  const dropDownMenu = element.querySelector("ul");
  if (image.src.endsWith("images/icon-arrow-down.svg")) {
    image.src = "images/icon-arrow-up.svg";
    dropDownMenu.style.height = "auto";
    dropDownMenu.style.display = "flex";
  } else {
    image.src = "images/icon-arrow-down.svg";
    dropDownMenu.style.height = "0";
    dropDownMenu.style.display = "none";
  }
}

function toggleDropDownDesktop(element) {
  const image = element.querySelector("img");
  const dropDownMenu = element.querySelector("ul");
  if (image.src.endsWith("images/icon-arrow-down.svg")) {
    image.src = "images/icon-arrow-up.svg";
    dropDownMenu.style.display = "flex";
  } else {
    dropDownMenu.style.display = "none";
    image.src = "images/icon-arrow-down.svg";
  }
}

open.addEventListener("click", () => {
  navigation.style.display = "flex";
  overlay.style.display = "block";
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  navigation.style.display = "none";
  overlay.style.display = "none";
  close.style.display = "none";
  open.style.display = "block";
});

featuresNameMobile.addEventListener("click", () => {
  toggleDropDownMobile(featuresNameMobile);
});

companyNameMobile.addEventListener("click", () => {
  toggleDropDownMobile(companyNameMobile);
});

featuresNameDesktop.addEventListener("click", () => {
  toggleDropDownDesktop(featuresNameDesktop);
});
companyNameDesktop.addEventListener("click", () => {
  toggleDropDownDesktop(companyNameDesktop);
});
