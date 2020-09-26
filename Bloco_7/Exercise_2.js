const bigger = (phrase) => {
    let worlds=[];
    worlds = phrase.split(" ")
    let biggerWorld;
    for(let index = 0;index < worlds.length ; index +=1){
         const firstWolrd = worlds[0]
      if(worlds[index].length > firstWolrd.length) {
          
         biggerWorld = worlds[index]
      }
        
    }
    return biggerWorld
}


