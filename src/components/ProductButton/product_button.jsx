import { Button } from "@mui/material";

export const ProductButton=({children,func=()=>{},b_type='button'})=>{
    // console.log(b_type);
    return(
        <Button  variant="outlined" size="medium" type={b_type} onClick={func}>{children}</Button>
    );
}