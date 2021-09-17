const itemsToBeChecked = ['ytp-ad-overlay-close-button', 'ytp-ad-skip-button ytp-button'];

console.log('Addon Skipper Started...');

setInterval(function(){ 

    itemsToBeChecked.forEach(e => {
        
        var elements = document.getElementsByClassName(e);

        if(elements.length > 0)
        {
            console.log('Element found!!!');
            elements[0].click();

            chrome.storage.sync.get("VideosSkipped", function (obj) {
                if(obj.VideosSkipped === undefined){
                    obj.VideosSkipped = 0;
                }

                chrome.storage.sync.set({"VideosSkipped": obj.VideosSkipped + 1});
            });
            
            chrome.storage.sync.get("VideosSkipped", function (obj) {
                console.log('We skipped '  + obj.VideosSkipped + ' adds!');
            });
        }
    });

}, 1500);