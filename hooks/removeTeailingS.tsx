export  async function removeTeailingS(titleString:string){
    const words = await titleString.split(' ')
    for await (let word of words){
        if(word.endsWith('s')){
            return word.slice(0,-1);
            
        } 
        
    }
    return titleString
}