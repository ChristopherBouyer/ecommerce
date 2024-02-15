import { createContext } from "react"

type Cheese = {
    name: string,
    photo: string,
    isAdmin?: boolean,
}

type CheeseContextType = {
    cheeses: {name: string; photo: string; isAdmin?: boolean;} [],
    isSelected: boolean,
    
}

export const CheeseContext = createContext<CheeseContextType> ({ 
    cheeses: [], 
    isSelected: false,
}) 