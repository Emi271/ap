import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useAppContext } from '../components/Context';
import { Button, Card } from 'react-bootstrap';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../components/style.css'

const MostrarProductos = () => {
  const [items, setItems] = useState([]);
  const { setData } = useAppContext()

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, 'items');

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(docs);
      setData(docs);
    });
  }, [setData]);

  return (
    <div className="fondo">
    <Header/>
    <main className=" px-0 mx-0 justify-content-center">
    <div className="row  mx-auto mb-3 mt-3 justify-content-around">
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
            <Card style={{ width: '18rem' }} className="mx-0">
              <Card.Img variant="top" src={item.imagen} alt={item.título} className='card-img' />
              <Card.Body>
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
