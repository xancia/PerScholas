export const randomImageGen = () => {
    const randomNumber = Math.floor(Math.random() * 12);
    const randomImage = `/images/headshot${randomNumber}.jpeg`

  return randomImage
}

export function rgbRandomizer(){
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return {borderColor: `rgb(${red},${green}, ${blue})`}
}

