const hash=window.location.hash
const isValid=hash.includes('id=')
const id=hash.split('id=')[1]
const post=localStorage.getItem(`id-${id}`)

switch(typeof post){
    case 'null':
        console.log('failed to load')
        break;
    case 'undefined':
        console.log('failed to load')
        break;
    default:
        document.title=`Post: ${id}`
        console.log('loaded')
}
