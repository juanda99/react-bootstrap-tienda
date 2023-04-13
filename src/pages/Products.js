import { useState, useEffect } from 'react'
import axios from 'axios'
// import { useLocation } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import ProductsTable from '../components/ProductsTable'
import OptionGrid from '../components/OptionGrid.js'

let uniqueCategories

function Products() {
  const { category, subcategory } = useParams()

  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3005/products/`).then(({ data }) => {
      const categories = data.map((product) => product.masterCategory)
      uniqueCategories = [...new Set(categories)]
      /*
        uniqueCategories = ['category1', 'category2', 'category3']
        uniqueCategories = [{name: 'category1', img:'ruta-img'}, {name: 'category2'}, {name: 'category3'}]
      */

      setProducts(data)
    })
    // .catch((error) => )
  }, [])

  if (products.length === 0) {
    return <div>Cargando...</div>
  }

  const selectCategory = (event) =>
    navigate(`/products/${event.target.innerText}`)

  const selectSubcategory = (event) =>
    navigate(`/products/${category}/${event.target.innerText}`)

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
      {!category && (
        <OptionGrid
          items={uniqueCategories}
          defaultItem={category}
          onClick={selectCategory}
          goUp={false}
        />
      )}
      {category && (
        <>
          <p>Selecciona alguna subcategoría para ver nuestros productos:</p>
          <OptionGrid
            items={uniqueSubcategories}
            defaultItem={subcategory}
            onClick={selectSubcategory}
            goUp={true}
          />
        </>
      )}

      {category && subcategory && <ProductsTable products={filterProducts} />}
    </>
  )
}

export default Products
