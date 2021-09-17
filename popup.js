document.getElementById("frame").onload = function(){
    chrome.storage.sync.get("VideosSkipped", function (obj) {
        
        if(obj.VideosSkipped === undefined){
            obj.VideosSkipped = 0;
        }

        document.getElementById("popup").innerHTML = 'We skipped <b>'  + obj.VideosSkipped + '</b> adds!';
    });
  }