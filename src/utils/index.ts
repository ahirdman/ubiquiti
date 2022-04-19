const imgUrlCreator = (id: string, res: number) => {
  const resolution = `${res}x${res}` 
  return `https://static.ui.com/fingerprint/ui/icons/${id}_${resolution}.png`;
}

export {
  imgUrlCreator
}