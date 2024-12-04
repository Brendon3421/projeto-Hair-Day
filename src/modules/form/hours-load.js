import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours"
import { hoursClick } from "./hours-click"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
    // limpa a lista de horario
    hours.innerHTML = ""

    //Obtem a list de todos os horarios ocupados.
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    //percorrendo todos os array e transformando eles em array seprados
    const opening = openingHours.map((hour) => {
        //recuperar somente a hora!
        const [scheduleHour] = hour.split(":")
        //adiciona a hora na data e verifica se esta no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        //verificando se tem o horario na lista de horarios invalido (|| or) no horario passado!
        const available = !unavailableHours.includes(hour) && !isHourPast
        //define se o horario esta disponivel!
        return {
            hour,
            available
        }
    })
    // rederiza os horarios!
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        li.textContent = hour

        if (hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })
    //adiciona o evento de clique nos horarios disponiveis
    hoursClick()
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title
    hours.append(header)
}