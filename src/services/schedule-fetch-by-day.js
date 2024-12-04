import { apiConfig } from "./api-config"
import dayjs from "dayjs"

export async function scheduleFetchByDay({ date }) {
    try {
        //Fazendo a requisicao de GET
        const response = await fetch(`${apiConfig.baseURL}schedules`)
        console.log("response:", response)
        //converte
        const data = await response.json()
        //filtra os agendamento pelo dia selecionado
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))
        console.log("formatado", dailySchedules)

        return dailySchedules
    } catch (error) {
        console.log(error)
        alert("Nao foi possivel buscar os agendamentos do dia selecionado!")
    }
}