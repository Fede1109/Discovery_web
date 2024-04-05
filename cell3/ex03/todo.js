let tarea
let i = 0;
let tareas
const  list = document.querySelector("#ft_list")
const newButton = document.querySelector("#new")
newButton.addEventListener("click", () =>
{
    tarea = prompt("Introdue la tarea que quieres añadir")
    ft_add(tarea)
})


if (document.cookie)
{
    let cook = document.cookie.split("-");
    if (cook)
    {
        for (let j = 0; j < cook.length - 1; j++) {
            const element = cook[j];
            list.innerHTML += 
            `
            <div id=${i} class="tarea">${element}</div>
            `
            i++;
        }
        tareas = document.getElementsByClassName("tarea");
    }
    ft_delete(tareas)
}

function ft_add(tarea)
{
    if (tarea)
    {
        list.innerHTML += 
        `
        <div id=${i} class="tarea">${tarea}</div>
        `
        i++;
        tareas = document.getElementsByClassName("tarea");
        document.cookie += `${(tareas[i - 1].textContent)}-`;
        ft_delete(tareas)
    }
}

function ft_delete(tareas) {
    for (let i = 0; i < tareas.length; i++) {
        const element = tareas[i];
        element.addEventListener("click", () => {
            let confirmDelete = window.confirm("¿Estás seguro de que deseas borrar esta tarea?");
            if (confirmDelete) {
                element.remove();
                let cookies = document.cookie.split("-");
                let tareaToDelete = element.textContent;
                for (let j = 0; j < cookies.length; j++) {
                    if (cookies[j].trim() === tareaToDelete.trim()) {
                        cookies.splice(j, 1);
                        break;
                    }
                }
                document.cookie = cookies.join("-");
            }
        });
    }
}
