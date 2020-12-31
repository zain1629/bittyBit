
const createUrl = (uri) => {


// Send URL to get get encoded
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: uri })
};

fetch("http://localhost:5000/url/" )
.then(res => res.json())
.then(
  (result) => {
    return result;
  },
  // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.
  (error) => {
    console.log("Fetch Failed")
  }
)

}

export default createUrl;