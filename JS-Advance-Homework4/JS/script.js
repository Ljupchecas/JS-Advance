let button = document.getElementById('btn');
let container = document.getElementById('fistDiv');
let table = document.createElement('TABLE');
container.appendChild(table);

let pageNumber = 1;

function createTable(){
    table.innerText = '';
    let elements = ['Planet Name', 'Population', 'Climate', 'Gravity'];
    let tHead = document.createElement('THEAD');
    let tBody = document.createElement('TBODY');

    table.appendChild(tHead);
    table.appendChild(tBody);

    table.border = '2px solid black';
    table.cellPadding = '5';

    for(let i=0; i<elements.length; i++){
        let th = document.createElement('TH');
        tHead.appendChild(th);
        th.innerText = elements[i];
    }
}


function ajax(){
    fetch('https://swapi.dev/api/planets/?page=' + pageNumber)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            createTable();

            let tBody = document.createElement('TBODY');
            table.appendChild(tBody);

            for(let i = 0; i<data.results.length;i++){
            let stats = [
                        data.results[i].name, 
                        data.results[i].population, 
                        data.results[i].climate, 
                        data.results[i].gravity
                        ];

            let tr = document.createElement('TR');
            tBody.appendChild(tr);

            for(let property of stats){
                let td = document.createElement('TD');
                tr.appendChild(td);
                td.innerText = property;
                }   
            } 
        })
        .catch(function(err){
            container.innerText = 'Error', err;
        })
}

button.addEventListener('click', function(){
        ajax();
    if(pageNumber == 1){
        button.innerText = 'NEXT 10 PLANETS';
        pageNumber++
    } else{
        button.innerText = 'PREVIOUS 10 PLANETS';
        pageNumber--
    }
})
