//Event listener for when dashboard webpage is loaded
var data;
chrome.webNavigation.onCompleted.addListener(function(result){
    data = retrieve('price');
}, {url : [{urlMatches : 'dashboardurl.com'}]});
