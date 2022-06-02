const generateGraficsBtns = () => {
    let page = findCurrentPage();

    let grafics = document.createElement("div");
    grafics.classList.add("grafics", "mt-80");
    page.grafics.forEach(grafic => {
        let div = document.createElement("div");
        div.classList.add("button");
        let button = document.createElement("button");
        button.appendChild(document.createTextNode(grafic.name));
        button.addEventListener("click", () => socket.emit("grafic", {grafic, page}));
        div.appendChild(button);

        let progressDiv = document.createElement("div");
        progressDiv.classList.add("progress");
        let progress = document.createElement("div");
        progress.classList.add("progress-bar");
        progress.setAttribute("role", "progressbar");
        progress.setAttribute("aria-valuenow", "0");
        progress.setAttribute("aria-valuemin", "0");
        progress.setAttribute("aria-valuemax", "100");
        progressDiv.appendChild(progress);
        div.appendChild(progressDiv);
        grafics.appendChild(div);
    })

    return grafics
}

const updateProgressBar = (progress, toValue, time) => {
    let fromValue = parseInt(progress.getAttribute("aria-valuenow"));
    let interval = setInterval(() => {
        if(fromValue >= toValue){
            clearInterval(interval);
        }else{
            fromValue += 1;
            progress.setAttribute("aria-valuenow", fromValue);
            progress.style.width = fromValue + "%";
        }
    }, time * 1000 / 100);
}

