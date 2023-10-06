const menuButton = document.querySelector(".menu");
const closeButton = document.querySelector(".close");
const featureBtn = document.querySelector(".featureBtn");
const featureContainer = document.querySelector(".feature_container");
const arrowFeature = document.querySelector("#arrow_feature");
const companyBtn = document.querySelector(".companyBtn");
const companyContainer = document.querySelector(".company_container");
const arrowCompany = document.querySelector("#arrow_company");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", () => {
    nav.classList.add("show-nav");
    overlay.style.display = "block";
});

closeButton.addEventListener("click", () => {
    nav.classList.remove("show-nav");
    overlay.style.display = "none";
});

featureBtn.addEventListener('click', () => {
    if (featureContainer.style.display === 'block') {
        featureContainer.style.display = 'none'
        arrowFeature.style.transform = 'rotate(0deg)'
        featureBtn.style.height = '0'
    } else {
        featureContainer.style.display = 'block'
        arrowFeature.style.transform = 'rotate(180deg)'
        featureBtn.style.height = '28vh'
    }
})

companyBtn.addEventListener('click', () => {
    if (companyContainer.style.display === 'block') {
        companyContainer.style.display = 'none'
        arrowCompany.style.transform = 'rotate(0deg)'
        companyBtn.style.height = '0vh'
    } else {
        companyContainer.style.display = 'block'
        arrowCompany.style.transform = 'rotate(180deg)'
        companyBtn.style.height = '23vh'
    }
})

