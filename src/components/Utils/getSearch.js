export default function getSearch(key, search = window.location.search) {
  const arr = search.replace('?', '').split('&');
  const obj = {};

  arr.forEach(item => {
    const items = item.split('=');
    obj[items[0]] = items[1];
  })

  return obj[key]
}
