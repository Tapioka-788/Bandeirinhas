// import { criarBandeira } from "./view/bandeira"
// import { criarBotao } from "./view/button"
// import	{ criarImagem} from "./view/backgroung_img"

document.addEventListener('DOMContentLoaded', function () {
    let fundoImg = document.createElement('div')
    fundoImg.style.widht = '100vw'
    fundoImg.style.height = '100vh'
    fundoImg.style.backgroundImage = 'url("https://s3.amazonaws.com/iexplore_web/images/assets/000/005/495/original/dreamstime_m_9856207.jpg?1442331489")'
    fundoImg.style.position = 'absolute'
    fundoImg.style.left = ' 0vw'
    fundoImg.style.top = '0vh'

    let quadroBandeiras = document.createElement('div');
    quadroBandeiras.style.display = 'flex'
    quadroBandeiras.style.flexDirection = 'row'
    quadroBandeiras.style.width = '80vw';
    quadroBandeiras.style.height = '70vh';
    quadroBandeiras.style.borderRadius = '5vw';
    quadroBandeiras.style.margin = '15vh 10vw';
    quadroBandeiras.style.backgroundColor = 'rgba(15, 15, 15, 0.5)';

    let italia = document.createElement('div');
    italia.style.display = 'flex';
    italia.style.width = '30vw';
    italia.style.height = '30vh';
    italia.style.position = 'absolute'
    italia.style.left = ' 15vw'
    italia.style.top = '30vh'

    let textos = document.createElement('div')
    textos.style.display = 'flex'
    textos.style.flexDirection = 'collumn'
    textos.style.width = ' 50vw'
    textos.style.position = 'absolute'
    textos.style.right = ' 10vw'
    textos.style.top = '30vh'

    let nomeDoPais = document.createElement('div');
    nomeDoPais.textContent = 'Itália';
    nomeDoPais.style.color = 'white'
    nomeDoPais.style.fontSize = '5vw'
    nomeDoPais.style.position = 'absolute'
    nomeDoPais.style.right = ' 20vw'
    nomeDoPais.style.top = '0vh'

    let descricaoDoPais = document.createElement('div');
    descricaoDoPais.textContent = 'a italia é um pais,a italia é um pais,a italia é um pais';
    descricaoDoPais.style.color = 'White'
    descricaoDoPais.style.fontSize = '2vw'
    descricaoDoPais.style.position = 'absolute'
    descricaoDoPais.style.left = ' 10vw'
    descricaoDoPais.style.top = '10vh'


    let verdeItalia = document.createElement('div');
    verdeItalia.style.backgroundColor = 'green';
    verdeItalia.style.width = '20vw';
    verdeItalia.style.height = '40vh';

    let brancoItalia = document.createElement('div');
    brancoItalia.style.backgroundColor = 'white';
    brancoItalia.style.width = '20vw';
    brancoItalia.style.height = '40vh';

    let vermelhoItalia = document.createElement('div');
    vermelhoItalia.style.backgroundColor = 'red';
    vermelhoItalia.style.width = '20vw';
    vermelhoItalia.style.height = '40vh';

    italia.appendChild(verdeItalia);
    italia.appendChild(brancoItalia);
    italia.appendChild(vermelhoItalia);

    textos.appendChild(nomeDoPais)
    textos.appendChild(descricaoDoPais)

    quadroBandeiras.appendChild(italia);
    quadroBandeiras.appendChild(textos)

    fundoImg.appendChild(quadroBandeiras);

    let bodyDiv = document.getElementById('body');
    bodyDiv.appendChild(fundoImg);
});
