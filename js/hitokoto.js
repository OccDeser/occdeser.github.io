function hitokoto() {
  fetch('https://v1.hitokoto.cn/?c=c&c=d&c=h&c=i&c=k&encode=json')
      .then(response => response.json())
      .then(data => {
          const hitokoto = document.getElementById('hitokoto_text')
          hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
          hitokoto.innerText = data.hitokoto
          const author = document.getElementById('hitokoto_author')
          var text_length = -2
          var l = data.hitokoto.length;
          for (i = 0; i < l; i++) {
              if ((data.hitokoto.charCodeAt(i) & 0xff00) != 0) {
                  text_length++;
              }
              text_length++;
          }
          author.innerHTML = ('&nbsp;'.repeat(text_length * 2) + '——' + data.from)
      })
      .catch(console.error)
}

hitokoto()