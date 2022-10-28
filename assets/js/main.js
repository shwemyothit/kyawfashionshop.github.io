/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// custum code to add item


var additm = document.querySelector('.products-container');
var addabt = document.querySelector('#about1');
console.log(additm);

function createCard([img, alt, product, category, price]) {
    let code = `
    <div class="product" id="card">
         <img src="${img}" alt="${alt}">
         <h3>${product}</h3>
         <p class="category">${category}</p>
         <div class="price" id="price">${price}</div>
      </div>
    
    `;
    additm.innerHTML += code;

}

let item1 = ["images/drugs/Antibiotic(Metronidazole suspension)].jpg", 'photo alt text', 'Metronidazole suspension', 'Antibiotic', '$2500 kyat']
let item2 = ["images/drugs/Antibiotic_Cefixime(Taxim-O).jpg", 'photo alt text', 'Cefixime', 'Antibiotic', '$2500 kyat']
let item3 = ["images/drugs/CNS_Pramipexole dihydrochloride(Pramipex).jpg", 'photo alt text', 'Pramipex', 'Pramipexole dihydrochloride', '$2500 kyat']
let item4 = ["images/drugs/Menopause.jpg", 'photo alt text', 'Menopause', 'Menopause', '$2500 kyat']
let item5 = ["images/drugs/Multivitamin(Neurobest).jpg", 'photo alt text', 'Neurobest', 'Multivitamin', '$2500 kyat']
let item6 = ["images/drugs/Multivitamin(Neurobion Forte).jpg", 'photo alt text', 'Neurobion Forte', 'Multivitamin', '$2500 kyat']
let item7 = ["images/drugs/Albendazole 400 mg.jpg", 'photo alt text', 'Albendazole', 'Antiprotozoal', '$2500 kyat']

createCard(item1);
createCard(item2);
createCard(item3);
createCard(item4);
createCard(item5);
createCard(item6);
createCard(item7);



function createAbt([img, alt, product, category, price]) {
    let code = `
    <div class="product" id="card">
         <img src="${img}" alt="${alt}">
         <h3>${product}</h3>
         <p class="category">${category}</p>
         <div class="price" id="price">${price}</div>
      </div>
    
    `;
    addabt.innerHTML += code;

}

let abt1 = ["images/drugs/Multivamin(meditone).jpg", 'photo alt text', 'Cherry Cough', 'cough suppressant', '$2500 kyat']
let abt2 = ["images/drugs/Multivitamin(Neurobest).jpg", 'photo alt text', 'Cherry Cough', 'cough suppressant', '$2500 kyat']
let abt3 = ["images/drugs/Multivitamin_Thiamine(Thyflox).jpg", 'photo alt text', 'Cherry Cough', 'cough suppressant', '$2500 kyat']

createAbt(abt1);
createAbt(abt2);
createAbt(abt3);