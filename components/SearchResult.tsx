// import { useMemo } from "react";
import { ProductItem } from "./ProductItem";
import { List, ListRowRenderer } from "react-virtualized";

interface SearchResultProps {
  totalPrice: string;
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResult({
  totalPrice,
  results,
  onAddToWishList,
}: SearchResultProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          onAddToWishList={onAddToWishList}
          product={results[index]}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
