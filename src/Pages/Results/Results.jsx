import {useState,useEffect} from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import axois from 'axios'
import { productUrl } from "../../API/endPoints";
import ProductCard from "../../Components/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axois
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(categoryName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  {
  }
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results