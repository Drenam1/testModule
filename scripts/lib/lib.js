let folder = game.folders.entities[0];
let actor = await Actor.create({name: "New Actor", folder: folder.id});
console.log(actor.data.folder); // folder.id;
console.log(actor.folder); // folder;