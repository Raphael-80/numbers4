const filterbuttons = document.querySelectorAll('.filter-option')
const gallery = document.querySelectorAll('.gallery .gallery-sides');

filterbuttons.forEach(option => {
    option.addEventListener('click', () => {
        filterbuttons.forEach(o=> o.classList.remove('active'));
        option.classList.add('active');
        const filterCategory = option.getAttribute('data-name');
        gallery.forEach(item => {
            if (filterCategory === 'all' || item.getAttribute('data-name') === filterCategory){
                item.style.display = 'flex'
            }else{
                item.style.display = 'none'
            }
        });
    });
});