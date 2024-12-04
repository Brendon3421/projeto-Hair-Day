import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
    try {
        console.log('tipo do id', typeof id)
        await fetch(`${apiConfig.baseURL}schedules/${id}`, {
            method: "DELETE",
        })
        alert("Agendamento cancelado com sucesso")
    } catch (error) {
        console.log(error)
        alert("Nao foi possivel cancelar o agendamento!")
    }
}