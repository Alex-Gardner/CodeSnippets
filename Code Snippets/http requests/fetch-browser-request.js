fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.log(data);
  });
