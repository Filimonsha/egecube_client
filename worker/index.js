self.__WB_DISABLE_DEV_LOGS = true;

let accessToken;

self.addEventListener("install", (event) => {
  console.log("service worker installed");
});

self.addEventListener("activate", () => {
  console.log("service worker activated");
});

self.addEventListener("fetch", async (event) => {
  const { request } = event;
  const { url } = request;

  if (url.includes("/users/tokens") && request.method === "POST") {
    event.respondWith(
      (async () => {
        const result = await fetch(request);
        if (!result.ok) return result;
        const data = await result.clone().json();
        accessToken = data.token;
        const { headers, status, statusText } = result.clone();
        return new Response(JSON.stringify({}), {
          headers,
          status,
          statusText,
        });
      })()
    );
  } else if (url.includes("api")){
    event.respondWith(
      (async () => {
        result = fetch(request.clone(), {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return result;
      })()
    );
  }
});
