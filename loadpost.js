const hash=window.location.hash
const isValid=hash.includes('id=')
const id=hash.split('id=')[1]
const post=localStorage.getItem(id)

switch(typeof post){
    case 'null':
        console.log('failed to load')
    case 'undefined':
        console.log('failed to load')
    default:
        console.log('loaded')
}