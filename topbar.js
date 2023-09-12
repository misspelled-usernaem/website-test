const home=document.getElementById('home-btn')
const scripts=document.getElementById('scripts-btn')
const settings=document.getElementById('settings-btn')

const baseurl=document.baseURI

home.onclick=async()=>{
    location.href=`${baseurl}/index.html`
}
scripts.onclick=async()=>{
    location.href=`${baseurl}/index.html`
}
settings.onclick=async()=>{
    location.href=`${baseurl}/index.html`
}
