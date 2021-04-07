
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

function info(){
    alert("How does the leaderboard work?\n" +
        "\n" +
        "You will get 1 Point for 1$ generetad Netrake.\n" +
        "\n" +
        "Netrake = Rake (after deducting PVI) – Fish Buffet/Black Status (Rakeback) – Welcome Bonus – Transaction fees – Tournament Overlay \n" +
        "\n" +
        "Promotions like daily leaderboards or Jackpots have no influence on the Netrake!\n" +
        "\n" +
        "The leaderboard prize money can vary and is dependent on the previous month's generated Netrake from all players.\n" +
        "\n" +
        "The leaderboard will be updated every Monday.\n" +
        "\n" +
        "Negative Netrake will carry over to the following month and be considered/deducted for next month's payout.");
}

document.addEventListener("DOMContentLoaded", () => { loadRankings (); });
