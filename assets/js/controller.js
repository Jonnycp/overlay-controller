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
        dismissButton.setAttribute("data-dismiss", "alert");
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
    button.classList.add("btn", "badge", "btn-dark", "fs-5", "pageButton", active ? "active" : null);
    button.innerText = page.name;
    
    button.addEventListener("click", (e) => switchPage(page.slug));

    return button;
}
settings.pages.forEach((page, i) => document.querySelector("#pages").appendChild(renderPageButton(page, i == 0)));