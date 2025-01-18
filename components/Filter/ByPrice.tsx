export default function ByPrice({
  handlePriceRangeChange,
  filter,
  minPrice,
  maxPrice,
}: any) {
  return (
    <>
      <div className="box-collapse scrollFilter">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={filter.priceRange[0]}
          onChange={(e) =>
            handlePriceRangeChange([
              parseInt(e.target.value),
              filter.priceRange[1],
            ])
          }
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={filter.priceRange[1]}
          onChange={(e) =>
            handlePriceRangeChange([
              filter.priceRange[0],
              parseInt(e.target.value),
            ])
          }
        />
        <div>
          <span>₺{filter.priceRange[0]}</span> -{" "}
          <span>₺{filter.priceRange[1]}</span>
        </div>
      </div>
    </>
  );
}
