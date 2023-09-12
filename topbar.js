const home=document.getElementById('home-btn')
const scripts=document.getElementById('scripts-btn')
const settings=document.getElementById('settings-btn')

const baseurl=document.domain

home.onclick=async()=>{
    location.href=`${baseurl}/`
}
scripts.onclick=async()=>{
    location.href=`${baseurl}/l`
}
settings.onclick=async()=>{
    location.href=`${baseurl}/`
}
