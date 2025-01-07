//dinamik mennu elemanlarını oluşturma
const menuItems=['Anasayfa','Hakkımızda','Hizmetler','İletişim'];
const menu=document.getElementById('menu');
const hamburger=document.querySelector('.hamburger');

//menu elemanlarını döngü ile oluşturma
menuItems.forEach(item=>{
    const li=document.createElement('li');
    li.textContent=item;
    li.addEventListener('click', ()=>{
        alert(`${item}-seçildi!`);
    });
    menu.appendChild(li);
});

//hamburger menu aktif etme
hamburger.addEventListener('click',()=>{
   menu.classList.toggle('show');
});

//tıklayınca menu kapatma
menu.querySelectorAll('li').forEach(li=>{
    li.addEventListener('click',()=>{
        menu.classList.remove('show');
    });
});

