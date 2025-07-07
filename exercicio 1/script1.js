    let times = []; 
    const maxTimes = 4; 

    function calcularMediaIdade(idade1, idade2, idade3) {
        return (idade1 + idade2 + idade3) / 3;
    }

   
    function cadastrarTime() {
        if (times.length >= maxTimes) {
            document.getElementById("alerta").innerText = "Limite de 4 times atingido! Não é possível cadastrar mais times.";
            document.getElementById("alerta").style.display = "block";
            return;
        }

    
        let nomeTime = prompt("Digite o nome do time:");
        if (!nomeTime) return; 

        let jogador1 = prompt("Digite o nome do primeiro jogador:");
        let idade1 = parseInt(prompt(`Digite a idade de ${jogador1}:`));

        let jogador2 = prompt("Digite o nome do segundo jogador:");
        let idade2 = parseInt(prompt(`Digite a idade de ${jogador2}:`));

        let jogador3 = prompt("Digite o nome do terceiro jogador:");
        let idade3 = parseInt(prompt(`Digite a idade de ${jogador3}:`));


        let mediaIdade = calcularMediaIdade(idade1, idade2, idade3);

 
        if (mediaIdade > 15) {
            alert("A média de idade do time é superior a 15. Este time não pode jogar o campeonato.");
            return;
        }

        let time = {
            nome: nomeTime,
            jogadores: [
                { nome: jogador1, idade: idade1 },
                { nome: jogador2, idade: idade2 },
                { nome: jogador3, idade: idade3 }
            ],
            mediaIdade: mediaIdade
        };

        times.push(time);

        exibirTimes();
    }

    function exibirTimes() {
        let timesHtml = '';
        for (let i = 0; i < times.length; i++) {
            const time = times[i];
            let jogadoresHtml = '';
            for (let j = 0; j < time.jogadores.length; j++) {
                jogadoresHtml += `<div>${time.jogadores[j].nome.toLowerCase()} - ${time.jogadores[j].idade} anos</div>`;
            }

            timesHtml += `
                <div class="time">
                    <strong>${time.nome.toUpperCase()}</strong>
                    <div class="time-info">
                        Média de Idade: ${time.mediaIdade.toFixed(2)} anos
                    </div>
                    <div class="time-info">
                        ${jogadoresHtml}
                    </div>
                </div>
            `;
        }

        document.getElementById("timesCadastrados").innerHTML = timesHtml;
        document.getElementById("alerta").style.display = "none";
    }










