const imgsContent = document.querySelectorAll('.js-tabContent li')
const tabMenu = document.querySelectorAll('.js-tabMenu li')
imgsContent[0].classList.add('ativo')

function activeTab(index) {
    imgsContent.forEach((content) => {
        content.classList.remove('ativo')
        imgsContent[index].classList.add('ativo')
    })
    
}
tabMenu.forEach((item,index) =>{
    item.addEventListener('click',() => {
        activeTab(index)
    })
})