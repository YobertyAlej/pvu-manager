const seedTimer = () => {
  const sapling = 250 - 100 - 50; // 100 LE
  const sunflower = 850 - 200 - 50; // 600 LE

  const seed = 100 * sapling; // 10.000 LE

  const dq = 50 * 6; // 300 LE per cycle
  const cycle = 1 * sunflower + 10 * sapling + dq;

  console.log('Ganancia por ciclo de 6 dias: ' + cycle);
  console.log('Ciclos necesarios para una semilla: ' + seed / cycle);
  console.log(
    `Tiempo para ${seed / cycle} ciclos:  ${(seed / cycle) * 6} dias`
  );
};

const saplingCostPerMonth = () => {
  const sapling_cost = 150;
  const sapling_total = 250;
  const sapling = sapling_total - sapling_cost;
  const sunflower_cost = 250;
  const sunflower_total = 850;
  const sunflower = sunflower_total - sunflower_cost;

  console.log('Total por ciclo de 30 dias de 1 sapling: ' + sapling_total * 10);
  console.log('Ganancia por ciclo de 30 dias de 1 sapling: ' + sapling * 10);
  console.log('Costo por ciclo de 30 dias de 1 sapling: ' + sapling_cost * 10);
  console.log(
    'Total por ciclo de 30 dias de 1 sunflower mama: ' + sunflower_total * 10
  );
  console.log(
    'Ganancia por ciclo de 30 dias de 1 sunflower mama: ' + sunflower * 10
  );
  console.log(
    'Costo por ciclo de 30 dias de 1 sunflower mama: ' + sunflower_cost * 10
  );
};

const saplingWith1NftCostPerMonth = () => {
  const nft_cost = 100;
  const nft_total = 576;
  const nft = nft_total - nft_cost;
  const sapling_cost = 150;
  const sapling_total = 250;
  const sapling = sapling_total - sapling_cost;
  const sunflower_cost = 250;
  const sunflower_total = 850;
  const sunflower = sunflower_total - sunflower_cost;

  console.log('Total por ciclo de 30 dias de 1 nft: ' + nft_total * 10);
  console.log('Ganancia por ciclo de 30 dias de 1 nft: ' + nft * 10);
  console.log('Costo por ciclo de 30 dias de 1 nft: ' + nft_cost * 10);
  console.log('Total por ciclo de 30 dias de 1 sapling: ' + sapling_total * 10);
  console.log('Ganancia por ciclo de 30 dias de 1 sapling: ' + sapling * 10);
  console.log('Costo por ciclo de 30 dias de 1 sapling: ' + sapling_cost * 10);
  console.log(
    'Total por ciclo de 30 dias de 1 sunflower mama: ' + sunflower_total * 5
  );
  console.log(
    'Ganancia por ciclo de 30 dias de 1 sunflower mama: ' + sunflower * 5
  );
  console.log(
    'Costo por ciclo de 30 dias de 1 sunflower mama: ' + sunflower_cost * 5
  );
};

saplingWith1NftCostPerMonth();
