
const item = document.querySelector('.item');
const img = item.querySelector('img');
const title = item.querySelector('h3');
const desc = item.querySelector('p');

const renderIt = (data) => {
  let rec = data.records[0].fields;
  title.innerHTML = rec.Company;
  img.src = rec.Logo[0].url;
  desc.innerHTML = rec.Type[0];
  
//   console.log(rec);
};

fetch(`https://api.airtable.com/v0/${AT_APP_ID}/Programs?api_key=${AT_API_KEY}`)
  .then(response => response.json())
  .then(data => renderIt(data));

