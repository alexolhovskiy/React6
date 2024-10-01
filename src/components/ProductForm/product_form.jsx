import { Box,TextField,Checkbox } from "@mui/material";
import { ProductButton } from "../ProductButton/product_button";
import { addProduct, updateProduct } from "../../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeAvailability, changeDescription, changeForm, changeName, changePrice } from "../../redux/slices/formSlice";
import { useState } from "react";


export const ProductForm=()=>{
    const dispatch=useDispatch();
    const product=useSelector((state)=>state.form);
    const [isError, setIsError] = useState(false);
    // console.log(product);
    const [errors, setErrors] = useState({name: "",description: "",price: ""});
    

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: "", description: "", price: "" };
 
        if ((product.item.name=='') ||(product.item.name.length<2)) {
            console.log(1);
            newErrors.name = "Name is required";
            isValid = false;
        } 
    
        if ((product.item.description=='')||(product.item.description<5)) {
            console.log(2);
            newErrors.description = "Description is required";
            isValid = false;
        }
    
        if ((product.item.price=='') || (isNaN(product.item.price)) || (product.item.price <= 0)) {
            console.log(3);
            newErrors.price = "Price must be a valid positive number";
            isValid = false;
        }
    
        setErrors(newErrors);
        console.log("Errors",errors,isValid);
        return isValid;
    };

    const submitFunc=(e)=>{
        e.preventDefault();
        if (validateForm()){
            if(product.condition){
                dispatch(addProduct({...product.item,id:Date.now()}));
            }else{
                dispatch(updateProduct(product.item));
            }
            cancelFunc();
            setIsError(false);
        }else{
            setIsError(true);
        }
        console.log(isError);
    }



    const cancelFunc=()=>{
        console.log("Cancel")
        dispatch(changeForm({
            item:{
                id:0,
                name:"",
                description:"",
                price:"",
                availability:true
            },
            condition:true
        }));
        setIsError(false);
    }

    return(
        <Box>
            <form  className={isError?"form error":"form"} onSubmit={submitFunc} >
                <TextField 
                    id="name" 
                    name="name"
                    label="Name" 
                    variant="outlined" 
                    onChange={(e)=>(dispatch(changeName(e.target.value.trim())))}
                    value={product.item.name}
                />
                <TextField 
                    id="description" 
                    name="description" 
                    label="Description" 
                    variant="outlined" 
                    onChange={(e)=>(dispatch(changeDescription(e.target.value.trim())))}
                    value={product.item.description} 
                />
                <TextField 
                    id="price"
                    name="price" 
                    label="Price" 
                    variant="outlined"
                    onChange={(e)=>(dispatch(changePrice(e.target.value.trim())))}
                    value={product.item.price}
                />
                <Checkbox
                    name="availability" 
                    onChange={(e)=>(dispatch(changeAvailability(e.target.checked)))}
                    checked={product.item.availability}
                />
                <ProductButton func={cancelFunc}>Cancel</ProductButton>
                <ProductButton b_type={'submit'}>{product.condition===true?"Submit":"Edit"}</ProductButton>
            </form>
        </Box>
    );
}