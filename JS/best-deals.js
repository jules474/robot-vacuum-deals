// Auto-generate Google Shopping links for each model

const models = [
  'ECOVACS X2 Omni',
  'Roborock S8 Pro Ultra',
  'Dreame L20 Ultra'
];

models.forEach(model => {
  const link = document.getElementById(`${model.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g,'')}-link`);
  if (link) {
    const search = encodeURIComponent(`${model} best price Australia`);
    link.href = `https://www.google.com/search?tbm=shop&q=${search}`;
  }
});
