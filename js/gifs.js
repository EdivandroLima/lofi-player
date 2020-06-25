
// todas as imgs gifs
var gifs='amp_prob.gifattack.gifbad_landing.gifbicycle.gifblade.gifbluebalcony.gifbridge.gifbridge_raining.gifcacao_and_coffee_shop.gifcastle.gifcave.gifcemetry.gifcitymirror.gifcoast.gifcoffeeinrain.gifcomition_sky_left_to_right.gifcontrolroom.gifdaftpunk.gifdark_pillar.gifdawn.gifdrift.gifdroidcrime.gifechoesfromneals.gifelderorc.gifexodus.giffactory5.giffalls.giffamilydinner.giffire.gifflower_shop.gifforrest.giffortress.giffuture.gifgirlinrain.gifgrandcanyon.gifhighfloor.gifhighlands.gifhighsoceity.gifhorse.gifiplayoldgames.gifjazznight.giflake.giflast_dance.giflowlands.giflullaby.gifmetro_final.gifmidnight_melancholy.gifmotorcycle.gifmountain.gifmountain_mote.gifnature.gifnero_land.gifnightlytraining.gifnighttrain.gifnorthlights.gifpilot.gifplayer2.gifrain.gifredbicycle.gifreddriver.gifride.gifrobot_alley.gifsandcastle.gifsea.gifshootingstars.gifshop.gifsideshop.gifskate.gifsnow.gifspacecommander.gifspaceport.gifstacking_houses_on_a_windy_day.gifstreets.gifsushi.gifswamp.gifswirling.giftemple.gifthieves.giftower.giftown.giftrain.giftrain_city.giftroll_cave.giftv.gifunderwater.gifvirtuaverse.gifwild_boy.gifwindyday.gifyoungatnight.gifzombies.gif'.split('.gif')


// seleciona os atributos da img
var img1= document.getElementById('img1')
var img2= document.getElementById('img2')

// gif aleatorio
var ale= Math.floor(Math.random()*89+1)
img1.src= './img-gifs/'+gifs[ale]+'.gif'
var ale= Math.floor(Math.random()*89+1)
img2.src= './img-gifs/'+gifs[ale]+'.gif'

// troca de img
function img() {

    var ale= Math.floor(Math.random()*89+0)

    if (img1.className.indexOf('visivel') != -1) {
        img1.classList.add('oculto')
        img1.classList.remove('visivel')
        img2.classList.add('visivel')
        img2.classList.remove('oculto')

        // img1.dataset.gif= parseInt(img1.dataset.gif) + 2

        setTimeout("img1.src= './img-gifs/"+gifs[ale]+".gif'", 1000)
    }
    else {
        img1.classList.add('visivel')
        img1.classList.remove('oculto')
        img2.classList.add('oculto')
        img2.classList.remove('visivel')

        // img2.dataset.gif= parseInt(img2.dataset.gif) + 2

        setTimeout("img2.src= './img-gifs/"+gifs[ale]+".gif'", 1000)
    }
}

// Start na função img para trocar imagens
setInterval('img()', 5000)

// Add estilo quando player for clicado
function clique(valor) {
    document.getElementById(valor.id).classList.add('clique')
    setTimeout(function() {
        document.getElementById(valor.id).classList.remove('clique')
    }, 100)
}
