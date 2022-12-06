import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Header } from './components/header';
import { ProductsList } from './components/productsList';
import { Cart } from './components/cart';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App({addCurSale, removeCurSale}) {
  
  const localStorageCarSale = localStorage.getItem("@CAR_SALE")
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState(localStorageCarSale ? JSON.parse(localStorageCarSale) : [])

  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    localStorage.setItem( "@CAR_SALE", JSON.stringify(currentSale))
  },[currentSale])


  function addCurSale  (dataProduct) {
    if(!currentSale.some(producAdd => producAdd.id === dataProduct.id)){
      setCurrentSale([...currentSale, dataProduct])
      toast.success('Adicionado ao carrinho')
    }else{
      toast.error('Esse item já está no carrinho')
    }
  }
  
  function removeCurSale(productId){
    const newList = currentSale.filter((itens) => itens.id !== productId)
    setCurrentSale(newList)
    toast.warn('Item removido')
  }

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <Header /> 
        <div className='cotainer-dashborad'>
      <div>
        <ProductsList products={products} setProducts={setProducts} currentSale={currentSale} setCurrentSale={setCurrentSale}  addCurSale={addCurSale}/>
        </div>
        <div>
        <Cart  currentSale={currentSale} setCurrentSale={setCurrentSale}  addCurSale={addCurSale} removeCurSale={removeCurSale}/>
      </div>
          </div>     
    </div>
  );
}

export default App;
