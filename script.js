//array plataformas streaming ***********************************************
const plataformasStreaming = []; 

//funcion vaciar array ******************************************************
function vaciarArray(array){
    array.splice(0,array.length);
}

//funcion verificar check ***************************************************
function funAmazon(array){
    const check = document.getElementById(`amazon-prime`);
    if(check.checked === true){
        array.push({name: `Amazon Prime`,cost: 4});
    }
}
function funAple(array){
    const check = document.getElementById(`aple-tv`);
    if(check.checked === true){
        array.push({name: `Aple TV`,cost: 6});
    }
}
function funDisney(array){
    const check = document.getElementById(`disney`);
    if(check.checked === true){
        array.push({name: `Disney +`,cost: 8});
    }
}
function funHbo(array){
    const check = document.getElementById(`hbo`);
    if(check.checked === true){
        array.push({name: `HBO`,cost: 7});
    }
}
function funNetflix(array){
    const check = document.getElementById(`netflix`);
    if(check.checked === true){
        array.push({name: `Netflix`,cost: 9});
    }
}
function funYoutube(array){
    const check = document.getElementById(`youtube`);
    if(check.checked === true){
        array.push({name: `Youtube Premium`,cost: 13});
    }
}

//generar array user segun check ********************************************
function generarListaUser(){
    vaciarArray(plataformasStreaming);
    funAmazon(plataformasStreaming);
    funAple(plataformasStreaming);
    funDisney(plataformasStreaming);
    funHbo(plataformasStreaming);
    funNetflix(plataformasStreaming);
    funYoutube(plataformasStreaming);
}

//funcion sumar costo total plataforma **************************************
function sumaCostoPlataformas(){
    costoPlataformas = plataformasStreaming.map(x => x.cost);
    totalCostoPlataformas = costoPlataformas.reduce((a,e)=> a+e)
    return totalCostoPlataformas;
}

//calcular si cine es mas caro que streming *********************************
function comparacionCostos() {
    const inputPelis = document.getElementById(`inputPelis`);
    limpiarResultado()
    document.getElementById(`analisis`).innerText = `Analisis`;
    document.getElementById(`analisis_parrafo`).innerText = `Gastas apx $${inputPelis.value*4} USD cada mes en cine, en plataformas gastas $${totalCostoPlataformas} USD. Las plataformas son una bendición ya que puedes acceder a miles de películas y series cuando quieras, pero no dejes de ir a cine de vez en cuando ya que es una experiencia mágica 🎥`;
}
//limpiar resultado *********************************************************
function limpiarResultado(){
    document.getElementById(`analisis`).innerText = ``;
    document.getElementById(`analisis_parrafo`).innerText = ``;
}

//Calcular resultado ********************************************************
function calcular(){
    const inputPelis = document.getElementById(`inputPelis`);
    if(inputPelis.value){
        generarListaUser();
        document.getElementById(`avisoPeliculas`).innerText = ``;
        if(plataformasStreaming.length>0){
            sumaCostoPlataformas();
            comparacionCostos();
        }else{
            limpiarResultado()
            document.getElementById(`analisis`).innerText = `Analisis`;
            document.getElementById(`analisis_parrafo`).innerText = 
            `El costo aproximado de de peliculas que ves al mes es de $${inputPelis.value*4} USD estaria bien que le dieras la oportunidad almenos a una plataforma de streaming 😎`;
        }
    }else{
        document.getElementById(`avisoPeliculas`).innerText = `❌Ingresa el aproximado de peliculas que ves❌`;
    }
}

generarListaUser();
    if(plataformasStreaming.length>0){
        sumaCostoPlataformas();
        comparacionCostos();
    }else{
    }
