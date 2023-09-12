const posttemp=document.getElementsByClassName('script-container')[0]
const uploadbtn=document.getElementById('upload')
createPost=async()=>{
    //var newPost=posttemp.cloneNode(true)
    //const c=newPost.childNodes
    const name=document.getElementById('name').value
    //const by=document.getElementById('').value
    const source=document.getElementById('source').value
    const desc=document.getElementById('description').value

    const date=new Date

    fetch('./scripts.json')
    .then(resp=>resp.json())
    .then(json=>{
        console.log(json)
    })
    

    //c[0].value=name
    //c[1].value=by
    //c[2].value=`${date.getUTCDate()}/${date.getUTCDay()} - ${date.getUTCFullYear()}`
    //document.getElementById('s-container').appendChild(newPost)
    console.log('created')
}

uploadbtn.onclick=createPost
