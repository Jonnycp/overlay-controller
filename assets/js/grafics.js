const generateGraficsBtns = () => {
    let page = findCurrentPage();

    let grafics = document.createElement("div");
    grafics.classList.add("grafics", "mt-80");
    page.grafics.forEach((grafic, i) => {
        let div = document.createElement("div");
        div.classList.add("button");
        let button = document.createElement("button");
        button.appendChild(document.createTextNode(grafic.name));
        button.addEventListener("click", () => socket.emit("grafic", {grafic, page, index: i}));
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


const showGrafic = (grafic, teams, button=true) => {
    button ? updateButton(findButton(grafic), !grafic.show) : null;

    if(grafic.slug = "single"){
        socket.emit("scoreUpdate", {
            name: grafic.name,
            slug: grafic.slug,
            show: !grafic.show,
            teams: [
                {
                    name: teams[0].name,
                    points: teams[0].points[findSet()],
                    wins: teams[0].wins,
                    serve: document.querySelector(".serve") ? getTeam(document.querySelector(".serve")) == teams[0] ? true : false : false
                },
                {
                    name: teams[1].name,
                    points: teams[1].points[findSet()],
                    wins: teams[1].wins,
                    serve: document.querySelector(".serve") ? getTeam(document.querySelector(".serve")) == teams[1] ? true : false : false
                }
            ]
        });
    }
}

const findButton = (grafic) => {
    let btn;
    document.querySelectorAll(".grafics .button").forEach(button => {
        if(button.querySelector("button").innerText == grafic.name.toUpperCase()){
            btn = button;
        }
    })
    return btn;
}
const updateButton = (button, show) => {
    if(show){
        button.classList.add("active");
        button.querySelector(".progress-bar").style.width = "100%"
    }else{
        button.classList.remove("active");
        button.querySelector(".progress-bar").style.width = "0%"
    }
}

const updateButtons = () => {
    settings.pages.forEach(page => {
        page.grafics.forEach(grafic => {
            let button = findButton(grafic);
            updateButton(button)
        })
    })
}