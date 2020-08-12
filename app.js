
document.addEventListener('DOMContentLoaded', function () {

    const tabs = document.querySelectorAll('[data-target]');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', handler);
    }
});

function handler(e) {
    const tabGroupName = e.target.getAttribute('data-tabgroup-name'); // "mainTabs
    const selectionQuery = '[data-tabgroup-name="' + tabGroupName + '"]'; // [data-tabgroup-name="mainTabs"]
    const tabGroupElements = document.querySelectorAll(selectionQuery);

    for (let i = 0; i < tabGroupElements.length; i++) {
        const element = tabGroupElements[i];
        element.classList.remove('active');
        toggleElementbyDataAtribute(element, 'none');
    }

    e.target.classList.add('active');
    toggleElementbyDataAtribute(e.target, 'block');
}

function toggleElementbyDataAtribute(element, display){
    document.getElementById(element.getAttribute('data-target')).style.display = display;
}
