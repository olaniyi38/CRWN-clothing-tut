  import DirectoryItem from '../directory-item/DirectoryItem'
 import './directory.styles.scss'

const Directory = ({directories}) => {
  return (
    <div className="directory-container">
       {
         directories.map((directory, index)=>{
         return <DirectoryItem directory={directory} key={index} />
         })
       }
     </div>
  )
}

export default Directory