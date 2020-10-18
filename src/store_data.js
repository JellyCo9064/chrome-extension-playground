//Use this function to store data into chrome.storage
function store(key, value)
{
    chrome.storage.sync.set({key : value}, function(result){
        console.log('Data stored in synced storage');
    });
}
