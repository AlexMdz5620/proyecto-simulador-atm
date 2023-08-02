//Cambio de Paginas en el Index
const inicio=document.querySelector('#h1');
const individuo=document.querySelector('#ind1');
const sociedad=document.querySelector('#soc1')
const acceso=document.querySelector("#acceso");
const parr=document.querySelector('.in');
const parr2=document.querySelector('.ind');
const parr3=document.querySelector('.soc');
const formu=document.querySelector('#formulario');

inicio.addEventListener('click', () =>{
  parr.style.display= 'initial';
  parr2.style.display= 'none';
  parr3.style.display= 'none';
  formu.style.display= 'none';
});

individuo.addEventListener('click', () =>{
  parr.style.display= 'none';
  parr2.style.display= 'initial';
  parr3.style.display= 'none';
  formu.style.display= 'none';
});

sociedad.addEventListener('click', () =>{
  parr.style.display= 'none';
  parr2.style.display= 'none';
  parr3.style.display= 'initial';
  formu.style.display= 'none';
});

acceso.addEventListener('click', () =>{    
  parr.style.display= 'none';
  parr2.style.display= 'none';
  parr3.style.display= 'none';
  formu.style.display= 'initial';
});

//Formulario de Acceso a la cuenta

const loginForm= document.querySelector('#formulario');
loginForm.addEventListener('submit', function(event){
  event.preventDefault();

  const user= event.target.usuario.value;
  const pass= event.target.contraseña.value;
  let userIsLoggedIn = false;
  users.forEach(u=>{
    if (u.name === user) {
      console.log(u.name, user, (u.name === user));
      if (u.password == pass) {
        userIsLoggedIn = true;
        window.localStorage.setItem("user", JSON.stringify(user));
        return location = "acceso.html";
      };
    };
  });
  
  if (!userIsLoggedIn) {
    alert("Usuario o contraseña incorrectos.");
  }

  event.target.reset();
});