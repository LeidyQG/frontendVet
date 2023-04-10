class EspecieAPI{
    async guardarEspecie(){
        const nombre=document.getElementById("nombre").value;
        const clasificacion=document.getElementById("clasificacion").value;
        const esperanza_vida=parseInt(document.getElementById("esperanza_vida").value);
        const peso_promedio=parseFloat(document.getElementById("peso_promedio").value);

        //Crear el objeto json para paasar al backend
        const datos={
            nombre:nombre,
            clasificacion:clasificacion,
            esperanza_vida:esperanza_vida,
            peso_promedio:peso_promedio
        };

        await fetch(
            "http://localhost:3000/crearEspecie",//El json se usa si el método es post
            {
                method:"POST",
                body:JSON.stringify(datos),//Convierte el objeto JSON en una cadena de caracteres
                headers:{
                    "Content-Type":"application/json" //Le dice al servidor que espere un objeto json
                }

            }
        );

        console.log("El registro se guardó correctamente");
    }

    async listarEspecies(){

        let especies= await fetch("http://localhost:3000/listarEspecie");
        especies= await especies.json();
    
        const miTabla=document.getElementById("tabla_especies");
    
        especies.forEach(
            (especie)=>{
                const fila= miTabla.insertRow();
                fila.insertCell().innerText=especie.id_especie;
                fila.insertCell().innerText=especie.nombre;
                fila.insertCell().innerText=especie.clasificacion;
                fila.insertCell().innerText=especie.esperanza_vida;
                fila.insertCell().innerText=especie.peso_promedio;
            }
        );
    }
}


//Exporta la clase para usarla en otros archivos
export default EspecieAPI;
