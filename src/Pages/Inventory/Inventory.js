import useItems from "../../Hooks/useItems";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import "./Inventory.css";

const Inventory = () => {
  const [items, setItems] = useItems();

  return (
    <div className="mt-5 mb-5">
      <h2 className="mb-4">Our Gear's</h2>
      {
        items.length?
        <div className="container gears-container">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
      :
      <Loading></Loading>
      }
      
    </div>
  );
};

export default Inventory;
