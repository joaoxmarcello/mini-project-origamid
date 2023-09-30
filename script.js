const activeClass = 'ativo' ;

function initTabNav() {
const tabAnimais = document.querySelectorAll('.js-tabAnimais li');
const tabContent = document.querySelectorAll('#js-tabContent section');
tabContent[0].classList.add(activeClass);

if(tabAnimais.length && tabContent.length){
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });
    tabContent[index].classList.add(activeClass);
  }
  tabAnimais.forEach((item, index) => {
    item.addEventListener('click',() => {
      activeTab(index);
    })
  });
}}
initTabNav();

function initFaqAccordion(){

const accordionList = document.querySelectorAll('.js-faq dt');

if(accordionList.length){
accordionList[0].classList.add(activeClass);
accordionList[0].nextElementSibling.classList.add(activeClass);

function activeAccordion () {
 this.classList.toggle(activeClass)
 this.nextElementSibling.classList.toggle(activeClass);
}

accordionList.forEach((item) => {
  item.addEventListener("click", activeAccordion);
})
}}
initFaqAccordion();

function initScrollSmooth(){
const linksMenu = document.querySelectorAll('.js-menu a[href^="#"]');

function activeScroll(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const toSection = document.querySelector(href);

  toSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

linksMenu.forEach((link) => {
  link.addEventListener("click", activeScroll)
})}

initScrollSmooth();
