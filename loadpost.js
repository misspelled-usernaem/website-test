const hash=window.location.hash
const isValid=hash.includes('id=')
const id=hash.split('id=')[1]
const post=localStorage.getItem(id)

const header=document.getElementById('header')
const copy=document.getElementById('copy')
const sourceCode=document.getElementById('source')
const desc=document.getElementById('description-box')

copy.onclick=async()=>{
    sourceCode.select()
    sourceCode.setSelectionRange(0,99999)
    navigator.clipboard.writeText(sourceCode.value)
    alert('copied script to clipboard')
}

switch(typeof post){
    case 'null':
        console.log('failed to load')
        break;
    case 'undefined':
        console.log('failed to load')
        break;
    default:
        document.title=`Post: ${id.split('-')[1]}`
        var content=JSON.parse(post)
        header.innerText=`${content.name} - ${content.creator}`
        sourceCode.value=content.source
        desc.value=content.description
}
