const hash=window.location.hash
const isValid=hash.includes('id=')
const id=hash.split('id=')[1]
const post=localStorage.getItem(`id-${id}`)

const header=document.getElementById('header')
const copy=document.getElementById('copy')
const sourceCode=document.getElementById('source')
const desc=document.getElementById('description-box')

switch(typeof post){
    case 'null':
        console.log('failed to load')
        break;
    case 'undefined':
        console.log('failed to load')
        break;
    default:
        document.title=`Post: ${id}`
        var content=JSON.parse(post)
        header.innerText=`${content.name} - ${content.creator}`
        sourceCode.value=content.source
        desc.value=content.description

}
