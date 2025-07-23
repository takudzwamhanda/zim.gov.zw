# CSS Documentation for Zimbabwe Government Portal

## Overview

This project uses a comprehensive CSS styling system with two main files:

1. **`style.css`** - Main stylesheet with all core styling
2. **`custom.css`** - Additional custom components and utilities

## File Structure

### Main Stylesheet (`style.css`)

The main stylesheet contains all the core styling for the government portal, including:

#### Core Components
- **Header & Navigation** - Fixed header with dropdown menus
- **Main Content** - Hero sections and content layouts
- **Service Cards** - Interactive service display cards
- **Forms** - Login, registration, and application forms
- **Buttons** - Government-styled buttons with hover effects
- **Responsive Design** - Mobile-first responsive layouts

#### Page-Specific Styles
- **Home Page** - Video background and hero sections
- **Services Page** - Service categories and cards
- **Ministries Page** - Ministry information display
- **News Page** - News articles and filtering
- **Contact Page** - Contact forms and information
- **Application Pages** - Form-based application processes

#### Features
- **Animations** - Smooth transitions and hover effects
- **Accessibility** - Focus states and reduced motion support
- **Print Styles** - Optimized for printing
- **Cross-browser Compatibility** - Works on all modern browsers

### Custom Stylesheet (`custom.css`)

Additional styling components and utilities:

#### UI Components
- **Custom Scrollbars** - Styled scrollbars matching the theme
- **Loading Spinners** - Animated loading indicators
- **Tooltips** - Hover tooltips for additional information
- **Notifications** - Toast-style notifications
- **Modals** - Custom modal dialogs
- **Progress Bars** - Animated progress indicators
- **Badges** - Status and category badges

#### Utility Classes
- **Text Alignment** - `.text-center`, `.text-left`, `.text-right`
- **Margins** - `.mt-1` through `.mt-5`, `.mb-1` through `.mb-5`
- **Padding** - `.p-1` through `.p-5`
- **Display** - `.d-none`, `.d-block`, `.d-flex`, `.d-grid`
- **Width/Height** - `.w-100`, `.h-100`
- **Border Radius** - `.rounded`, `.rounded-lg`, `.rounded-xl`
- **Shadows** - `.shadow`, `.shadow-lg`, `.shadow-xl`

## Color Scheme

The portal uses a consistent color scheme based on Zimbabwe's national colors:

- **Primary Green** - `#006400` (Dark Green)
- **Secondary Green** - `#004d00` (Darker Green)
- **Accent Gold** - `#ffd700` (Gold)
- **Success Green** - `#00aa00` (Light Green)
- **Warning Orange** - `#ffaa00` (Orange)
- **Error Red** - `#ff4444` (Red)
- **Neutral Gray** - `#666666` (Gray)

## Typography

- **Font Family** - Inter (Google Fonts)
- **Weights** - 400 (Regular), 600 (Semi-bold)
- **Responsive Sizing** - Scales appropriately on different screen sizes

## Responsive Breakpoints

- **Mobile** - Up to 768px
- **Tablet** - 768px to 992px
- **Desktop** - 992px and above

## Usage Examples

### Adding the CSS to HTML

```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="custom.css">
</head>
```

### Using Service Cards

```html
<div class="service-card">
    <img src="images/service.jpg" alt="Service Name">
    <h3>Service Title</h3>
    <p>Service description goes here.</p>
    <a href="#" class="gov-button">Start Service</a>
</div>
```

### Using Custom Components

```html
<!-- Badge -->
<span class="badge primary">New</span>

<!-- Progress Bar -->
<div class="progress-bar">
    <div class="progress-bar-fill" style="width: 75%"></div>
</div>

<!-- Notification -->
<div class="notification success show">Success message!</div>

<!-- Custom Grid -->
<div class="custom-grid cols-3">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

### Using Utility Classes

```html
<div class="text-center mt-4 mb-3 p-3 rounded shadow">
    <h2 class="mb-2">Title</h2>
    <p class="text-left">Content with utility classes.</p>
</div>
```

## Form Styling

### Basic Form Structure

```html
<form class="login-form">
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>
    </div>
    <button type="submit" class="gov-button">Submit</button>
</form>
```

### Form Validation Styles

The CSS includes automatic validation styling:
- Valid fields get a green border
- Invalid fields get a red border
- Focus states have a gold outline

## Animation Classes

### Loading States

```html
<button class="gov-button loading">Processing...</button>
```

### Hover Effects

All interactive elements have smooth hover transitions:
- Buttons scale and change color
- Cards lift with shadow
- Navigation items get underlines

## Accessibility Features

- **Focus Indicators** - Clear focus states for keyboard navigation
- **Reduced Motion** - Respects user's motion preferences
- **High Contrast** - Good color contrast ratios
- **Screen Reader Support** - Proper semantic markup

## Browser Support

- **Chrome** - Latest 2 versions
- **Firefox** - Latest 2 versions
- **Safari** - Latest 2 versions
- **Edge** - Latest 2 versions
- **Mobile Browsers** - iOS Safari, Chrome Mobile

## Customization

### Adding New Colors

To add new colors, update the CSS custom properties in `style.css`:

```css
:root {
    --primary-color: #006400;
    --secondary-color: #ffd700;
    /* Add your custom colors here */
}
```

### Adding New Components

For new components, add styles to `custom.css`:

```css
.my-new-component {
    /* Your styles here */
    background: var(--primary-color);
    color: white;
    padding: 1rem;
    border-radius: 0.5rem;
}
```

### Modifying Existing Styles

To modify existing styles, add your overrides after the main CSS files:

```css
/* Your custom overrides */
.service-card {
    background: #f0f0f0; /* Override background */
}
```

## Performance Tips

1. **Minimize CSS** - Consider minifying for production
2. **Use Specificity** - Avoid overly specific selectors
3. **Optimize Images** - Use appropriate image formats and sizes
4. **Lazy Load** - Consider lazy loading for non-critical CSS

## Troubleshooting

### Common Issues

1. **Styles Not Loading** - Check file paths and link tags
2. **Responsive Issues** - Verify viewport meta tag
3. **Font Not Loading** - Check Google Fonts connection
4. **Animation Issues** - Check for reduced motion preferences

### Debug Tools

- Use browser developer tools to inspect elements
- Check CSS specificity conflicts
- Verify responsive breakpoints
- Test accessibility with screen readers

## Maintenance

- Keep CSS organized and well-commented
- Use consistent naming conventions
- Test across different browsers and devices
- Update dependencies regularly
- Monitor performance metrics

---

For questions or issues, refer to the main project documentation or contact the development team. 