listScript=async(n,c,d)=>{
    const posttemp=document.createElement('div')
    const i1=document.createElement('input')
    const i2=document.createElement('input')
    const i3=document.createElement('input')
    i1.type="button"
    i2.type="button"
    i3.type="button"
    i1.class="script-redirect"
    i2.class="script-redirect"
    i3.class="script-redirect"

    posttemp.appendChild(i1)
    posttemp.appendChild(i2)
    posttemp.appendChild(i3)

    i1.id="name"
    i1.value=n
    
    i2.id="creator"
    i2.value=c
    
    i3.id="date"
    i3.value=d

    document.getElementById('s-container').appendChild(posttemp)
}

createPost=async()=>{
    const name=document.getElementById('name').value
    //const by=document.getElementById('').value
    const source=document.getElementById('source').value
    const desc=document.getElementById('description').value

    const date=new Date
    const fdate=`${date.getUTCDate()}/${date.getUTCDay()} - ${date.getUTCFullYear()}`

    const id=localStorage.length()+1
    const save={
        "name":name,
        "date":fdate,
        "source":source,
        "creator":"dummy",
        "description":desc
    }
    localStorage.setItem(toString(id),save)
    console.log('created')
}


if (document.URL==`https://${document.domain}/website-test/`){
    for (var key in localStorage){
        var value=localStorage.getItem(key)
        listScript(v.name,'tyler',v.date)
    }
}
if (document.URL==`https://${document.domain}/website-test/upload.html`){
    const uploadbtn=document.getElementById('upload')
    uploadbtn.onclick=createPost
}
