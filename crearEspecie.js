import EspecieAPI from "./EspecieAPI.js"; //En fronEnd sólo se importa archivos con import

const miEspecie=new EspecieAPI();

const miBoton=document.getElementById("btnProcesar");
miBoton.addEventListener('click',
async (event)=>{
    event.preventDefault();
    miBoton.disabled=true;//Deshabilita el botón para que no envien en formulario muchas veces
    await miEspecie.guardarEspecie();
}
);