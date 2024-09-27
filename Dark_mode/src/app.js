document.addEventListener('DOMContentLoaded',()=>{
    const switcherTheme = document.querySelector('[data-id="switch-theme"]');
    const htmlTag = document.documentElement;

    switcherTheme.addEventListener('change', toggleTheme);

    if(htmlTag.getAttribute('data-theme') === 'dark'){
        switcherTheme.checked = true;
    }

    function toggleTheme(){
        const newTheme = switcherTheme.checked ? 'dark' : 'ligth';

        htmlTag.setAttribute('data-theme', newTheme);

        localStorage.setItem('theme', newTheme);
    }
})