import ItemList from "./ItemList";
import { CheeseContext } from "../CheeseContext";

type Props = {
    cheeses: {name: string; photo: string; isAdmin?: boolean} []
}

const ItemScreen = () => {
    return <ItemList/>
}

export default ItemScreen;