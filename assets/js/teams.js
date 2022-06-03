let generatePageTeams = () => {
    let teams = document.createElement("div");
    teams.classList.add("teams", "d-flex", "justify-content-center", "mt-30");
    teams.appendChild(generateSelect(1));
    teams.appendChild(generateSelect(2));
    
    return teams
}

let generateSelect = (teamN) => {
    let select = document.createElement("select")
    select.classList.add("form-select")
    select.setAttribute("aria-label", "Team " + teamN)

    select.appendChild(generateOption("Team " + teamN))
    gameSettings.teams.forEach((team) => {
        select.appendChild(generateOption(team.name, team))
    })

    select.addEventListener("change", e => socket.emit("changeTeam", {team, n: teamN}))
    return select;
}

let generateOption = (text, value) => {
    let option = document.createElement("option")
        option.value = value
        option.innerText = text
    return option;
}

const changeTeam = (team, n) => {
    document.querySelector(".scoreboard").remove()
    console.log(team)
    generatePage(team, gameSettings.teams[1])
}
