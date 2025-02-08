const features = document.querySelector(".features__sublist");
const company = document.querySelector(".company__sublist");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");

const featureItem = document.querySelector(".features");
const companyItem = document.querySelector(".company");
const menu = document.querySelector(".menu");

function toggleSubmenu(element, container) {
  const image = container.querySelector(".arrow");
  if (element.classList.contains("show"))
    image.src = "images/icon-arrow-down.svg";
  else image.src = "images/icon-arrow-up.svg";
  element.classList.toggle("show");
}

featureItem.addEventListener("click", () =>
  toggleSubmenu(features, featureItem)
);

companyItem.addEventListener("click", () =>
  toggleSubmenu(company, companyItem)
);

menu.addEventListener("click", () => {
  const featuresSub = document.querySelector(".features__sublist");
  const companySub = document.querySelector(".company__sublist");
  const features = document.querySelector(".features");
  const company = document.querySelector(".company");

  if (menu.src.endsWith("images/icon-menu.svg")) {
    menu.classList.remove("open");
    menu.classList.add("close");
    navigation.style.display = "flex";
    overlay.style.display = "block";
    menu.src = "images/icon-close-menu.svg";
  } else {
    menu.src = "images/icon-menu.svg";
    menu.classList.remove("close");
    menu.classList.add("open");
    navigation.style.display = "none";
    overlay.style.display = "none";
  }

  features.addEventListener("click", () => {
    if (featuresSub.style.display === "none") {
      features.querySelector(".arrow").src = "images/icon-arrow-up.svg";
      featuresSub.style.display = "flex";
      features.style.height = "200px";
    } else {
      features.querySelector(".arrow").src = "images/icon-arrow-down.svg";
      featuresSub.style.display = "none";
      features.style.height = "auto";
    }
  });

  company.addEventListener("click", () => {
    if (companySub.style.display === "none") {
      company.querySelector(".arrow").src = "images/icon-arrow-up.svg";
      companySub.style.display = "flex";
      company.style.height = "130px";
    } else {
      company.querySelector(".arrow").src = "images/icon-arrow-down.svg";
      companySub.style.display = "none";
      company.style.height = "auto";
    }
  });
});
