const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".nav__burger");
const navItems = document.querySelectorAll(".nav__items");
const allNavItems = document.querySelectorAll(".nav__item");
const navLogo = document.querySelector(".nav__logo");
const navContact = document.querySelector(".nav__contact");
const aboutTitle = document.querySelector(".about__title");
const aboutSection = document.querySelector(".about__content.first");
const aboutSections = document.querySelectorAll(".about__content");
const projects = document.querySelectorAll(".project");
const projectTitle = document.querySelector(".projects__title");
const servicesTitle = document.querySelector(".services__title");
const servicesImg = document.querySelector(".services__img");
const privacyPolicy = document.querySelector(".contact__info-box a");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");
const body = document.querySelector("body");

//ABOUT SECTION

function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	const offset = 100;
	return (
		rect.top <
			(window.innerHeight || document.documentElement.clientHeight) - offset &&
		rect.bottom >= 0
	);
}

function showAboutSections() {
	if (isInViewport(aboutTitle)) {
		aboutSections.forEach((section) => {
			section.classList.add("active");
		});
	}
}

//PROJECTS SECTION

const showProjectScection = () => {
	if (isInViewport(projectTitle)) {
		projects.forEach((project) => {
			project.classList.add("project--active");
		});
	}
};

// SERVICES SECTION

const showServicesImage = () => {
	if (isInViewport(servicesTitle)) {
		servicesImg.classList.add("services__img--active");
	}
};

// NAVI SECTION

const changeNavColor = () => {
	const aboutTitlePosition = aboutTitle.getBoundingClientRect().top;
	const triggerOffset = 100;

	if (aboutTitlePosition < triggerOffset) {
		nav.classList.add("nav--black");
		burgerBtn.classList.add("nav__burger--black");
		allNavItems.forEach((item) => item.classList.add("nav__item--white"));
		navLogo.classList.add("nav__logo--white");
		navContact.classList.add("nav__contact--white");
	} else {
		nav.classList.remove("nav--black");
		burgerBtn.classList.remove("nav__burger--black");
		allNavItems.forEach((item) => item.classList.remove("nav__item--white"));
		navLogo.classList.remove("nav__logo--white");
		navContact.classList.remove("nav__contact--white");
	}
};

const showNav = () => {
	nav.classList.toggle("nav--active");
	burgerBtn.classList.toggle("nav__burger--black");

	navItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});
};

//PRIVACY POLICY

const showPrivacyPolicy = () => {
	modal.classList.add("modal--active");
};
const closePrivacyPolicy = () => {
	modal.classList.remove("modal--active");
};

// EVENT LISTENERS

burgerBtn.addEventListener("click", showNav);
window.addEventListener("scroll", changeNavColor);
window.addEventListener("scroll", showAboutSections);
window.addEventListener("scroll", showProjectScection);
window.addEventListener("scroll", showServicesImage);
privacyPolicy.addEventListener("click", showPrivacyPolicy);
modalCloseBtn.addEventListener("click", closePrivacyPolicy);
