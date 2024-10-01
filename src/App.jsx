import { useDispatch } from 'react-redux';
import './App.css'
import { ProductForm } from './components/ProductForm/product_form'
import { ProductList } from './components/ProductList/product_list'
import { Box } from '@mui/material'
import { addProduct } from './redux/slices/productSlice';
import { useEffect } from 'react';




const goods=[
  {id:1,name:"Радиолла Мечта",description:"Старая радиолла",price:67,availability:true},
  {id:2,name:"Велосипед Прогресс",description:"Старый велосипед",price:100,availability:true},
  {id:3,name:"Патифон",description:"патифон",price:267,availability:true},
  {id:4,name:"Телевизор Березка-412",description:"Старый черно-белый телевизор с лампами",price:167,availability:true},
  {id:5,name:"Приемник Маяк",description:"Старый приемник, но 1-ого класса!",price:87,availability:true}
];

let flag=true;

function App() {
  const dispatch=useDispatch();
  if (flag){ 
      goods.forEach(item => dispatch(addProduct(item)));
      flag=false;
  }
  
  
  return (
    <>
      <Box className="container">
        <ProductForm/>
        <ProductList/>
      </Box>
        
    </>
  )
}

export default App
