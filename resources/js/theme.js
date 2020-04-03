var themes = document.querySelectorAll('.theme span');
var root = document.querySelector(':root');
var t = getComputedStyle(document.body);


themes.forEach(function(theme) {
    theme.addEventListener('click', function(e){
        console.log(t.getPropertyValue('--theme-'+theme.id));
        root.style.setProperty('--color-primary',  t.getPropertyValue('--theme-'+theme.id));
        root.style.setProperty('--color-primary-light',  t.getPropertyValue('--theme-'+theme.id+'-light'));
        root.style.setProperty('--color-primary-dark',  t.getPropertyValue('--theme-'+theme.id+'-dark'));
        root.style.setProperty('--color-primary-rgb',  t.getPropertyValue('--theme-'+theme.id+'-rgb'));
        root.style.setProperty('--color-primary-light-rgb',  t.getPropertyValue('--theme-'+theme.id+'-light-rgb'));
        root.style.setProperty('--color-primary-dark-rgb',  t.getPropertyValue('--theme-'+theme.id+'-dark-rgb'));
        var x = document.getElementsByClassName('theme')[0].getElementsByClassName('active');
        if(x.length>0 && x[0].classList.contains('active'))
            x[0].classList.remove('active');
        theme.classList.add('active');
    });
})
