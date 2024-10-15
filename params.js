const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
  let productHTML = '<h2>Products</h2>';
  products.forEach((product)=>{
  productHTML += `
      <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 20px;">
        <h2>${product.name}</h2>
        <a href="/product/${product.id}">
          <button>More Info</button>
        </a>
        
      </div>
    `});

  res.send(productHTML);
})

app.get('/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    const productDetailHTML = `
      <h2>${product.name}</h2>
      <img src="${product.image}" alt="${product.name}" style="width: 200px;">
      <p>Price: $${product.price}</p>
      <p>Description: ${product.desc}</p>
      <a href="/">Back to Products</a>
    `;
    res.send(productDetailHTML);
  } else {
    res.status(404).send('<h2>Product not found</h2><a href="/">Back to Products</a>');
  }
});

app.listen(5001, () => {
  console.log('Server is listening on port 5000....')
})