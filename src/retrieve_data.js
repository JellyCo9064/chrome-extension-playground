//Use this to retrieve data from chrome.storage

function retrieve(key)
{
    chrome.storage.sync.get(key, function(result){
        console.log('Retrieved CO2 data from synced storage.');
        return result;
    });
}
