import React from "react";
import Container from "../Container";
import ProductCatalog from "../ProductCatalog";
import "./style.scss";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="catalog">
        <Container className="catalog__itens">
          <ProductCatalog
            product={{
              percentage: 10,
              name: "bolsa",
              price: 190.9,
              priceDiscount: 159.9,
              img: "https://via.placeholder.com/200x300.png?text=ProdutoBolsa",
            }}
          />

          <ProductCatalog
            product={{
              percentage: 15,
              name: "calça",
              price: 190.9,
              img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca",
            }}
          />

          <ProductCatalog
            product={{
              percentage: 10,
              name: "bolsa",
              price: 190.9,
              priceDiscount: 159.9,
              img: "https://via.placeholder.com/200x300.png?text=ProdutoBolsa",
            }}
          />

          <ProductCatalog
            product={{
              percentage: 15,
              name: "calça",
              price: 190.9,
              img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca",
            }}
          />

          <ProductCatalog
            product={{
              percentage: 15,
              name: "calça",
              price: 190.9,
              img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca",
            }}
          />
          <ProductCatalog
            product={{
              percentage: 15,
              name: "calça",
              price: 190.9,
              img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca",
            }}
          />

          <ProductCatalog
            product={{
              percentage: 15,
              name: "calça",
              price: 190.9,
              img: "https://via.placeholder.com/200x300.png?text=ProdutoCalca",
            }}
          />
        </Container>
      </div>
    );
  }
}

export default Catalog;
