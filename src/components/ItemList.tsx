import { useContext } from "react";
import Item from "./Item";
import { CheeseContext } from "../CheeseContext";

type Props = {
    cheeses: {name: string; photo: string; isAdmin?: boolean;} []
}

const ItemList = () => {
    const { cheeses } = useContext(CheeseContext);

    return <div>{cheeses.map ((cheese) => <Item cheese={cheese} />)}</div>
}

export default ItemList;