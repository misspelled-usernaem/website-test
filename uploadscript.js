class account {
    constructor(id,name){
        this.id=id
        this.name=name
        this.latestpost=0
    }
}

console.log(window.location.pathname)

listScript=async(id,n,c,d)=>{
    const posttemp=document.createElement('div')
    const i1=document.createElement('input')
    const i2=document.createElement('input')
    const i3=document.createElement('input')
    posttemp.setAttribute('class',"script-container")
    i1.type="button"
    i2.type="button"
    i3.type="button"
    i1.setAttribute('class',"script-redirect")
    i2.setAttribute('class',"script-redirect")
    i3.setAttribute('class',"script-redirect")
    
    clicked=async()=>{
        window.location.pathname=`/website-test/post.html#id=${id}`
    }

    i1.id="name"
    i1.value=n
    i1.setAttribute('onclick',clicked)
    
    i2.id="creator"
    i2.value=c
    
    i3.id="date"
    i3.value=d

    posttemp.appendChild(i1)
    posttemp.appendChild(i2)
    posttemp.appendChild(i3)

    document.getElementById('s-container').appendChild(posttemp)
}

createPost=async()=>{
    const name=document.getElementById('name').value
    //const by=document.getElementById('').value
    const source=document.getElementById('source').value
    const desc=document.getElementById('description').value

    const date=new Date
    const fdate=`${date.getUTCDate()}/${date.getUTCDay()} - ${date.getUTCFullYear()}`

    const id=(localStorage.length+1).toString()
    const save={
        "name":name,
        "date":fdate,
        "source":source,
        "creator":"dummy",
        "description":desc
    }
    localStorage.setItem(`id-${id}`,JSON.stringify(save))
    alert('Your post has been created!')
}

switch(window.location.pathname){
    case '/website-test/':
        for (var key in localStorage){
            var value=JSON.parse(localStorage.getItem(key))
            console.log(value)
            switch(typeof value){
                case 'null':
                    console.log('fail')
                    break
                case 'undefined':
                    console.log('fail')
                    break
                default:
                    try{
                        listScript(key,value['name'],'tyler',value['date'])
                    }catch{
                        console.log(key)
                    }
            }
        }
        break;
    case '/website-test/upload.html':
        const uploadbtn=document.getElementById('upload')
        uploadbtn.onclick=createPost
        break;
}
