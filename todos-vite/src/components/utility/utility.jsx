export function randomCompletedStatus() {
    let number = Math.floor(Math.random() * 3)
    return number > 1 ? true : false
}