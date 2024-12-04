import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day"
import { hoursLoad } from "../form/hours-load";
import { scheduleShow } from "../schedules/show.js"
//seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    const date = selectedDate.value
    //busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })
    //Exibe os agendamentos!
    scheduleShow({ dailySchedules })
    //rederiza as horas disponivel
    hoursLoad({ date, dailySchedules })

}