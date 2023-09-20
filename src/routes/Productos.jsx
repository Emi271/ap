import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Button, Card } from 'react-bootstrap';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../components/style.css'

const MostrarProductos = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, 'items');
    let queryRef = itemsCollection;
    if (selectedCategory) {
      queryRef = query(queryRef, where('categoria', '==', selectedCategory));
    }
    getDocs(queryRef).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(docs);
    });
  }, [selectedCategory]);

  return (
    <div className="fondo">
    <Header/>
    <main className=" px-0 mx-0 justify-content-center">
    <div className="row  mx-auto mb-3 mt-3 justify-content-around">
    <div className="container">
      <div className="row">
      <div className="category-filter">
                <label>Filtrar por Categoría:</label>
                <select
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  value={selectedCategory}
                >
                  <option value="">Todas</option>
                  <option value="pocillos">Pocillos</option>
                  <option value="discos">Discos</option>
                </select>
              </div>
        {items.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
            <Card style={{ width: '18rem' }} className="card">
              <Card.Img variant="top" src={item.imagen} alt={item.título} className='card-img' />
              <Card.Body className='card-body'>
                <Card.Title>{item.título}</Card.Title>
                <Card.Text>{item.precio}</Card.Text>
              </Card.Body>
              <Link to={`/detalle/${item.id}`}><Button>Ver detalle</Button></Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
    </main>
    </div>
  );
};

export default MostrarProductos;
