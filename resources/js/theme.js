var themes = document.querySelectorAll('.theme span');
var root = document.querySelector(':root');
var t = getComputedStyle(document.body);


themes.forEach(function(theme) {
    theme.addEventListener('click', function(e){
        console.log(t.getPropertyValue('--theme-'+theme.id));
        root.style.setProperty('--color-primary',  t.getPropertyValue('--theme-'+theme.id));
        root.style.setProperty('--color-primary-light',  t.getPropertyValue('--theme-'+theme.id+'-light'));
        root.style.setProperty('--color-primary-dark',  t.getPropertyValue('--theme-'+theme.id+'-dark'));
    });
})
