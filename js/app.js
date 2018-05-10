document.getElementById('generar-nombre').addEventListener('submit',generarNombres);


function generarNombres(e){
    e.preventDefault();

    const origen = document.getElementById('origen')
    origenSeleccionado=origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero')
    generoSeleccionado= genero.options[genero.selectedIndex].value;

    const numero = document.getElementById('numero').value;

    let url='';
    url += 'http://uinames.com/api/?' ;

    if (origenSeleccionado !== ''){
        url += `region=${origenSeleccionado}&`
    }

    if (generoSeleccionado !== ''){
        url += `gender=${generoSeleccionado}&`
    }

    if (numero !== ''){
        url += `amount=${numero}&`
    }

    fetch(url)
        .then(res => res.json())
        .then(nombres => {

            let htmlNombres =`<h2>Nombres generados</h2>`
            
                    htmlNombres += `<ul class="lista">`
            
                    nombres.forEach( function(nombre){
                        htmlNombres += `<li>${nombre.name}`;
                    });
            
                    htmlNombres +=`</ul>`
            
                    document.getElementById('resultado').innerHTML=htmlNombres;
        })
}