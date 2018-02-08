angular.module('angularGulp').factory('Entry', function($resource) {
  return $resource("https://www.googleapis.com/customsearch/v1/", { q: "peter" }, { get: { method: "GET" } }); // Note the full endpoint address
});
// angular.module("angularGulp", []).factory("Entry", function($resource) {
//   return $resource(" https://www.googleapis.com/customsearch/v1", { q: "peter" }, { get: { method: "GET" } });
// });