let fs = require('fs');
let filenames = fs.readdirSync('./');
let result = []
for(let path of filenames) {
    if(path.includes('Promo')) {
        let first = true;
        let file = fs.readFileSync(path, 'utf-8');
        let lines = file.split('\n');
        let count = 0;
        for(let line of lines) {
            count++;
            if(count > 20) break;
            if(!first) {
                let values = line.split(',');
                let rake = Number(values[5]) - Number(values[7]);
                if(rake < 0) rake = 0;
                rake = Math.round((rake + Number.EPSILON) * 100) / 100
                result.push([values[1], rake]);
            } else {
                first = false;
            }
        }
        let sorted = result.sort( (a, b) => {
            return b[1] - a[1]
        })
    } else if(path.includes('LeaderBoard')) {
        let first = true;
        let file = fs.readFileSync(path, 'utf-8');
        let lines = file.split('\n');
        for(let line of lines) {
            if(!first) {
                let values = line.split(',');
                let rake = Number(values[5]) - Number(values[7]);
                if(rake < 0) rake = 0;
                rake = Math.round((rake + Number.EPSILON) * 100) / 100
                result.push([values[1], rake]);
            } else {
                first = false;
            }
        }
    }
}
fs.writeFileSync('rankings.json', JSON.stringify(result));

