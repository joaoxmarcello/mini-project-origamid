const tabAnimais = document.querySelectorAll('.js-tabAnimais li');
const tabContent = document.querySelectorAll('#js-tabContent section');
tabContent[0].classList.add('ativo');

if(tabAnimais.length && tabContent.length){
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }
  tabAnimais.forEach((item, index) => {
    item.addEventListener('click',() => {
      activeTab(index);
    })
  });
}