# NeoSmith Hobby Website

This is the official website for NeoSmith Hobby, a modern, responsive website built with HTML, CSS, and JavaScript.

## Project Structure

The project is organized into the following directories:

- `css/`: Contains the main stylesheet `style.css`.
- `js/`: Contains the JavaScript file `main.js` for interactivity.
- `assets/`: Contains all static assets, such as images and icons.
  - `images/`: Contains images for the hero section, shop, and manga.
  - `icons/`: Contains SVG icons for social media links.
- `*.html`: The individual pages of the website.

## How to Update Content

The website is designed to be easily updatable. Here's how to modify the content of the shop and manga sections:

### Updating the Shop

To add, remove, or modify products in the shop, open the `shop.html` file and edit the `product-grid` section. Each product is represented by a `product-card` element.

**Example of a product card:**

```html
<div class="product-card">
    <img src="assets/images/product1.jpg" alt="Product 1">
    <h3>Digital Art #1</h3>
    <p>Price: 0.05 ETH</p>
    <button class="buy-button">Buy Now</button>
</div>
```

To add a new product, simply copy this block of code and modify the `src` attribute of the `img` tag, the `h3` and `p` tags, and the `alt` attribute.

### Updating the Manga Section

The manga section works in a similar way. Open the `manga.html` file and edit the `manga-grid` section. Each manga is represented by a `manga-card` element.

**Example of a manga card:**

```html
<div class="manga-card">
    <img src="assets/images/manga1.jpg" alt="Manga 1">
    <h3>Manga Title #1</h3>
    <p>A brief description of the manga, its story, and characters.</p>
    <a href="#" class="read-more-button">Read More</a>
</div>
```

To add a new manga, copy this block of code and modify the `src` attribute of the `img` tag, the `h3` and `p` tags, and the `alt` and `href` attributes.

## Deployment

This project is a static website and can be deployed to any static hosting service, such as Netlify, Vercel, or GitHub Pages. Simply upload the contents of this directory to your hosting provider.
