// VARIABLES
const listStreaming = [];

// GENERAR LISTA SEGUN CHECK
function createList(listaOfGenerate) {
  const checkAmazon = document.getElementById(`amazon-prime`);
  const checkAple = document.getElementById(`aple-tv`);
  const checkDisney = document.getElementById(`disney`);
  const checkHbo = document.getElementById(`hbo`);
  const checkNetflix = document.getElementById(`netflix`);
  const checkYoutube = document.getElementById(`youtube`);

  if (checkAmazon.checked)
    listaOfGenerate.push({ name: `Amazon Prime`, cost: 4 });

  if (checkAple.checked) listaOfGenerate.push({ name: `Aple TV`, cost: 6 });

  if (checkDisney.checked) listaOfGenerate.push({ name: `Disney +`, cost: 8 });

  if (checkHbo.checked) listaOfGenerate.push({ name: `HBO`, cost: 7 });

  if (checkNetflix.checked) listaOfGenerate.push({ name: `Netflix`, cost: 9 });

  if (checkYoutube.checked)
    listaOfGenerate.push({ name: `Youtube Premium`, cost: 13 });
}

// CLEAR LIST
function cleanList(listaForClear) {
  listaForClear.splice(0, listaForClear.length);
}

// CLEAN ANALISIS
function cleanAnalisis() {
  document.getElementById(`avisoPeliculas`).innerHTML = ``;
}

// COSTO TOTAL PLATAFORMAS
function costStreaming(listForCost) {
  if (listForCost.length > 0) {
    const cost = listForCost.map((element) => element.cost);
    const totalStreaming = cost.reduce(
      (acumulador, elemento) => acumulador + elemento
    );
    return totalStreaming;
  } else {
    return (totalStreaming = 0);
  }
}

// COSTO TOTAL CINE
function costCine() {
  const inputCine = document.getElementById(`inputPelis`);
  document.getElementById(`avisoPeliculas`).innerHTML = ``;
  if (inputCine.value && inputCine.value > 0) {
    const totalCine = inputCine.value * 4;
    return totalCine;
  } else {
    document.getElementById(`avisoPeliculas`).innerHTML = `
    ❌Ingresa el aproximado de peliculas que ves❌
    `;
  }
}

// BOTON CALCULAR - INTERACTIVIDAD PROGRAMA
function calcular() {
  costCine();
  cleanAnalisis();
  cleanList(listStreaming);

  if (costCine() > 0) {
    createList(listStreaming);
    if (listStreaming.length === 0) {
      document.getElementById("analisis").innerHTML = `
      <h2>Analisis</h2>
      <p>
      Costo de cine <strong class="tarjeta__analisis-cost">$${costCine()} USD</strong>
      </p>
      <p>🤍 Arriesgate por una plataforma y descubre cientos de peliculas 🧐</p>
      `;
    } else {
      if (costCine() >= costStreaming(listStreaming)) {
        document.getElementById("analisis").innerHTML = `
        <h2>Analisis</h2>
        <p>
        Costo de Cine <strong class="tarjeta__analisis-cost">$${costCine()} USD</strong></br>
        VS</br>
        Costo de Streaming <strong class="tarjeta__analisis-cost">$${costStreaming(
          listStreaming
        )} USD </strong>
        </p>
        <p>💚 Las plataformas de streaming son una bendición 💚</p>
        `;
      } else {
        document.getElementById("analisis").innerHTML = `
        <h2>Analisis</h2>
        <p>
        Costo de Cine <strong class="tarjeta__analisis-cost">$${costCine()} USD</strong></br>
        VS</br>
        Costo de Streaming <strong class="tarjeta__analisis-cost">$${costStreaming(
          listStreaming
        )} USD </strong>
        </p>
        <p>🤯 Eres adico a las plataformas _ esta bien ver pelis _ pero esta mejor estudiar en platzi 🤩</p>
        `;
      }
    }
  }
}
