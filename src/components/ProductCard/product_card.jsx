import { Card,CardContent,Typography,CardActions,Checkbox } from "@mui/material";
import { ProductButton } from "../ProductButton/product_button";
import { useDispatch } from "react-redux";
import { changeForm } from "../../redux/slices/formSlice";
import { changeAvailability2} from "../../redux/slices/productSlice";
import { deleteProduct } from "../../redux/slices/productSlice";


export const ProductCard=({product})=>{
    
    const dispatch=useDispatch();

    const deleteFunc=()=>{
        dispatch(deleteProduct(product.id))
    }

    const updateFunc=()=>{
        dispatch(changeForm({
            item:{
                id:product.id,
                name:product.name,
                description:product.description,
                price:product.price,
                availability:product.availability
            },
            condition:false
        }));
        
    }

    const checkUpdate=(e)=>{
        // console.log("CHECK "+e.target.checked);
        dispatch(changeAvailability2({id:product.id,checked:e.target.checked}));   
    }


    return(
        <Card sx={{ width:320,height:260 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.description}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {product.price}
                </Typography>
                <Checkbox
                    onChange={checkUpdate}
                    checked={product.availability}
                />
            </CardContent>
            <CardActions>
                <ProductButton func={updateFunc}>Update</ProductButton>
                <ProductButton func={deleteFunc}>Delete</ProductButton>
            </CardActions>
        </Card>
    );
}