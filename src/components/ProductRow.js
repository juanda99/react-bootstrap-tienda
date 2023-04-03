import { LinkContainer } from 'react-router-bootstrap'
const styles = {
  td: { textDecoration: 'underline', cursor: 'pointer' },
}
export default function ProductRow({ product }) {
  // const { product } = props
  return (
    <tr>
      <td>{product.id}</td>
      <td style={styles.td}>
        <LinkContainer to={`/product/${product.id}`}>
          {
            // eslint-disable-next-line
          }
          <span>{product.productDisplayName}</span>
        </LinkContainer>
      </td>
      <td>{product.masterCategory}</td>
      <td>{product.subCategory}</td>
      <td>{product.price}</td>
    </tr>
  )
}
