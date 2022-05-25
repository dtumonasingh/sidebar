const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('close-button');
const sidebarItemsText = document.getElementsByClassName('sidebar__items--text')
const titles = document.getElementsByClassName('title')
const circle = document.getElementsByClassName('circles')
const messageSection = document.getElementById('message-section');
const sideBarItemsSection = document.getElementById('sidebar-items-section')
const companyInfo = document.getElementById('company-info')


sidebar.addEventListener('click', function(){
    sidebar.classList.add('sidebar--wide')
    closeButton.classList.add('visible')
    console.log(sidebarItemsText)
    Array.prototype.forEach.call(sidebarItemsText, a => {
        a.classList.add('visible')
      });
    messageSection.classList.add('message-section--wide')
    sideBarItemsSection.classList.add('sidebar__items-section--wide')
    Array.prototype.forEach.call(titles, a => {
      a.classList.add('flex-start')
    });
    Array.prototype.forEach.call(circle, a => {
      a.classList.add('flex-start')
    });
    companyInfo.classList.add('flex-start')
})

closeButton.addEventListener('click', function(event) {
    event.stopPropagation();
    sidebar.classList.toggle('sidebar--wide')
    closeButton.classList.remove('visible')
    Array.prototype.forEach.call(sidebarItemsText, a => {
        a.classList.remove('visible')
      });
    messageSection.classList.remove('message-section--wide')
    sideBarItemsSection.classList.remove('sidebar__items-section--wide')
    Array.prototype.forEach.call(titles, a => {
      a.classList.remove('flex-start')
    });
    Array.prototype.forEach.call(circle, a => {
      a.classList.add('flex-start')
    });

    companyInfo.classList.remove('flex-start')

})
