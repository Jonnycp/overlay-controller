const generateScoreboard = (team1, team2) => {
    let scoreboard = document.createElement("div");
    scoreboard.classList.add("scoreboard");
    scoreboard.appendChild(generateTeam(team1));
    scoreboard.appendChild(generateSetsButtons());
    scoreboard.appendChild(generateTeam(team2, true));

    return scoreboard;
}

const generateTeam = (team, right) => {
    let teamContainer = document.createElement("div");
    teamContainer.classList.add("team");
    right ? teamContainer.classList.add("right") : null

    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(team.name));
    teamContainer.appendChild(h2)

    let strong = document.createElement("strong");
    strong.appendChild(document.createTextNode("0"));
    teamContainer.appendChild(strong)

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    right ? buttons.classList.add("right") : null
    buttons.appendChild(createButton("+", ["btn"], "addPoint", team));
    buttons.appendChild(createButton("-", ["btn"], "subPoint", team));

    teamContainer.appendChild(buttons);
    return teamContainer
}

const createButton = (inner, classes, msg, team) => {
    let button = document.createElement("button");
    button.appendChild(document.createTextNode(inner));
    classes.forEach(classe => button.classList.add(classe));

    if(team){
        button.addEventListener("click", e => socket.emit(msg, {team, set: findSet()}));
    }else if(msg === "reset"){
        button.addEventListener("click", () => socket.emit("reset"));
    }
    return button;
}

const generateSetsButtons = () => {
    let setButtons = document.createElement("div");
    setButtons.classList.add("sets");

    for(let i = 0; i < gameSettings.sets.number; i++){
        let button = createButton((i+1)+" SET", []);
        i == 0 ? button.classList.add("active") : null;

        button.addEventListener("click", e => socket.emit("changeSet", {set: i, teams: getCurrentTeams()}))
        setButtons.appendChild(button);
    }

    return setButtons;
}

const getCurrentTeams = () => {
    return [getTeam(document.querySelectorAll(".team")[0]), getTeam(document.querySelectorAll(".team")[1])]
}

const findSet = () => {
    return parseInt(document.querySelector(".sets button.active").innerText[0])-1;
}

const findTeam = (team) => {
    let teams = document.querySelectorAll(".team");
    let teamFound = null;
    teams.forEach(teamSel => {
        if(teamSel.querySelector("h2").innerText == team.name){
            teamFound = teamSel
        }
    })
    return teamFound;
}

const getTeam = (dom) => {
    let team = null;
    gameSettings.teams.forEach(teamSel => {
        if(dom.querySelector("h2").innerText == teamSel.name){
            team = teamSel
        }
    })
    return team;
}

const removeServe = () => {
    document.querySelectorAll(".serve").forEach(s => s.classList.remove("serve"));
}

const addPoint = (team, set) => {
    let teamSelected = findTeam(team);

    if(gameSettings.teams[team.id-1].points[set]+1 <= gameSettings.sets["max-points"]){
        gameSettings.teams[team.id-1].points[set]++;
        removeServe()
        teamSelected.classList.add("serve")
    }
    teamSelected.querySelector("strong").innerText = gameSettings.teams[team.id-1].points[set];

    showGrafic(settings.pages[0].grafics[0], getCurrentTeams())
}

const subPoint = (team, set) => {
    let teamSelected = findTeam(team);
    
    if(gameSettings.teams[team.id-1].points[set]-1 >= 0){
        gameSettings.teams[team.id-1].points[set]--;
    }
    teamSelected.querySelector("strong").innerText = gameSettings.teams[team.id-1].points[set];

    showGrafic(settings.pages[0].grafics[0], getCurrentTeams())
}

const updateScores = (score) => {
    let teams = document.querySelectorAll(".team");
    teams.forEach(t => {
        let team = getTeam(t)
        let strong = t.querySelector("strong");
        strong.innerText = gameSettings.teams[team.id-1].points[findSet()];
    })

    score ? changeSet(gameSettings.sets["active-set"]) : null;

    showGrafic(settings.pages[0].grafics[0], getCurrentTeams())
}

const changeSet = (set) => {
    removeServe()
    gameSettings.sets["active-set"] = set;
    
    let sets = document.querySelectorAll(".sets button");
    sets.forEach(s => {
        if(s.classList.contains("active")){
            s.classList.remove("active");
        }
        
        if(s.innerText.substring(0, 2) == gameSettings.sets["active-set"]){
            s.classList.add("active");
            checkWin(getTeam(document.querySelectorAll(".team")[0]), getTeam(document.querySelectorAll(".team")[1]));
            updateScores(false)
        }
    })
    showGrafic(settings.pages[0].grafics[0], getCurrentTeams())
}

const generatePage = (team1, team2) => {
    let mainContainer = document.querySelector(".main-container");
    mainContainer.insertBefore(generateScoreboard(team1, team2), document.querySelector("footer"));
    mainContainer.insertBefore(createButton("RESET", ["reset"], "reset"), document.querySelector("footer"));
    mainContainer.insertBefore(generateGraficsBtns(), document.querySelector("footer"));
    mainContainer.insertBefore(generatePageTeams(), document.querySelector("footer"));
}

//! Farm infinita di punti se si switcha contiuamente il set
//TODO: Fixare al più presto
const checkWin = (team1, team2) => {
    let set = findSet();
    if(set == 0){
        set = 3;
    }
    let team1Points = team1.points[set-1];
    let team2Points = team2.points[set-1];

    if(team1Points > team2Points){
        team1.wins++;
        console.log(team1.name, " wins");
    }else if(team1Points < team2Points){
        team2.wins++;
        console.log(team2.name, " wins");
    }
}

