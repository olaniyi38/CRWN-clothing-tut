/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom'
import './directory-item.styles.jsx'
import { DirectoryItem } from './directory-item.styles.jsx'

const CategoryItem = ({directory:{title, imageUrl}}) => {
  const navigate = useNavigate()

  const navigateToCategory = (name) => {
    navigate(`/shop/${name}`)
  }
  
  return (
    <DirectoryItem  >
    <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
    <div className="body">
      <a href='' onClick={(e)=>{
        e.preventDefault()
        navigateToCategory(title)
      }}>
    <h2>{title}</h2>
      <p>Shop Now</p>
    
  </a>
    </div>
  </DirectoryItem>
  )
}

export default CategoryItem