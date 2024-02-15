//import { UserContext } from "../UserContext"
//import { useContext } from "react"

type Props = {
    onClick: () => void
}

//Cannot use context out of Contexts
const Footer = ({onClick} : Props) => {
    //const { user } = useContext(UserContext)
    return <div>
        <button onClick={onClick}>Selectionner</button>
    </div>
}

export default Footer