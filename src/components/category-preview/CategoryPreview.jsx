import './category-preview.scss'

import ProductCard from '../product-card/ProductCard'

import { useNavigate } from 'react-router-dom'

const CategoryPreview = ({title, items}) =>{

  const navigate = useNavigate()

  const navigateToCategory = ( name ) =>{
    navigate(`/shop/${name}`)
  }

return (
<div className="category-preview">
  <a href='#' onClick={(e)=>{
    e.preventDefault()
    navigateToCategory(title)
  }}>
    <h1 className='title'>{title}</h1>
  </a>
  <div className="preview">
    {
    items.map((product, index)=>{
    if(index
    < 4){ return <ProductCard key={product.id} sectionName={title} product={product} />
    }
    })
    }
  </div>
</div>
)
}

export default CategoryPreview