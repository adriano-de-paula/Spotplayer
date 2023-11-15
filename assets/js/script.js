let musicas = [
    {titulo:'Blue Day', artista:'Freedom Trail', src:'assets/musics/Rock - Blue Day - Freedom Trail Studio.mp3', img:'assets/images/rock.jpg'}, {titulo:'Catch Me If I Fall', artista:'NEFFEX', src:'assets/musics/Eletronica - Catch Me If I Fall - NEFFEX.mp3', img:'assets/images/eletronica.jpg'}, {titulo:'Drop', artista:'Anno Domini', src:'assets/musics/Hip Hop - Drop - Anno Domini Beats.mp3', img:'assets/images/hip hop.jpg'}, {titulo:'Statement', artista:'NEFFEX', src:'assets/musics/Hip Hop - Statement - NEFFEX.mp3', img:'assets/images/hip hop.jpg'}, {titulo:'Hows It Supposed to Feel', artista:'NEFFEX', src:'assets/musics/Eletronica - Hows It Supposed to Feel - NEFFEX.mp3', img:'assets/images/eletronica.jpg'}, {titulo:'Retribution', artista:'NEFFEX', src:'assets/musics/Rock - Retribution - NEFFEX.mp3', img:'assets/images/rock.jpg'}, {titulo:'This is Not a Christmas Song', artista:'NEFFEX', src:'assets/musics/Rock - This is Not a Christmas Song - NEFFEX.mp3', img:'assets/images/rock.jpg'}, {titulo:'Tell Me That I Cant', artista:'NEFFEX', src:'assets/musics/Hip Hop - Tell Me That I Cant (Clean) - NEFFEX.mp3', img:'assets/images/hip hop.jpg'}, {titulo:'Press Fuse', artista:'French Fuse', src:'assets/musics/Eletronica - Press Fuse - French Fuse.mp3', img:'assets/images/eletronica.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

document.querySelector('.botao-play').addEventListener('click', () => {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
});

document.querySelector('.botao-pause').addEventListener('click', () => {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
});

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 8;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 8){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

musica.addEventListener('timeupdate', () => {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = converterSegundosParaMinutos(Math.floor(musica.currentTime));
});

function converterSegundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    
    return campoMinutos + ':' + campoSegundos;
}

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = converterSegundosParaMinutos(Math.floor(musica.duration));
    });
}