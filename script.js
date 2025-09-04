document.addEventListener('DOMContentLoaded', function() {

    // Sort
    const sortButton = document.querySelector('.mobile-sort-btn');
    const sortMenu = document.getElementById('sort-sheet');
    const closeSortButton = sortMenu.querySelector('.sheet-overlay');
    // Filter
    const filterButton = document.querySelector('.mobile-filter-btn');
    const filterPage = document.getElementById('filter-page');
    const closeFilterButton = filterPage.querySelector('.close-filter-btn');
    // Search
    const searchButton = document.querySelector('.mobile-search-container');
    const searchPage = document.getElementById('mobileSearchOverlay');
    const closeSearchButton = searchPage.querySelector('#closeSearchBtn');

    sortButton.addEventListener('click', function() {
        sortMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    filterButton.addEventListener('click', function() {
        filterPage.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeSortButton.addEventListener('click', function() {
        sortMenu.classList.remove('active');
        document.body.style.overflow = '';
    });

    closeFilterButton.addEventListener('click', function() {
        filterPage.classList.remove('active');
        document.body.style.overflow = '';
    });

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        searchPage.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeSearchButton.addEventListener('click', function() {
        searchPage.classList.remove('active');
        document.body.style.overflow = '';
    });

});