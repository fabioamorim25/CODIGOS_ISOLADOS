fetch('http://localhost:5000/', {method: 'post'}).then(res=>{

return res.text();

}).then(html=>{
    console.log(html)
})