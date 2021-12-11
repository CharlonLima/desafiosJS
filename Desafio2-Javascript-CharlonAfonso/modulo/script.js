function buscarEndereco (){
    const numCep = document.querySelector("#cep");
    const busca = document.querySelector("#botao");
    const rua = document.querySelector("#logradouro");
    const bairro = document.querySelector("#bairro");
    const cidade = document.querySelector("#localidade");
    const estado = document.querySelector("#uf");

    busca.addEventListener('click', async function (){
        let site = `http://viacep.com.br/ws/${numCep.value}/json`;
        try{
           let dadosFetch = await fetch(site);
            let dadosJson = await dadosFetch.json();
            preencheFormulário(dadosJson); 
        } catch(error){
            alert("Vixe, deu erro. Por favor, Verifique se o CEP foi digitado corretamente. Agradeçemos a compreensão e tente novamente.");
            numCep.style.backgroundColor = 'red';
            rua.value = "";
            bairro.value = "";
            cidade.value = "";
            estado.value = "";
        }
        
    })
    numCep.addEventListener('click', ()=>{
        numCep.style.backgroundColor = 'white';
    }) 
    
    function preencheFormulário (dadosEndereco){
        for(let dados in dadosEndereco){
            if(document.querySelector(`#${dados}`)){
                document.querySelector(`#${dados}`).value=dadosEndereco[dados];
            }
        }
    }
}
export{buscarEndereco};
