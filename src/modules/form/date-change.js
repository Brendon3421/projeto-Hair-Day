import { schedulesDay } from "../schedules/load.js"
//Seleciona o input de data
const selectedDate = document.getElementById("date")

//Recarregar a lista de horarios quando o input de data mudar
selectedDate.onchange = () => schedulesDay()