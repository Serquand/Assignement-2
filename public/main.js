(async () => {
    let allEvents = await (await fetch("http://localhost:5000/getEvents")).json();
    const toDo = document.querySelector(".todo-container")
    const formField = document.querySelectorAll(".form-field input")  
    
    document.querySelector(".add-event").addEventListener("click", () => document.querySelector(".modal").style.display = 'flex')

    document.querySelector("button.submit-button").addEventListener("click", async () => {
        const requestOptions = {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: formField[0].value, 
                author: formField[1].value,
                description: formField[2].value
            })
        }

        allEvents = await (await fetch("http://localhost:5000/createEvent", requestOptions)).json()
        displayEvents()
        document.querySelector(".modal").style.display = 'none'
    })

    const displayEvents = () => {
        toDo.innerHTML = ''
        allEvents.forEach(event => {
            toDo.innerHTML += `
                <div id="${event.id}" class="event">
                    <p><span>Name: </span>${event.name}</p>
                    <p><span>Author : </span>${event.author}</p>
                    <p><span>Description : </span>${event.description}</p>
                    <button class="delete-event">Delete</button>
                </div>
            `
        })   

        deleteEvent = async (el) => {
            allEvents = await (await fetch("http://localhost:5000/" + el.parentNode.id, { method: 'DELETE' })).json();
            displayEvents()
        }

        document.querySelectorAll(".delete-event").forEach(el => el.addEventListener("click", () => deleteEvent(el)))   
    }

    displayEvents()
})();