const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

function toggleDropdownMenu() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    
    if (isOpen) {
        toggleBtnIcon.classList = 'fa-solid fa-xmark';
    } else {
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
}

toggleBtn.onclick = function() {
    toggleDropdownMenu();
};

document.addEventListener('click', function(event) {
    if (!toggleBtn.contains(event.target) && !dropDownMenu.contains(event.target)) {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
});

(function initializeMenu() {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
})();

console.log('Dropdown functionality initialized');
