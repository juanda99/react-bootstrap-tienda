import { useState, useEffect } from 'react'
import axios from 'axios'
// import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import ProductsTable from '../components/ProductsTable'
import OptionList from '../components/OptionList.js'

let uniqueCategories

function Products() {
  // let location = useLocation()
  const { category: defaultCategory, subcategory: defaultSubcategory } =
    useParams()
  // const defaultCategory = location?.state?.category || ''
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(defaultCategory)
  const [subcategory, setSubcategory] = useState(defaultSubcategory)

  useEffect(() => {
    axios.get(`http://localhost:3000/products/`).then(({ data }) => {
      const categories = data.map((product) => product.masterCategory)
      uniqueCategories = [...new Set(categories)]
      setProducts(data)
    })
    // .catch((error) => )
  }, [])

  if (products.length === 0) {
    return <div>Cargando...</div>
  }

  const selectCategory = (event) => {
    setCategory(event.target.innerText)
    setSubcategory('')
  }
  const selectSubcategory = (event) => setSubcategory(event.target.innerText)

  const uniqueSubcategories = [
    ...new Set(
      products
        .filter((product) => product.masterCategory === category)
        .map((product) => product.subCategory)
    ),
  ]

  const filterProducts = products
    .filter((product) => product.masterCategory === category)
    .filter((product) => product.subCategory === subcategory)

  return (
    <>
      <h1>Productos</h1>
      <p>Selecciona alguna categoría para ver nuestros productos:</p>
      <OptionList
        items={uniqueCategories}
        defaultItem={category}
        onClick={selectCategory}
      />
      {category && (
        <>
          <p>Selecciona alguna subcategoría para ver nuestros productos:</p>
          <OptionList
            items={uniqueSubcategories}
            defaultItem={subcategory}
            onClick={selectSubcategory}
          />
        </>
      )}

      {category && subcategory && <ProductsTable products={filterProducts} />}
    </>
  )
}

export default Products
