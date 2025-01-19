export const shuffleImages = (images: string[]) => {
  const newImages: string[] = Array<string>(images.length);
  let evenIndex = 0;
  let oddIndex = Math.ceil(images.length / 2);

  for (let i = 0; i < images.length; i++) {
    if (i % 2 === 0) {
      newImages[evenIndex++] = images[i];
    } else {
      newImages[oddIndex++] = images[i];
    }
  }

  return newImages;
};
