export const hola = () => {
    console.log("Creando un h1 desde js")
    const h1 = document.createElement('h1')
    h1.innerText = `Holaaa ${nombre}`
    document.body.append(h1)
}