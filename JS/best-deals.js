document.addEventListener('DOMContentLoaded', () => {

  const products = [
    {
      name: 'ECOVACS X2 Omni',
      id: 'ecovacs-x2-omni',
      affiliate: 'YOUR_AFFILIATE_LINK_1'
    },
    {
      name: 'Roborock S8 Pro Ultra',
      id: 'roborock-s8-pro-ultra',
      affiliate: 'YOUR_AFFILIATE_LINK_2'
    },
    {
      name: 'Dreame L20 Ultra',
      id: 'dreame-l20-ultra',
      affiliate: 'YOUR_AFFILIATE_LINK_3'
    }
  ];

  products.forEach(p => {
    // Google Shopping link
    const compare = document.getElementById(`${p.id}-compare`);
    if (compare) {
      const query = encodeURIComponent(`${p.name} best price Australia`);
      compare.href = `https://www.google.com/search?tbm=shop&q=${query}`;
    }

    // Affiliate link
    const buy = document.getElementById(`${p.id}-affiliate`);
    if (buy) {
      buy.href = p.affiliate;
    }
  });

});
