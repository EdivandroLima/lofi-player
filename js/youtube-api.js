
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
            'onReady': listaAleatoria,
            'onStateChange': onPlayerStateChange,
            'onError': onError
        }
    });
}

// onPlayerStateChange
function onPlayerStateChange(event) {

    var e_d= event.data

    // Se video está em BUFFERING
    if (e_d == 1 || e_d == -1 || e_d == 2) {
        s_play.classList.remove('load-play')
        s_pause.classList.remove('load-play')
        load.style.display = 'none'
    }
    else if(e_d == 3) {
        s_play.classList.add('load-play')
        s_pause.classList.add('load-play')
        load.style.display = 'block'
        
    }else {
        // x
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

    // player.getPlaylist()

    var todosOsVideos= 'kmFaGbcD18c,_xDM0kqV2oE,tFD-61WBN1Q,B7z02DTx86k,Kjn9iyml0W4,feb2yAbR8QY,u7yOWxbKdqg,966QMrkraoc,PAY8rlwbNLY,ZVU8shny44k,JtG3UAm38iE,hjjSjFFSLpg,fok6KVw-jT0,JMrlmR5LQNI,XDpoBc8t6gE,6STMGPhMyUE,ldcIpfeV6P8,odKwy_5YViQ,Qj5XHiKEctM,VGDAZo79y-s,7zS3or1GwpA,pStQo3YQPqg,QCvi-tBaEfA,8OPipsAjlqQ,98otzvB0u_A,qdaos1OJCgg,G3-AsJ3CKss,UpGoCvp4O1w,YQapDkQ7vG0,c9kX-RYFUi0,mZfUqpkidU8,bSgdTVvkhFs,Lll_TJdJuLs,lzI7T5LJv_s,dHpMTTADuXs,0BysbKV9Stg,z-vRB294lJQ,l11gG7QVAWA,vWKvgZSIKW4,ymypIEKGRO8,we0-cIofJNI,JXyv1D7FErc,QO2ra3ETK44,7P1_P0Qjr9A,IB3Lro4yXag,S5DjqZb5OnE,cuLEMbW661U,2zVk6A58Hg0,64FBzxBCS_0,BQ72Obl5XQQ,12-qbNijzkA,Oyer33Jt8bk,UaYyDMISS1w,bWcJqVZAF-Q,Z6TwACngjmk,uetednJLZM4,IVmSghJMBB0,zJcwXy1Usio,rJS4YuS22Og,qVdPh2cBTN0,ADp9P3p85w0,7R_3Fyyj18M,rRr-DZmYER0,6YGqm5XbHfw,GxM9q6OfGEY,H27qTI8Q2eA,Ii9Mg5IJC3U,g_tOn8N7lI4,IYQv5hM05a4,OM0UNn98icw,av6twyhq8gs,l4oeol27VCA,dayoXSM6j9U,snUk2SLuMBY,1hJKhiew2O0,JqnDz9riUHg,3VxUseId_4g,0gFqwqmzAwk,pwLhwPYoo3E,ekMB-0xN_1U,t5pHYojsUlM,B8cBn2bt118,vGW5wLV3j3I,fyyKelJw1Q8,ohqY6EU5N3g,Abgkupjh3co,-lxZulr2Ak8,NsQ8gB6COqY,I16Ne6QKfzs,iCP6d5Fy3i0,DsQZyX3LkXQ,djX5K3SKUGA,c5GSM7pdoO4,zkggvNaUArQ,FCwm8IGsDoo,pIOZVb97dSk,x1zFSLZlSxc,hCvAxldhs5g,Y_4KLI041gg,I-RgNNaF8rw,zk2ewxRmxog,ohgrIxhqPu0,lWUBUrNNfPM,k2FTqs3ubo8,n3CrgPPlUhc,KmSNb7gZruw,LLR60a-0Bc8,JZeOwlRXwY0,-1nicCsZzBE,DwPWGUhEtP0,xWySQKSes-c,OCwm08sTA5U,LzvuI0jxCLc,LiLJoBTZKX0,UdxANCQcHXY,Dg0IjOzopYU,kgfu6GkHeJo,vr9SR6hmTPw,s-xsuHRsSJw,tERBrE_kTLs,TGNrAj8vj88,DZHiA5A3Jpc,BhQtc48SVls,hUL2PJxZ9L0,vlafI0KCDiw,yMfCTgukAWs,jqIjy7QufM4,LBS43BLEYms,FiyXZhH4HCM,XAs07efHDAg,LfBVcRUtLFc,yCrVN5x-C10,qinpKBF67ck,yAhJo5t4zDo,6aP13c5MWAE,ZCg_L1_hF2U,GJs7OEh8SHc,-VaTJNZgOjM,LN6cke15pJI,wktyLT5FyFM,or61ewslh20,2WMWSTaW0_s,bz9AxCQTfuc,K3sk4AEcT4s,1-r1UlJdm68,Of653CdHPVI,DbSvYM_AuFE,rgsayS9vzN0,lgfgTkmN1Ls,7aeRVawekU4,FTEMbcbFuP0,eZWs7FDeF3o,b8OubLuT4h8,DKUeAI79ujM,CRKwHMQAP0A,QL9_rPPyCMQ,oAGWFop_Hx8,jthNBbHC4N8,t5pHYojsUlM,3MCCOQ02wmU,bWjcQKErWd8,e0T0rI-GiR4,ahC6NheAXx0,fzHp3Hg8g2c,2USX1mrty98,JtNCNlLTIPQ,IPVE4g8UVuU,3uiDeUPVNsM,yxMUARy940k,i6pUX9Szzz0,K6R4CUVp5ZI,hC8CH0Z3L54'.split(',')
    player.loadPlaylist({playlist: todosOsVideos}); 
        // lista aleatoria
        player.setShuffle({shufflePlaylist: true});
        // lista em loop
        player.setLoop({loopPlaylists:true})

        load.style.display = 'none'
}

// Se ouver erro
function onError(event) {
    player.nextVideo()
}
