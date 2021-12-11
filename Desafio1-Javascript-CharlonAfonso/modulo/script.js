function kitanda (){
    const frutasEstoque = document.querySelector('#produtos');
    const frutasCarrinho = document.querySelector('#cestaDoCliente');
    let frutas = [
    {'nome':'Mamão', 'preco': 2.5}, 
    {'nome':'Melancia', 'preco': 3.4}, 
    {'nome':'Laranja', 'preco': 1.5}, 
    {'nome':'Manga', 'preco': 4.2}, 
    {'nome':'Melão', 'preco': 5.5},
    ];
 
    for(let fru of frutas){
        var lia = document.createElement('li');
        frutasEstoque.appendChild(lia).textContent = fru['nome'];
        frutasEstoque.appendChild(lia).setAttribute('data-preco', fru['preco']);
        frutasEstoque.appendChild(lia).setAttribute('data-nome', fru['nome']);       
    }              

    function adicionarProdutosCarrinho (listaProdutos){
        const lista = document.querySelectorAll(`#${listaProdutos}>li`);
        for(let produto of lista){
            produto.addEventListener('click', function(){
                if(document.querySelector(`#${produto.textContent}`)){
                    alert(`Este item ${produto.innerHTML} já está na sua cesta`);
                } else{
                    let li = document.createElement('li');               
                    frutasCarrinho.appendChild(li).textContent = produto.textContent;
                    frutasCarrinho.appendChild(li).setAttribute('data-preco', produto.dataset.preco);
                    frutasCarrinho.appendChild(li).setAttribute('id', produto.dataset.nome);
                    calcularSoma('cestaDoCliente', 'mostraTotalCompra');
                } 
    })}}
    
    function calcularSoma (DadosCesta, InputResultado){
        const preco = document.querySelectorAll(`#${DadosCesta}>li`);
        const valorResultado = document.querySelector(`#${InputResultado}`);
        let total =0;
        for(let i of preco){
           total += Number(i.dataset.preco);
        }
        valorResultado.value ="R$ "+ total.toFixed(2);
    }
    adicionarProdutosCarrinho('produtos');
}
export{kitanda};