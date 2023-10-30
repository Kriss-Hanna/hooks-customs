import { useState } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

function UseInifiniteScroll() {
  // Initialiser avec 20 éléments
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => i + 1)
  );

  // Pour simuler si plus de données sont disponibles
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreItems = () => {
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }

    // Simule le chargement de nouveaux éléments après un certain délai
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...Array.from({ length: 20 }, (_, i) => i + prevItems.length + 1),
      ]);
    }, 500);
  };

  const lastElementRef = useInfiniteScroll(fetchMoreItems);

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          if (items.length === index + 1 && hasMore) {
            return <li ref={lastElementRef} key={item}>{`Item ${item}`}</li>;
          } else {
            return <li key={item}>{`Item ${item}`}</li>;
          }
        })}
      </ul>
      {!hasMore && <p>Plus d éléments à charger !</p>}
    </div>
  );
}

export default UseInifiniteScroll;
