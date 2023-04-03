import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { LinkContainer } from 'react-router-bootstrap'

function Product() {
  const [product, setProduct] = useState(null)
  const { id: productId } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${productId}`)
      .then((response) => setProduct(response.data))
    // .catch((error) => )
  }, [productId])

  if (!product) {
    return <div>Cargando...</div>
  }
  const {
    productDisplayName: name,
    price,
    masterCategory: category,
    subCategory,
  } = product
  return (
    <>
      <h1>Producto</h1>
      <p>Aquí renderizamos el producto con id {productId}</p>
      <Card style={{ width: '25rem' }}>
        <Card.Img
          variant="top"
          src={`https://juanda.certweb.infenlaces.com/images/${productId}.jpg`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          {/* <LinkContainer to="/products" state={{ category }}> */}
          <LinkContainer to={`/products/${category}`}>
            <Card.Link>{category}</Card.Link>
          </LinkContainer>
          <LinkContainer to={`/products/${category}/${subCategory}`}>
            <Card.Link>{subCategory}</Card.Link>
          </LinkContainer>
        </Card.Body>
        <Button variant="primary">Comprar</Button>
      </Card>
    </>
  )
}

export default Product
