export async function fetchData(){
    try{
    const promise = await fetch('https://swapi.dev/api/starships/')
    const data = await promise.json()
    return data
    } catch(error){
        console.log(error)
    }
}