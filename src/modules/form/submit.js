import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

//selecionando o fomr
const form = document.querySelector("form")
const clientName = document.getElementById("client")
//selecionando o input de date
const selectedDate = document.getElementById("date")
//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
//carega a data atual.
selectedDate.value = inputToday
//define a data minima como sendo a data atual
selectedDate.min = inputToday
form.onsubmit = async (event) => {
    //impede o comportamento padrao do formulario de recarregar a pagina
    event.preventDefault()

    try {
        //recuperando o nome do cliente
        const name = clientName.value.trim()

        if (!name) {
            return alert("Informe o nome do cliente!")
        }
        //Recupera o horario selecionado!
        const hourSelected = document.querySelector(".hour-selected")

        //alerta caso nao tenha selecionado!
        if (!hourSelected) {
            return alert("selecione o horario!")
        }
        //Recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")
        //Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")
        //gera um id
        const id = new Date().getTime().toString()
        console.log("type date the id:", typeof id)
        await scheduleNew({
            id,
            name,
            when,
        })
        //recarrega os agendamentos
        await schedulesDay()
        //limpa o inuput d enome do clinete
        clientName.value = ""
    } catch (error) {
        alert("Nao foi possivel realizar o agendamento!")
        console.log(error)
    }

}
