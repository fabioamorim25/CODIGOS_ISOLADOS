
// PARTE 2: testar o metodo put =============================
fetch('http://localhost:5000/', {method: 'put'}).then(res=>{

return res.text();

}).then(html=>{
    console.log(html)
})
//==========================================================

// PARTE 4: testar o metodo delete =============================
fetch('http://localhost:5000/', {method: 'delete'}).then(res=>{

return res.text();

}).then(html=>{
    console.log(html)
})
//==========================================================