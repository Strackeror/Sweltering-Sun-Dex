var Config = Config || {};

/* version */ 
Config.baseurl = "/Sweltering-Sun-Dex/"
const ResourcePrefix = Config.baseurl+"images/"

if (typeof window === "undefined") {
  global.window = global;
} else {
  window.exports = window;
}
