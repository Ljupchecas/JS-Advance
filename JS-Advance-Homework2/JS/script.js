let button = document.getElementById('btn');
let container = document.getElementById('container');

function personInfo(){

    let personName = document.createElement('h1');
    let table = document.createElement('TABLE');
    let tHead = document.createElement('THEAD');
    let tBody = document.createElement('TBODY');
    let caption = table.createCaption();
    let error = document.createElement('h3');

    container.appendChild(personName);
    container.appendChild(table);
    container.appendChild(error);
    table.appendChild(tHead);
    table.appendChild(tBody);

    table.border = '2px solid black';
    table.cellPadding = '5';
    caption.textContent = 'STATS';

    fetch('https://swapi.dev/api/people/1')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log('Data', data)
            personName.innerText = data.name;
            let stats = [data.height, data.mass, data.eye_color, data.hair_color];
            let stats1 = ['Height' , 'Weight', 'Eye Color', 'Hair Color'];
            for(let i=0; i<stats1.length; i++){
                let personStats = document.createElement('TH');
                tHead.appendChild(personStats);
                personStats.innerText = stats1[i];
            }
            for(let property of stats){
                let listPropertis = document.createElement("TD");
                tBody.appendChild(listPropertis);
                listPropertis.innerText = property;
            }
            
        })
        .catch(function(err){ // Ne mi ispagja nesto Erorov , samo Error mi pisuva vo innerText - ov, dodeka vo console log e dobro.
            console.log('error', err);
            error.innerText = 'Error', err;
        })

}

button.addEventListener('click', function(){
    personInfo();
})


