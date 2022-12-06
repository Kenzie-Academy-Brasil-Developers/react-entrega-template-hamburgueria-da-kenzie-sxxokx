import{ React, useState, useEffect }from 'react'
import { api } from '../../api/api'
import { GetProductsShow } from '../getProductsShow'
import { StyledProductsList } from './style'

export const ProductsList = ({products, setProducts,currentSale,setCurrentSale, addCurSale,removeCurSale}) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const response = await api.get('products');
                setProducts(response.data)
            } catch (error) {
                console.log(error)
            } finally{
                setLoading(false)
            }
        })();   
    }, [])


    return (
        <div>
            {loading ? <h1>carregando...</h1>
            : 
            <StyledProductsList>
              {products.map((productsShow) =>
                <GetProductsShow key={productsShow.id} productsShow={productsShow} currentSale={currentSale} setCurrentSale={setCurrentSale}  addCurSale={addCurSale} removeCurSale={removeCurSale}/>
             )
              }      
            </StyledProductsList>
            }
        </div>
    )

}