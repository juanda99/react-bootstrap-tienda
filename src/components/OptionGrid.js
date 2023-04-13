import Card from 'react-bootstrap/Card'
export default function OptionGrid(props) {
  const { items, onClick, goUp } = props

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {goUp && (
        <Card
          key={'prueba'}
          style={{ width: '140px', margin: '10px' }}
          onClick={onClick}
        >
          <Card.Img
            variant="top"
            src={`https://juanda.certweb.infenlaces.com/images/2345.jpg`}
          />
          <Card.Body>
            <Card.Title>Volver</Card.Title>
          </Card.Body>
        </Card>
      )}
      {items.map((item) => (
        <Card
          key={item}
          style={{ width: '140px', margin: '10px' }}
          onClick={onClick}
        >
          <Card.Img
            variant="top"
            src={`https://juanda.certweb.infenlaces.com/images/2345.jpg`}
          />
          <Card.Body>
            <Card.Title>{item}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
