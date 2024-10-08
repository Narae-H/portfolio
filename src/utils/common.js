const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const transformToLink = (string) => {
  return string.toLowerCase().replace(/\s+/g, '-');
}


export {capitalizeFirstLetter, transformToLink};