const home=document.getElementById('home-btn')
const scripts=document.getElementById('scripts-btn')
const settings=document.getElementById('settings-btn')



home.onclick=async()=>{
    window.location.pathname='/website-test/'
}
scripts.onclick=async()=>{
    window.location.pathname='/website-test/'
}
settings.onclick=async()=>{
    window.location.pathname='/website-test/account.html'
}
