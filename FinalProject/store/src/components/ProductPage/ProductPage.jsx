import './styles.css'
import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react'
import LocationBar from './LocationBar/LocationBar'
import MultiTextBlock from './MultiTextBlock/MultiTextBlock'
import PressBlocks from './PressBlocks/PressBlocks'
import Product from './Product/Product'
import LooksBlock from './LooksBlock/LooksBlock'
import ReviewBlock from './ReviewBlock/ReviewBlock'
import RelatedProducts from './RelatedProducts/RelatedProducts'


const ProductPage = () =>
  {
    const params =useParams()
    const [productData, setProductData] = useState({});
    const [loading, setLoading] = useState(true);
    const [reloadAPI, setReloadAPI] = useState(true);

    const doubleText= [{id:1, extraClass:'graymedium marginbottomfull', text:'Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis. Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Donec gravida diam sed facilisis consequat.'},
                       {id:2, extraClass:'marginbottomfull', text:'Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae. Vestibulum est neque, posuere eget fringilla nec, congue ac ipsum. In tellus magna, placerat eu sapien et, faucibus aliquam nulla. Cras volutpat mattis mi, a porttitor odio elementum sed. Vivamus facilisis erat at lacus blandit suscipit. In nec sem gravida, dignissim est nec, hendrerit lacus. Nunc sed convallis massa.'},
                      ]
    const singleText= [{id:1, extraClass:'', text:'Nunc a augue velit. Nullam eget velit sit amet orci dignissim iaculis. Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Donec gravida diam sed facilisis consequat.'},
                      ]

    useEffect(() => {
        fetch(`https://foxcoding.net/api/getProduct?id=${params.id}`, {
            method: 'GET'  
        })
        .then(response => response.json())
        .then(result => {
            setProductData(result);
            setLoading(false)
            })
        .catch((error) => {
            console.log(error)
            });
        }, [reloadAPI])


    return (
      <>
        {(!loading) && 
        <>
            <LocationBar name={productData.name} category={productData.category}/>
            <Product productData={productData}/>
            <div className="separador"></div>
            <MultiTextBlock info={doubleText}/>
            <PressBlocks/>
            <div className="bg-graylight paddingverticaldouble marginbottomfull">
              <MultiTextBlock info={singleText}/>
            </div>
            <LooksBlock/> 
            <ReviewBlock score={productData.score}/>
            <RelatedProducts categories={productData.category} id={productData.id} reloadAPI={reloadAPI} setReloadAPI={setReloadAPI} />  
        </>
        } 
      </>
    )
  }

  export default ProductPage;