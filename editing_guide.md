# SmartStacks AI Website Editing Guide

This document provides instructions on how to edit and update your SmartStacks AI website. The site has been built with easy editing in mind, allowing you to make changes without advanced technical skills.

## Table of Contents
1. [Accessing Your Website Files](#accessing-your-website-files)
2. [Basic Structure](#basic-structure)
3. [Editing Text Content](#editing-text-content)
4. [Updating Images](#updating-images)
5. [Adding New Pages](#adding-new-pages)
6. [Modifying Navigation](#modifying-navigation)
7. [Updating Product Information](#updating-product-information)
8. [Blog Management](#blog-management)
9. [Contact Form and Social Media Links](#contact-form-and-social-media-links)
10. [PayPal Button Integration](#paypal-button-integration)
11. [Common Issues and Solutions](#common-issues-and-solutions)

## Accessing Your Website Files

Your website is built using React, a popular JavaScript framework. The main files you'll need to edit are located in the following directories:

- `/src/pages/` - Contains individual page components
- `/src/components/` - Contains reusable components like headers and footers
- `/public/images/` - Contains all image assets

To make changes, you'll need to:
1. Access these files using a code editor (like Visual Studio Code)
2. Make your desired changes
3. Build the website using the command `npm run build`
4. Upload the updated files to your hosting provider

## Basic Structure

The website follows this basic structure:

- **App.tsx** - The main application file that controls routing
- **Header.tsx** - The navigation header that appears on all pages
- **Footer.tsx** - The footer that appears on all pages
- **Individual page files** - HomePage.tsx, AboutPage.tsx, ProductsPage.tsx, etc.

## Editing Text Content

To edit text content on any page:

1. Open the corresponding page file in the `/src/pages/` directory
2. Look for the text you want to change within the JSX code
3. Update the text between the tags (e.g., `<h1>Your Text Here</h1>`)
4. Save the file

Example:
```jsx
// Original
<h1>Products & Services</h1>

// Modified
<h1>Our Solutions</h1>
```

## Updating Images

To update images:

1. Add your new image to the `/public/images/` directory
2. Find the image you want to replace in the code
3. Update the `src` attribute to point to your new image

Example:
```jsx
// Original
<img src="/images/old-image.png" alt="Description" />

// Modified
<img src="/images/new-image.png" alt="Description" />
```

## Adding New Pages

To add a new page:

1. Create a new file in the `/src/pages/` directory (e.g., `NewPage.tsx`)
2. Copy the structure from an existing page as a template
3. Modify the content as needed
4. Add the new page to the routing in `App.tsx`

Example addition to App.tsx:
```jsx
<Route path="/new-page" element={<NewPage />} />
```

## Modifying Navigation

To update the navigation menu:

1. Open `/src/components/Header.tsx`
2. Find the navigation links section
3. Add, remove, or modify the links as needed

Example:
```jsx
// Original
<Link to="/products">Products</Link>

// Modified
<Link to="/solutions">Solutions</Link>
```

## Updating Product Information

To update product information:

1. Open `/src/pages/ProductsPage.tsx` for the main products page
2. For individual product pages, open the corresponding file in `/src/pages/`
3. Update the product details, pricing, features, etc.

For PayPal buttons, see the [PayPal Button Integration](#paypal-button-integration) section.

## Blog Management

To add a new blog post:

1. Create a new blog post component in `/src/pages/blog/`
2. Add the new post to the routing in `App.tsx`
3. Update the blog listing in `/src/pages/BlogPage.tsx` to include your new post

## Contact Form and Social Media Links

To update contact information:

1. Open `/src/pages/ContactPage.tsx`
2. Update email addresses, social media links, and other contact information
3. For the contact form, you may need to update the form submission handler if you change your form processing service

## PayPal Button Integration

The website includes PayPal buttons for e-commerce functionality:

1. To update a PayPal button, find the button component in the relevant product page
2. Replace the placeholder PayPal button code with your actual PayPal button code
3. Make sure to update the product ID, price, and other details

Example:
```jsx
// Replace this placeholder
<button className="button button-secondary">Buy Now</button>

// With your actual PayPal button code
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
</form>
```

## Common Issues and Solutions

### Images Not Displaying
- Make sure the image path is correct
- Verify the image exists in the specified directory
- Check that the image filename matches exactly (case-sensitive)

### Changes Not Appearing After Upload
- Make sure you've run `npm run build` after making changes
- Verify you've uploaded the contents of the `build` directory to your hosting provider
- Try clearing your browser cache

### Form Submission Not Working
- Check that your form handling service is properly configured
- Verify the form action URL is correct
- Ensure all required form fields have the `required` attribute

For more complex changes or technical assistance, please contact a web developer or reach out to us for support.
