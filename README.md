Google Image Search Abstraction Layer

Build with Node JS, Express JS, MongoDB, Google Custom Search JSON API

1) You can get the image URLs, alt text and page urls for a set of images relating to a given search string.

2) You can paginate through the responses by adding a ?offset=2 parameter to the URL.

3) You can get a list of the most recently submitted search strings.

Example usage:

Search for images like this: https://image-abstraction-laya.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10

Browse recent search queries like this: https://image-abstraction-laya.herokuapp.com/api/latest/imagesearch/
