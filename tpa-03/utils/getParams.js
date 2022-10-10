export function getParams() {
  return new Proxy(new URLSearchParams(location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
}
