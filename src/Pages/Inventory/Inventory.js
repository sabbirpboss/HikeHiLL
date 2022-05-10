import useItems from "../../Hooks/useItems";
import Item from "../Item/Item";
import "./Inventory.css";

const Inventory = () => {
  const [items, setItems] = useItems();

  return (
    <div className="mt-5 mb-5">
      <h2 className="mb-4">Our Gear's</h2>
      <div className="container gears-container">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
