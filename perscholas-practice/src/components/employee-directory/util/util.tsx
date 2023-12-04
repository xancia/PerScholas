export const randomImageGen = () => {
    const randomNumber = Math.floor(Math.random() * 11) + 1;
    const randomImage = `/images/headshot${randomNumber}.jpeg`

  return randomImage
}

