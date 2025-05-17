import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm';

const getProducts = async () => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products");
    const products = data.products;

    const result = products.map((ele) => {
      return `
        <div class="product">
          <h2>${ele.title}</h2>
          <img src="${ele.thumbnail}" alt="${ele.title}" />
        </div>
      `;
    }).join("");

    document.querySelector(".Products").innerHTML = result;

  } catch (error) {
    document.querySelector(".error").innerText = "ERROR.";
    console.error("API Error:", error);
  }
};

getProducts();
