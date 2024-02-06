async function carregarPaleta(){
    let response = await fetch('./data.json')
    let jsonData = await response.json()

    // console.log(jsonData);


// criando um indice aleatorio para a variavel (jsonData)
    const indiceAleatorio = Math.floor(Math.random() * jsonData.length);
    // console.log(jsonData[indiceAleatorio]);

// chamei a funçao que exibe algo na tela sendo chamada
    atribuirCores(jsonData[indiceAleatorio]);
    // console.log(jsonData[indiceAleatorio]);
}

carregarPaleta();




//  criei uma funçao para jogar na tela 
function atribuirCores(paleta){
    // vai na div que eu quero 
    let principal = document.querySelectorAll('.principal div') 

    // passeia dentro do array
    for(i = 0 ; i < paleta.colorPalette.length ; i++){

        const codigoHexadecimal = paleta.colorPalette[i];

        // 1- declarando a variavel que se refere a div,
        // 2- declarei o indice que passa por cada objeto do array
        // 3- acessei o estilo e o background dizendo que eles sao
        //    iguais aos objetos do array
        principal[i].style.background = codigoHexadecimal
        // console.log(paleta.colorPalette[i]);
        // console.log(paleta);

        // ======= 2 parte ====>> atualizar o exadecimal em tela 


        // fiz a mesma coisa 
        principal[i].querySelector('p').textContent = codigoHexadecimal
        // console.log(paleta.colorPalette[i]);


        
        
        
    }
}



document.querySelectorAll('.copiar').forEach(botao => {
    botao.addEventListener('click', function() {
        const codigoHexadecimal = this.parentNode.querySelector('p').textContent;
        copiarTexto(codigoHexadecimal);
    });
});



function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado: ' + texto);
    })
}


function trocarOrdemCores() {
    
    //acessa a div principal
    const divPrincipal = document.querySelector('.principal');
    // transforma os filhos da div principal em array
    const divs = Array.from(divPrincipal.children);
    // 
    divs.reverse();
    // 
    divs.forEach((div) => {
        divPrincipal.appendChild(div);
    });

    
}

document.getElementById('trocarOrdem').addEventListener('click', trocarOrdemCores);



















