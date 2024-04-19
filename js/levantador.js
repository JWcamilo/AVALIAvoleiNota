function avaliar() {


    let div = document.getElementById('resultado');
    
    
    const arrPessoa = []
    
    
        let nomeInput = document.getElementById('nome').value;
        let saqueInput = document.getElementById('saque').value;
        let levantamentoInput = document.getElementById('levantamento').value;
        let defesaInput = document.getElementById('defesa').value;
        
    
        const pessoa = {
    
            nome: nomeInput,
            saque: saqueInput,
            levantamento: levantamentoInput,
            defesa: defesaInput,
            media: calcularMedia(),
    
        }
    
        arrPessoa.push(pessoa);
    
        imprimir();
    
        console.log(arrPessoa);
    
    function calcularMedia() {
    
        let saque = parseFloat(document.getElementById("saque").value);
        let defesa = parseFloat(document.getElementById("defesa").value);
        let levantamento = parseFloat(document.getElementById("levantamento").value);
    
        let media = (saque + defesa + levantamento) / 3;
    
        return media;
    }
    
    function imprimir() {
    
    
    
        for (let i = 0; arrPessoa.length; i++) {
    
    
            div.innerHTML += ` 
    
                <tr>
    
                    <td> ${arrPessoa[i].nome} </td>
                    <td> ${arrPessoa[i].saque} </td>
                    <td> ${arrPessoa[i].defesa} </td>
                    <td> ${arrPessoa[i].levantamento} </td>
                    <td> ${arrPessoa[i].media} </td>
    
                </tr>
    
            `
            }
    
    }
    
    }