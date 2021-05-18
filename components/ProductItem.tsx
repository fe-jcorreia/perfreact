import { memo, useState, lazy } from "react";
import { AddProductToWishListProps } from "./AddProductToWishList";
import dynamic from "next/dynamic"; // dynamic === lazy
// import { AddProductToWishList } from "./AddProductToWishList";

const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () => {
    return import("./AddProductToWishList").then(
      (mod) => mod.AddProductToWishList
    );
  },
  { loading: () => <span>Loading...</span> }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  };
  onAddToWishList: (id: number) => void;
}

// useMemo faz shallow compare => comparação rasa, de igualdade referencial
// {} === {} sempre false

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  // async function showFormattedDate() {
  //   const { format } = await import("date-fns");
  //   format();
  // }

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product); // faz uma comparação profunda
  }
);
