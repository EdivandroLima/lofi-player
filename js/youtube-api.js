
var s_play= document.getElementById('play')
var s_pause= document.getElementById('pause')
var load= document.getElementById('load')

// API Youtube
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Cria um <iframe> (e um player do YouTube)
// após o download do código da API.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onReady': playlist_de_videos,
            'onStateChange': onPlayerStateChange,
            'onError': onError
        }
    });
}

// playlist
function playlist_de_videos() {
    player.cuePlaylist({
        list: 'PLuCUpg5b_vRqWMNwIH5oazz_qD170NtI4',
        listType: 'playlist'});
    // lista em loop
    player.setLoop({loopPlaylists:true})
    load.style.display = 'none'
}

// onPlayerStateChange
function onPlayerStateChange(event) {
    
    var e_d= event.data

    // Se video está em BUFFERING
    if (e_d == 3 || e_d == -1 ) {
        s_play.classList.add('load-play')
        s_pause.classList.add('load-play')
        load.style.display = 'block'
    }
    else {
        s_play.classList.remove('load-play')
        s_pause.classList.remove('load-play')
        load.style.display = 'none'
    }

    // Altera icone de play e pause
    if (e_d == 5 || e_d == 2 || e_d == -1 || e_d == undefined) {
         s_play.style.display = 'inline-block'
         s_pause.style.display='none'

    }else {
        s_pause.style.display = 'inline-block'
        s_play.style.display = 'none'
    }
}

// Add lista aleatoria
function listaAleatoria(valor) {
    if (valor.dataset.aleatoria == "true") {
        valor.dataset.aleatoria= 'false'

        player.loadPlaylist({playlist: player.getPlaylist()}); 
        // lista aleatoria
        player.setShuffle({shufflePlaylist: true});
        // lista em loop
        player.setLoop({loopPlaylists:true})

        s_play.classList.add('load-play')
        s_pause.classList.add('load-play')
        load.style.display = 'block'
    }
}

// Erro
function onError(event) {
    player.nextVideo()
}
