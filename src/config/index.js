let config = {}
const ENV = 'dev'

if (ENV === 'dev') {
   config = {
      serverUrl: "http://localhost:8500",
      frontUrl: "http://localhost:3000"
   }
}
else {
   config = {
      serverUrl: "",
      frontUrl: ""
   }
}

export default config