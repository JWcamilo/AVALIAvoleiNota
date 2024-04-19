function avaliar() {


    let div = document.getElementById('resultado');
    
    
    const arrPessoa = []
    
    
        let nomeInput = document.getElementById('nome').value;
        let passeInput = document.getElementById('passe').value;
        let defesaInput = document.getElementById('defesa').value;
        
    
        const pessoa = {
    
            nome: nomeInput,
            passe: passeInput,
            defesa: defesaInput,
            media: calcularMedia(),
    
        }
    
        arrPessoa.push(pessoa);
    
        imprimir();
    
        console.log(arrPessoa);
    
    function calcularMedia() {
    
        let passe = parseFloat(document.getElementById("passe").value);
        let defesa = parseFloat(document.getElementById("defesa").value);
    
        let media = (passe + defesa) / 2;
    
        return media;
    }
    
    function imprimir() {
    
    
    
        for (let i = 0; arrPessoa.length; i++) {
    
    
            div.innerHTML += ` 
    
                <tr>
    
                    <td> ${arrPessoa[i].nome} </td>
                    <td> ${arrPessoa[i].passe} </td>
                    <td> ${arrPessoa[i].defesa} </td>
                    <td> ${arrPessoa[i].media} </td>
    
                </tr>
    
            `
            }
    
    }
    
    }