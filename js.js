const portfolio = document.querySelectorAll(".portfolio-box");

const portfolioLinks = [
  "#",
  "https://bekary-ashen.vercel.app/",
  "https://resturant-six-rose.vercel.app/",
  "#",
  "#",
  "#"
];

portfolio.forEach((item, index) => {
  item.addEventListener("click", function () {
    window.open(portfolioLinks[index], "_blank");
  });
});






const blogBtn = document.querySelectorAll(".item-blogs button");

const blogLinks = [
  "https://bekary-ashen.vercel.app/",
  "#",
  "https://resturant-six-rose.vercel.app/"
];

blogBtn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    window.open(blogLinks[index], "_blank");
  });
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Message Sent Successfully");

    contactForm.reset();
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let inputs = contactForm.querySelectorAll("input, textarea");

    for (let input of inputs) {
        if (input.value.trim() === "") {
            alert("Please fill all fields");
            return;
        }
    }

    alert("Message Sent Successfully");
    contactForm.reset();
});