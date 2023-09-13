const home=document.getElementById('home-btn')
const scripts=document.getElementById('scripts-btn')
const settings=document.getElementById('settings-btn')



home.onclick=async()=>{
    location.pathname='/website-test/'
    location.hash=''
}
scripts.onclick=async()=>{
    location.pathname='/website-test/'
    location.hash=''
}
settings.onclick=async()=>{
    location.pathname='/website-test/account.html'
    location.hash=''
}
