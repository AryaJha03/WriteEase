const edit = document.querySelector('.js-manipulation');
const nonresponsive = `<div>
<button>
    <img src="WriteEase WhatsApp Extracted/image 18.png" alt="">
    <div>Start on WhatsApp</div>
</button>
<div class="whatsapptext">Get your free account today</div>
</div>`;
const responsive = `<div class="mascotcontent"> <img src="WriteEase WhatsApp Extracted/Ellipse 46.png" alt="">
<span>Marketer</span>
</div>
<div>
<button>
    <img src="WriteEase WhatsApp Extracted/image 18.png" alt="">
    <div>Start on WhatsApp</div>
</button>
<div class="whatsapptext">Get your free account today</div>
</div>
<div class="mascotcontent"> <img src="WriteEase WhatsApp Extracted/Ellipse 44.png" alt="">
<span>writer</span>
</div>`;

if (window.innerWidth < 800) {
    const price = document.querySelectorAll('.pricingboxpricing');
    price[0].innerHTML = `<span> $0 </span><button class='pricingbutton'>Start for free</button>`;
    price[1].innerHTML = `<span> $5 </span><button class='pricingbutton'>Choose Plan</button>`;
    price[2].innerHTML = `<span> $49 </span><button class='pricingbutton'>Choose Plan</button>`;

    const img = document.querySelector('.phone');
    img.innerHTML = `<img class="phoneimg" src="WriteEase WhatsApp Extracted/img22.png" alt="">`

    edit.innerHTML = responsive;
}
else {
    edit.innerHTML = nonresponsive;
}



const navbar = document.querySelector('.navbar');
const hamIcon = document.querySelector('.ham-icon');
const cover = document.querySelector('.cover');
const listItem = document.querySelectorAll('.navbar-item');
hamIcon.addEventListener('click', () => {
    navbar.style.transform = 'translateX(72vw)';
    cover.style.display = "block";
    hamIcon.style.zIndex = "-5";
    cover.style.backgroundColor = "rgba(0, 0, 0, 0.315)";
})
cover.addEventListener('click', () => {
    hamIcon.style.zIndex = "1";
    navbar.style.transform = 'translateX(-72vw)';
    cover.style.display = "none";
    cover.style.backgroundColor = "white";
})
listItem.forEach(element => {
    element.addEventListener('click', () => {
        hamIcon.style.zIndex = "1";
        navbar.style.transform = 'translateX(-72vw)';
        cover.style.display = "none";
        cover.style.backgroundColor = "white";
    })
});