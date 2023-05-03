// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook   -   state hook, telling react that this file has data that can change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [name, setName] = useState('');

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
