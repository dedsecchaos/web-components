class ProductCard extends HTMLElement{
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        .product-card {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 16px;
          margin: 16px;
          display: inline-block;
          width: 250px;
          height:350px;
          overflow: hidden; 
          background-color: 97a3d6;
          text-align:center;  
        }

        .product-image {
          width: 100%;
          height: 60%;
        }

        .product-title {
          font-size: 18px;
          margin-top: 8px;
        }

        .product-description {
          margin-top: 8px;
        }
      </style>
      <div class="product-card">
        <img class="product-image" src="" alt="Product Image">
        <h2 class="product-title"></h2>
        <p class="product-description"></p>
      </div>
    `;
      }
  connectedCallback() { 
    const imageSrc = this.getAttribute('image');
    const title = this.getAttribute('title');
    const description = this.getAttribute('description');
    const briefdescription = this.getAttribute('briefdescription');

    const imageElement = this.shadowRoot.querySelector('.product-image');
    imageElement.src = imageSrc;

    const titleElement = this.shadowRoot.querySelector('.product-title');
    titleElement.textContent = title;

    const descriptionElement = this.shadowRoot.querySelector('.product-description');
    descriptionElement.textContent = description; 
  }
  disconnectedCallback() {
    console.log('ProductCard has been disconnected from the DOM.');
  }

}
customElements.define('product-card', ProductCard);
function del() {
  document.querySelector('product-card').remove();
}
