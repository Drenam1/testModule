console.log("Is this thing on?");
var characterIds = ['43646479']

for (var i=0;i<characterIds.length;i++){
    async function get() {
        let url = 'https://www.dndbeyond.com/profile/MrCandleguyDM/characters/'+characterIds[i]
        let obj = await (await fetch(url)).json();
        
        console.log(obj);
        return obj;
    }
    var tags;
    (async () => {
      tags = await get()
      //console.log(tags)
      document.getElementById("tags").innerHTML = JSON.stringify(tags);
    })()
    console.log(tags);
}