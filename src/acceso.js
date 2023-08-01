//Constantes y Variables a usar

const user= window.localStorage.getItem('user');
const userConvert= user ? JSON.parse(user) :'';

console.log(user);

//colocar el saldo actual de la cuenta en la pantalla
const saldoActual= function salAct(){
users.forEach(u=>{
    if (user == users.name) {
      saldoActual=users.saldo;
    }});
  };
  console.log(saldoActual());
/*  document.getElementById("saldoActual").innerText = saldoActual; */


//Cambio de Paginas en el Acceso
const saldo=document.querySelector('#consulSaldo');
const ingresar=document.querySelector('#ingMon');
const retirar=document.querySelector('#retMont')
const salir=document.querySelector("#cerrar");
const sal=document.querySelector('.saldo');
const ing=document.querySelector('.ingresar');
const ret=document.querySelector('.retirar'); 
const exit=document.querySelector('.cerrar');

saldo.addEventListener('click', () =>{
    sal.style.display= 'initial';
    ing.style.display= 'none';
    ret.style.display= 'none';
    exit.style.display= 'none';
    document.getElementById("saldoActual").innerText = saldoActual();     
  });
  
ingresar.addEventListener('click', () =>{
  sal.style.display= 'none';
  ing.style.display= 'initial';
  ret.style.display= 'none';
  exit.style.display= 'none';
  });
  
retirar.addEventListener('click', () =>{
  sal.style.display= 'none';
  ing.style.display= 'none';
  ret.style.display= 'initial';
  exit.style.display= 'none';
  });
  
salir.addEventListener('click', () =>{    
  sal.style.display= 'none';
  ing.style.display= 'none';
  ret.style.display= 'none';
  exit.style.display= 'initial';
  });

 const reset=document.querySelector('#reset');
reset.addEventListener('click', () =>{    
    sal.style.display= 'none';
    ing.style.display= 'none';
    ret.style.display= 'none';
    exit.style.display= 'none';
  });
// Formulas para los datos del usuario
 
//Ingresar y Retirar saldo de la cuenta

const formularioIngreso= document.querySelector('#formIngr');
const formularioRetiro= document.querySelector('#formRetir');
var saldoIngreso=0

formularioIngreso.addEventListener('submit', function ingreso(event){
  event.preventDefault();

  const ingresarSaldo= event.target.cantidadIngresar.value;
  saldoIngreso= ingresarSaldo+saldoActual;

  if (saldoIngreso<990) {
    document.querySelector(".saldoActualIgr").innerText = saldoIngreso;
     
  } else{
      alert('Solo se puede ingresar hasta un máximo de $990')
  }
})

var saldoRetirado=0

formularioRetiro.addEventListener('submit', function retiro(event){
  event.preventDefault();

  const retiroSaldo= event.target.cantidadRetirar.value;
  saldoRetirado= saldoActual-retiroSaldo;
  if (saldoRetirado>10) {
      
     
  } else{
      alert('Su cuenta no puede quedarse con $10 o menos')
  }
})
