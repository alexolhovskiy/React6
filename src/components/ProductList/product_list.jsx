import { Box } from "@mui/material"
import { ProductCard } from "../ProductCard/product_card"
import { useSelector } from "react-redux";


export const ProductList=()=>{
    const products=useSelector((state)=>state.products);

    return(
        <Box className="block">
            {
                products.items.map(item=>
                    <ProductCard key={item.id} product={item}/>
                )
            }
        </Box>
    )
}