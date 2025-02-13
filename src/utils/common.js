const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const transformToLink = (string) => {
  return string.replace(/[^a-zA-Z0-9\s/]/g, '').replace(/\//g, '-').replace(/\s+/g, '-').toLowerCase();
}


export {capitalizeFirstLetter, transformToLink};