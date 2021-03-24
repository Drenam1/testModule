console.log("Is this thing on?");
var characterIds = ['43646479']

let url = 'https://www.dndbeyond.com/profile/MrCandleguyDM/characters/'+characterIds[0]
$.getJSON('http://time.jsontest.com', function(data) {
        
    var text = `Date: ${data.date}<br>
                Time: ${data.time}<br>
                Unix time: ${data.milliseconds_since_epoch}`
                
    
    console.log(text)
});