const monsterContainer = document.getElementById('monster-container')
const buttonForward = document.getElementById('forward')
const buttonBack = document.getElementById('back')



console.log(monsterContainer)
fetch('http://localhost:3000/monsters')
.then(resp => resp.json())
.then(data => createGet(data))

function createGet(monsterArray) {
    monsterArray.forEach((monster) => {
        let h2 = document.createElement('h2')
        let h4 = document.createElement('h4')
        let p = document.createElement('p')
        h2.innerText = monster.name
        h4.innerText = monster.age
        p.innerText = monster.description
        monsterContainer.appendChild(h2)
        monsterContainer.appendChild(h4)
        monsterContainer.appendChild(p)
    })
}
// fetch('http://localhost:3000/monsters', {
// method: 'POST',
// headers: {
//   "Content-Type": "application/json",
//   'Accept': "application/json"
// },

// body:
// { 'name': 'string', 'age': 'number', 'description': 'string' }
// })
// .then(resp => resp.json())
// .then(data => function () {
//     let h2 = document.createElement('h2')
//     let h4 = document.createElement('h4')
//     let p = document.createElement('p')
//     h2.innerText = data.name
//     h4.innerText = data.age
//     p.innerText = data.description
//     console.log(data.name)
//     monsterContainer.appendChild(h2)
//     monsterContainer.appendChild(h4)
//     monsterContainer.appendChild(p)
// })