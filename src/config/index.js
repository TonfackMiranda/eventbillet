let config = {}
const ENV = 'prod'

if (ENV === 'dev') {
   config = {
      serverUrl: "http://localhost:8500",
      frontUrl: "http://localhost:3000"
   }
}
else {
   config = {
      serverUrl: "https://flamboyant-yalow.212-227-211-20.plesk.page",
      frontUrl: ""
   }
}

export default config