//Year in footer
document.querySelector("#year").innerText = new Date().getFullYear();

//Alerts
const sendAlert = (message, type="danger", dismissable=true, timer) => {
    const alert = document.createElement("div");
    alert.classList.add("alert", type, "alert-dismissible", "fade", "show");
    alert.setAttribute("role", "alert");

    const alertMessage = document.createElement("strong");
    alertMessage.innerText = message;
    alert.appendChild(alertMessage);

    if(dismissable){
        const dismissButton = document.createElement("button");
        dismissButton.classList.add("btn-close");
        dismissButton.type = "button"
        dismissButton.setAttribute("data-bs-dismiss", "alert");
        dismissButton.setAttribute("aria-label", "Close");
        alert.appendChild(dismissButton);
    }

    document.querySelector("#alerts").appendChild(alert);

    if(timer){
        setTimeout(() => {
            alert.remove();
        }, timer)
    }
}

//Pages
const renderPageButton = (page, active) => {
    let button = document.createElement("button");
    button.id = page.slug;
    button.classList.add("btn", "badge", "btn-dark", "fs-5", "pageButton");
    active ? button.classList.add("active") : null
    button.innerText = page.name;
    
    button.addEventListener("click", (e) => switchPage(page.slug));

    return button;
}

const findCurrentPage = () => {
    let activePage;
    settings.pages.forEach((page) => {
        if(page.name == document.querySelector("button.pageButton.active").innerText){
            activePage = page;
        }
    })
    return activePage;
}

settings.pages.forEach((page, i) => document.querySelector("#pages").appendChild(renderPageButton(page, i == 0)));

const switchPage = (page) => {
    switch(page){
        case "scoreboard":
            if(document.querySelector(".scoreboard") == null || document.querySelector(".scoreboard").children.length == 0){

                generatePage(gameSettings.teams[0], gameSettings.teams[1])
            }
            break;
        case "team":
            if(document.querySelector(".team") == null || document.querySelector(".team").children.length == 0){

                generatePageTeams(gameSettings.teams[0], gameSettings.teams[1])
            }
            break;
    }
}
switchPage("scoreboard");

const cleanPage = () => {
    document.querySelector(".scoreboard").remove();
    document.querySelector(".reset").remove();
    document.querySelector(".grafics").remove();
}