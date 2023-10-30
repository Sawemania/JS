//Convert String to Slug:
//Write a function that converts a title string into a URL slug. For instance, "JavaScript Array Methods" should become "javascript-array-methods".
//You can create a function in JavaScript to convert a title string into a URL slug. This involves converting the string to lowercase, replacing spaces with hyphens, and removing any non-alphanumeric characters. Here's a function to achieve that:


function stringToSlug(title) {
    // Convert to lowercase and replace spaces with hyphens
    const slug = title.toLowerCase().replace(/ /g, '-');
    // Remove non-alphanumeric characters except hyphens
    const cleanSlug = slug.replace(/[^a-z0-9-]/g, '');
  
    return cleanSlug;
  }
  
  // Example usage:
  const title = "JavaScript Array Methods";
  const slug = stringToSlug(title);
  console.log(slug); // Output: "javascript-array-methods"
  
  
  //In this function, we first convert the input title to lowercase and then use the `replace` method with a regular expression to replace spaces with hyphens. After that, we use another `replace` method to remove any characters that are not lowercase letters, numbers, or hyphens. The result is a URL-friendly slug.
  
  