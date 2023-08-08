self.__WB_DISABLE_DEV_LOGS = true;

self.addEventListener("install", (event) => {
  console.log('service worker installed');
});
