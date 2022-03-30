const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: "光辉岁月",
      artist: 'Beyond',
      url: 'http://music.163.com/song/media/outer/url?id=1855073420.mp3',
      cover: 'http://p1.music.126.net/r9MeMC_AQBUvOxjDhzFJVA==/109951166107927511.jpg?param=130y130',
    },
    {
      name: '断线',
      artist: 'Shang/lil sophy',
      url: 'http://music.163.com/song/media/outer/url?id=496370620.mp3',
      cover: 'http://p1.music.126.net/W-4b64hCb_s8OAGROQXgig==/109951162995598984.jpg?param=130y130',
    },
    {
      name: 'The Rose',
      artist: 'Westlife',
      url: 'http://www.ytmp3.cn/down/56694.mp3',
      cover: 'http://img.ytmp3.cn/image/51.jpg',
    },
    {
      name: 'In The Eyes',
      artist: '江映东',
      url: 'http://www.ytmp3.cn/down/53053.mp3',
      cover: 'http://img.ytmp3.cn/image/10.jpg',
    }
  ]
});