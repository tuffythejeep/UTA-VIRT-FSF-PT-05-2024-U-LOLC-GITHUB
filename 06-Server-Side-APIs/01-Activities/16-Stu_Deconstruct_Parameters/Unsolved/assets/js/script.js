fetch(
  // Explain each parameter in comments below.
  "https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc"
)
  //protocol.domain.route?queryString
  //per_page=10 show 10 results per page
  //&state=open that have a state of 'open'
  //&sort=created sort by created date
  //&direction=desc and in descending order

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
