import React from 'react';
import PropTypes from 'prop-types';

const MarketplacePlant = ({ plant }) => {
  const getPlantIcon = () => plant.iconUrl;
  const getPlantId = () => plant.id;
  const getPlantPrice = () => plant.endingPrice;
  const getPlantRarity = () =>
    plant.iconUrl.split('_').pop().replace('.png', '');
  const getPlantPriceColor = () => {
    const rarity = getPlantRarity();

    if (rarity == 1) return 'green';
    if (rarity == 2) return 'blue';
    if (rarity == 3) return 'purple';

    return 'gray';
  };
  const getPlantProduction = () =>
    Number(plant.config.farm.le / plant.config.farm.hours).toFixed(2);
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 object-contain"
              src={getPlantIcon()}
              alt=""
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <span className={`text-${getPlantPriceColor()}-500`}>
          {getPlantPrice()}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {getPlantProduction()}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {getPlantRarity()}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <a
          href={`https://marketplace.plantvsundead.com/farm#/plant/${getPlantId()}`}
          className={`mb-2 md:mb-0 bg-${getPlantPriceColor()}-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-${getPlantPriceColor()}-100`}
          target="_blank"
          rel="noreferrer"
        >
          Comprar
        </a>
      </td>
    </tr>
  );
};

MarketplacePlant.propTypes = {
  plant: PropTypes.object,
};

export default MarketplacePlant;
