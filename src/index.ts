import "./style.css";
import "material-icons/iconfont/material-icons.css";
import { Tarefa } from "./models/tarefa"
import { Prioridade } from "./models/prioridade";

let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let selecionaOInput = <HTMLInputElement>document.getElementById('tf_2do');
    let textoDoInput = selecionaOInput.value;

    let arrayComObjetoDoInput = [{
        feita: false,
        texto: `${textoDoInput}`,
    }]

    postarTarefa(arrayComObjetoDoInput);
    selecionaOInput.value = '';
});

function postarTarefa(tarefas: Tarefa[]) {
    let tabela = document.getElementById('table');
    for (const tarefa of tarefas) {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>
                            <input type="checkbox">
                        </td>
                        <td>
                            ${tarefa.texto}
                        </td>
                        <td>
                            <i class="material-icons">delete</i>
                        </td>`
        tabela.appendChild(tr);

        let deletar = tr.querySelector('.material-icons')
        deletar.addEventListener('click', () => {
           let ecsolhaDeletar = confirm('Você tem certeza que quer deletar essa tarefa?');
           if (ecsolhaDeletar) {
            tr.remove();
           }

        })
        let selecionarCheckBox = <HTMLInputElement>tr.querySelector('input');
        selecionarCheckBox.addEventListener('change', e =>{
            const currentInput = <HTMLInputElement>e.target;
            const isChecked = currentInput.checked;
            if (isChecked){
                tr.classList.add('done');
                console.log('ping');
            } else {
                tr.classList.remove('done');
                console.log('pong');
            }
        })
    }
}