let tarea
let i = 0;
const  list = $("#ft_list")
const newButton = $("#new")
newButton.click(() =>
{
    tarea = prompt("Introdue la tarea que quieres añadir")
    ft_add(tarea)
})

function ft_add(tarea)
{
    let tareas
    if (tarea)
    {
        list.append(
        `
        <div id=${i} class="tarea">${tarea}</div>
        `)
        i++;
        tareas = $(".tarea");
        ft_delete(tareas)
    }
}

function ft_delete(tareas)
{
    for (let i = 0; i < tareas.length; i++) {
        const element = tareas[i];
        console.log(element)
        $(element).click(function () { 
           let confirm =  window.confirm("Estás seguro que deseas borrar esa tarea?")
            if (confirm)
                $(element).remove();
        })
    }
}