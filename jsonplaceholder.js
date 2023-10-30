
fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response )=> response.json())
      .then((json) => {
        createUI(json);
      })
      .catch((err) => {
        console.log("error occurred while fetching data");
      });

      function createUI(data){
        console.log("doin staff with data");
        console.log(data);
      }
