// Exemplo de código síncrono (execução sequencial):
// console.log(1)
// console.log(2)
// console.log(3)

// 1. Fetch com then (assíncrono, não sequencial):
// console.log(1)
// fetch("https://api.github.com/users/trilhafront/repos")
// 	.then(function(response) {
// 		return response.json()
// 	})
// 	.then(function(repositorios) {
// 		console.log(2)
// 	})
// console.log(3)

// 2. Fetch com then e await (síncrono, sequencial):
// async function fetchAssincronoComThenEAwait() {
//     console.log(1)
//     await fetch("https://api.github.com/users/trilhafront/repos")
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(repositorios) {
//             console.log(2)
//         })
//     console.log(3)
// }
// fetchAssincronoComThenEAwait()

// 3. Fetch sem then (síncrono, sequencial):
// async function fetchSincronoSemThen() {
//     console.log(1)
//     let response = await fetch("https://api.github.com/users/trilhafront/repos")
//     let repositorios = await response.json()
//     console.log(repositorios)
//     console.log(2)
//     console.log(3)
// }
// fetchSincronoSemThen()

// 4. Fetch sem then, código mais curto/direto (síncrono, sequencial):
// async function fetchSincronoSemThenCurto() {
//     console.log(1)
//     let repositorios = await (await fetch("https://api.github.com/users/trilhafront/repos")).json()
//     console.log(repositorios)
//     console.log(2)
//     console.log(3)
// }
// fetchSincronoSemThenCurto()

let ul = document.createElement("ul")
fetch("https://api.github.com/users/trilhafront/repos")
	.then(function(response) {
		return response.json()
	})
	.then(function(repositorios) {
		console.log(2)
        repositorios.forEach(function(repositorio) {
            let li = document.createElement("li")
            li.textContent = repositorio.name
            ul.appendChild(li)
        });
        document.body.appendChild(ul)
	})
console.log(3)

// function fetch2() {
//     fetch("https://api.github.com/users/trilhafront/repos")
// 	.then(function(response) {
// 		return response.json()
// 	})
// 	.then(function(repositorios) {
// 		console.log(2)
//         return repositorios
// 	})
// }
// let ul = document.createElement("ul")
// let repositorios = fetch2()
// repositorios.forEach(function(repositorio) {
//     let li = document.createElement("li")
//     li.textContent = repositorio.name
//     ul.appendChild(li)
// });
// document.body.appendChild(ul)
// console.log(3)

// async function fetch3() {
//     let repositoriosJson = []
//     await fetch("https://api.github.com/users/trilhafront/repos")
// 	.then(function(response) {
// 		return response.json()
// 	})
// 	.then(function(repositorios) {
// 		console.log(2)
//         console.log(repositorios)
//         repositoriosJson = repositorios
// 	})
//     return repositoriosJson
// }
// async function exibeRepositorios() {
//     let ul = document.createElement("ul")
//     console.log(1)
//     let repositorios = await fetch3()
//     console.log(repositorios)
//     repositorios.forEach(function(repositorio) {
//         let li = document.createElement("li")
//         li.textContent = repositorio.name
//         ul.appendChild(li)
//     });
//     document.body.appendChild(ul)
//     console.log(3)
// }
// exibeRepositorios()


