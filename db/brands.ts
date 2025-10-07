import { type Brand, type BrandID, allBrands } from './core';

export const findBrand = (brandId: BrandID): Brand => {
  const brand = allBrands.find((brand) => brand.id === brandId);
  if (!brand) {
    throw new Error(`Brand not found: ${brandId}`);
  }

  return brand;
};
