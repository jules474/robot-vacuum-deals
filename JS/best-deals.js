// Auto-generate Google Shopping links for each model

function makeShoppingLink(model) {
  const search = encodeURIComponent(`${model} best price Australia`);
  return `https://www.google.com/search?tbm=shop&q=${search}`;
}
document.getElementById('x2-link').href = 'https://www.google.com/search?q=ECOVACS+X2+Omni';
document.getElementById('s8-link').href = 'https://www.google.com/search?q=Roborock+S8+Pro+Ultra';
document.getElementById('l20-link').href = 'https://www.google.com/search?q=Dreame+L20+Ultra';

