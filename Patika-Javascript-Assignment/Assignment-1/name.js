let UserName=prompt("Kullanıcı Adı Giriniz")

let name=document.querySelector("#name")
name.innerHTML=`${name.innerHTML} ${UserName}`