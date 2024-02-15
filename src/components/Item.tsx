import { UserContext } from "../UserContext";
import { useContext } from "react";
import { CheeseContext } from "../CheeseContext";

type Props = {
    cheese: { name: string; photo: string; isAdmin?: boolean;}
}

const Item = ({ cheese}: Props) => {
    const { isSelected } = useContext(CheeseContext)
    const { user } = useContext(UserContext)

    if (cheese?.isAdmin === true && user?.isAdmin!== true) {
        return (
            <div>
                You're not Admin !
            </div>
        )
    }
    return (
        <div>
            <div>{cheese.name}</div>
            <img src={cheese.photo} />
        </div>
    )

    
}

export default Item;