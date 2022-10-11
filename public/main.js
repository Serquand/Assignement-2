(async () => {
    let allEvents = await (await fetch("http://localhost:5000/getEvents")).json();
    const toDo = document.querySelector(".todo-container")
    const formField = document.querySelectorAll(".form-field input")  
    
    

    document.querySelector("button").addEventListener("click", async () => {
        console.log("We have clicked on it !")
        console.log(formField[0]);
        console.log(formField[0].value, formField[1].value, formField[2].value)
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
    })
})();