function avaliar() {


    let div = document.getElementById('resultado');
    
    
    const arrPessoa = []
    
    
        let nomeInput = document.getElementById('nome').value;
        let ataqueInput = document.getElementById('ataque').value;
        let saqueInput = document.getElementById('saque').value;
        let bloqueioInput = document.getElementById('bloqueio').value;
        let passeInput = document.getElementById('passe').value;
        let defesaInput = document.getElementById('defesa').value;
        
    
        const pessoa = {
    
            nome: nomeInput,
            ataque: ataqueInput,
            saque: saqueInput,
            bloqueio: bloqueioInput,
            passe: passeInput,
            defesa: defesaInput,
            media: calcularMedia(),
    
        }
    
        arrPessoa.push(pessoa);
    
        imprimir();
    
        console.log(arrPessoa);
    
    function calcularMedia() {
    
        let ataque = parseFloat(document.getElementById("ataque").value);
        let saque = parseFloat(document.getElementById("saque").value);
        let bloqueio = parseFloat(document.getElementById("bloqueio").value);
        let passe = parseFloat(document.getElementById("passe").value);
        let defesa = parseFloat(document.getElementById("defesa").value);
    
        let media = (ataque + saque + bloqueio + passe + defesa) / 5;
    
        return media;
    }
    
    function imprimir() {
    
    
    
        for (let i = 0; arrPessoa.length; i++) {
    
    
            div.innerHTML += ` 
    
                <tr>
    
                    <td> ${arrPessoa[i].nome} </td>
                    <td> ${arrPessoa[i].ataque} </td>
                    <td> ${arrPessoa[i].saque} </td>
                    <td> ${arrPessoa[i].bloqueio} </td>
                    <td> ${arrPessoa[i].passe} </td>
                    <td> ${arrPessoa[i].defesa} </td>
                    <td> ${arrPessoa[i].media} </td>
    
                </tr>
    
            `
            }
    
    }
    
    }