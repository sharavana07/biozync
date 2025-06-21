import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1>Product Details</h1>
      <p>Currently viewing: <strong>{id}</strong></p>
      <p>[Details about this product will be shown here]</p>
    </div>
  );
}
