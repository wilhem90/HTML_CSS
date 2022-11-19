var imLista = document.getElementById('imp')



//Vamos criar uma lista com alguns dados pessol!

var listaDedaos = [
{nome: 'Wilhem Wundt', sobrenome: 'Maxime', idade: '32', peso: '105', endereco:'Chapeco', universidade: 'UFFS', priodo: 'Quinto periodo'},

{nome: 'Alexadre B. Gael', sobrenome: 'Charles', idade: '30', peso: '78', endereco:'Thomassique', universidade: 'INIKA', priodo: 'Quarta periodo'},

{nome: 'Alex', sobrenome: 'Dubuisson', idade: '32', peso: '80', endereco:'Hinche', universidade: 'FDSE', priodo: 'Concluida'},

{nome: 'Peterson', sobrenome: 'Lubrin', idade: '28', peso: '89', endereco:'Thomassique', universidade: 'INAGHEI', priodo: 'Nona periodo'},

{nome: 'Wilson', sobrenome: 'Louis', idade: '30', peso: '778', endereco:'Mirbalais', universidade: 'UFFS', priodo: 'Concluida periodo'},

{nome: 'Eliette', sobrenome: 'Maxime', idade: '27', peso: '85', endereco:'Leogane', universidade: 'NS', priodo: 'Terceira periodo'},

{nome: 'Rosandrine', sobrenome: 'Louibert', idade: '29', peso: '75', endereco:'Delmas', universidade: 'UP', priodo: 'Sexta periodo'},

{nome: 'Anery', sobrenome: 'Pierre', idade: '24', peso: '89', endereco:'Petion-ville', universidade: 'UNAP', priodo: 'Quarta periodo'},

{nome: 'Ronaldo', sobrenome: 'Joseph', idade: '35', peso: '69', endereco:'Jacmel', universidade: 'MIXTE', priodo: 'Octa periodo'},

{nome: 'Jonas', sobrenome: 'Francois', idade: '26', peso: '75', endereco:'Cayes-haiti', universidade: 'SENAI', priodo: 'Décimo periodo'},

{nome: 'Jonathan', sobrenome: 'Bernard', idade: '40', peso: '98', endereco:'Cap-haitien', universidade: 'UNOCHAPECO', priodo: 'Primeiro periodo'},

{nome: 'Claudin', sobrenome: 'Dorvil', idade: '35', peso: '74', endereco:'Hinche', universidade: 'UTESA', priodo: 'Ultima periodo'},

{nome: 'Getro', sobrenome: 'Pelegrine', idade: '22', peso: '68', endereco:'Port-au-Prince', universidade: 'UAS', priodo: 'Concluida periodo'}]


//imLista.innerHTML = `${listaDedaos[1].nome} ${listaDedaos[1].sobrenome}`
for (let i = 0; i < listaDedaos.length; i++) {
    const element = listaDedaos[i];
    imLista.innerHTML += `<br><br>${element.universidade}`
}