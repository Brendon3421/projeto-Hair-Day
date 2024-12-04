import { scheduleCancel } from "../../services/schedule-cancel"
import { schedulesDay } from "./load"
const periods = document.querySelectorAll(".period")

//Gera evento click para cada lista(manha , tarde , noite!)

periods.forEach((period) => {
    //capturar evento de clique na lista
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            //obtem a li pai do elemento clicado
            const item = event.target.closest("li")
            //pegamos o id do agendamento para remover
            const { id } = item.dataset
            console.log("type dados do id", typeof id)

            //confirma se o id foi selecionado
            if (id) {
                //confirma que id foi selecionado e o usuario dejea deletar
                const isConfirm = confirm("tem certeza que deseja cancelar esse agendamento?")
                if (isConfirm) {
                    //faz a requisacao na API para
                    await scheduleCancel({ id })
                    schedulesDay()
                }
            }
        }
    })
})