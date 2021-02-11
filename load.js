
function loadRankings () {
    let request = new XMLHttpRequest();
    let rankingsBody = document.querySelector("#rankings > tbody");
    request.open("get", "rankings.json");
    request.onload = () => {
        try {
            console.log(request);
            const json = JSON.parse(request.responseText);
            populateRankings(json, rankingsBody);
        } catch (e) {
            console.warn(e);
        }
    };

    request.send();
}

function populateRankings (json, rankingsBody) {
    // Populate Leaderboard
    let count = 1;
    for(let user of json) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.style.cssText = "color:#ffe522;"
        td.textContent = String(count);
        tr.appendChild(td);
        for(value of user) {
            let td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        }
        rankingsBody.appendChild(tr);
        count++;
    }
}

document.addEventListener("DOMContentLoaded", () => { loadRankings (); });
