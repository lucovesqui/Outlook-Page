//https://finalspaceapi.com/api/v0/character/



document.getElementById("envianome").addEventListener('click', function () {
    const id = document.getElementById("nomepersonagem").value;
    const container = document.getElementById("containerapi");
    axios.get('https://finalspaceapi.com/api/v0/character/'+id)
    .then(function(res){

        let dados = res.data
        let nome = dados.name
        let img_url = dados.img_url
        let lista = document.createElement('li')
        let img = document.createElement('img')
        let texto = document.createElement('p')

        img.src = img_url
        texto.innerHTML = nome

        lista.appendChild(texto)
        lista.appendChild(img)
        container.appendChild(lista)
    })
})