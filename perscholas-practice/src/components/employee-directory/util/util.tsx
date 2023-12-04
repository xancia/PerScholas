export const randomImageGen = () => {
    const randomNumber = Math.floor(Math.random() * 12);
    const randomImage = `/images/headshot${randomNumber}.jpeg`

  return randomImage
}

