import dayjs from "dayjs";

//seleciona as sessoes manha,tarde e noite!
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export async function scheduleShow({ dailySchedules }) {
    try {
        //Limpa as lista
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        //rederenizar os agendamentos por periodo

        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            //adicionar o id do agendamento!
            item.setAttribute("data-id", schedule.id)
            name.textContent = schedule.name
            time.textContent = dayjs(schedule.when).format('HH:mm').toString()

            //Criar o icone de cancelar o agendamento
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            //Adicionar o tempo e o nome no item!
            item.append(time, name, cancelIcon)

            //obtem somente a hora
            const hour = dayjs(schedule.when).hour()

            //rederiza o agendamento na sessao(manha, tarde, noite)
            if (hour <= 12) {
                periodMorning.appendChild(item)
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else {
                periodNight.appendChild(item)
            }
        })
    } catch (error) {
        console.log(error)
        alert("Nao foi possivel exibir os agendamentos!")
    }
}



