//Constantes y Variables a usar

const user = window.localStorage.getItem('user');
const userConvert = user ? JSON.parse(user) : '';

let saldoActualUsuario = 0;

//Colocar el saldo actual de la cuenta en la pantalla
const obtenerSaldoActualDeUsuario = function salAct() {
  let saldo = 0;
  users.forEach(u => {
    if (userConvert == u.name) {
      saldo = u.saldo;
    }
  });
  return saldo;
};

saldoActualUsuario = obtenerSaldoActualDeUsuario();
document.getElementById("saldoActual").innerText = saldoActualUsuario;
document.getElementById("saldoActualIgr").innerText = saldoActualUsuario;
document.getElementById("saldoActualRet").innerText = saldoActualUsuario;

//Cambio de Paginas en el Acceso
const saldo=document.querySelector('#consulSaldo');
const ingresar=document.querySelector('#ingMon');
const retirar=document.querySelector('#retMont')
const salir=document.querySelector("#cerrar");
const sal=document.querySelector('.saldo');
const ing=document.querySelector('.ingresar');
const ret=document.querySelector('.retirar');


saldo.addEventListener('click', () =>{
    sal.style.display= 'initial';
    ing.style.display= 'none';
    ret.style.display= 'none';   
  });
  
ingresar.addEventListener('click', () =>{
  sal.style.display= 'none';
  ing.style.display= 'initial';
  ret.style.display= 'none';
  });
  
retirar.addEventListener('click', () =>{
  sal.style.display= 'none';
  ing.style.display= 'none';
  ret.style.display= 'initial';
  });
  
//Ingresar y Retirar saldo de la cuenta

const formularioIngreso= document.querySelector('#formIngr');
const formularioRetiro= document.querySelector('#formRetir');
var saldoIngreso = 0;
var saldoRetirado = 0;

formularioIngreso.addEventListener('submit', function ingreso(event){
  event.preventDefault();

  let ingresarSaldo= event.target.cantidadIngresar.value;

  saldoIngreso= saldoActualUsuario + Number(ingresarSaldo);

  if (saldoIngreso < 990) {
    document.getElementById("saldoActualIgr").innerText = saldoIngreso;
    document.getElementById("saldoActual").innerText = saldoIngreso;
    document.getElementById("saldoActualRet").innerText = saldoIngreso;

  } else{
      alert('Solo se puede ingresar hasta un máximo de $990')
  };
  event.target.reset();
});

formularioRetiro.addEventListener('submit', function retiro(event){
  event.preventDefault();

  let retiroSaldo= event.target.cantidadRetirar.value;

  saldoRetirado= saldoActualUsuario - Number(retiroSaldo);
  
  if (saldoRetirado > 10) {
    document.getElementById("saldoActualRet").innerText = saldoRetirado;
    document.getElementById("saldoActual").innerText = saldoRetirado;
    document.getElementById("saldoActualIgr").innerText = saldoRetirado;
    
  } else{
      alert('Su cuenta no puede quedarse con $10 o menos')
  }
  event.target.reset();
})
