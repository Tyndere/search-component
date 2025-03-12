Step 1: Add the required scripts to your HTML
``` html
<script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/minimalist-search-bar@1.0.0/dist/index.min.js"></script>
```

Step 2: Use the component in your code

``` tsx
<div id="search-container"></div>

<script>
  const container = document.getElementById('search-container');
  const root = ReactDOM.createRoot(container);
  
  root.render(
    React.createElement(MinimalistSearchBar.default, {
      onSearch: ({ query, filters }) => {
        console.log('Search query:', query);
        console.log('Filters:', filters);
        // Your search logic here
      },
      placeholder: "Search for anything..."
    })
  );
</script>
```
