<script>
  export let name;
</script>

<style>
  main {
    padding: 2em;
    max-width: calc(100% - 2em);
    margin: 0 auto;
    background-color: #fff;
    position: relative;
    text-align: left;
    margin-bottom: 3em;
  }

  h1 {
    font-weight: 700;
    text-align: center;
    font-size: 2em;
    line-height: 1em;
    text-transform: uppercase;
  }
  img {
    width: 100%;
  }

  #name-bg {
    position: absolute;
    top: -0.5em;
    font-size: 5rem;
    line-height: 1em;
    height: 5em;
    font-weight: 700;
    color: rgba(177, 138, 141, 0.33);
    width: 100%;
    overflow: hidden;
    text-transform: uppercase;
  }

  #accounts {
    display: flex;
    justify-content: space-evenly;
  }

  iframe {
    width: 100%;
  }
  @media (min-width: 640px) {
    main {
      max-width: 50em;
    }
    h1 {
      top: 1rem;
      font-size: 4em;
      margin-top: 2em;
    }
    #name-bg {
      font-size: 22rem;
    }
  }
</style>

<div id="name-bg">Vinicius</div>
<h1>Convite Especial</h1>
<main>
  <img src="three-of-us.jpeg" alt="família Foerster" />
  <p>
    Chegamos ao final do oitavo mês de gestação e quantas coisas aconteceram
    nesse tempo hein?
  </p>
  <p>
    Nosso menino está bem, crescendo e se desenvolvendo perfeitamente para
    glória de Deus. Nossa família já está ansiosa pelo momento de conhecê-lo e
    gostaríamos de partilhar esses dias ao lado de pessoas que amamos e são
    importantes para nós.
  </p>
  <p>
    Infelizmente, por conta da situação atual não será possível realizar um chá
    de bebê. Mas não queremos deixar passar em branco esse momento tão especial.
    Por isso nosso Chá de Bebê será no formato VIRTUAL.
    <br />
    Como vai funcionar:
  </p>
  <p>
    Você pode enviar para casa da vovó Edinamar, como forma de presente, Fraldas
    (sugestão: Linha Pampers e Huggies Turma da Mônica) tamanhos M, G, GG e um
    mimo à sua escolha.
    <br />
    OU
    <br />
    Pode nos enviar o valor do presente em dinheiro via transferência. Neste
    caso não esqueça de nos avisar via mensagem no Whatsapp para sabermos a quem
    agradecer ;)
  </p>
  <p>
    Em breve tudo isso irá passar e queremos que todos vocês possam conhecer o
    Vinicius pessoalmente. Saibam que amamos a vida de cada um e que vocês são
    muito importantes para nossa família.
  </p>
  <p>
    Que Cristo vos abençoe.
    <br />
    Um abraço da família Foerster.
  </p>
  <p>
    <b>Nosso endereço:</b>
    <br />
    Rua Jorge Gomes rosa n°650 Casa B Cep: 81540-480​
  </p>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.992884931766!2d-49.22106678443056!3d-25.471913040788692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb9e840dac43%3A0x4909aa01128fc643!2zQ29uZG9tw61uaW8gVWhkcmXigJlz!5e0!3m2!1sen!2sbr!4v1596307143249!5m2!1sen!2sbr"
    height="600"
    frameborder="0"
    style="border:0;"
    allowfullscreen=""
    aria-hidden="false"
    tabindex="0" />
  <p>
    <b>Contas para Transferência:</b>
  </p>
  <div id="accounts">
    <div>
      Banco:
      <b>Itaú</b>
      <br />
      Agência:
      <b>3720</b>
      <br />
      Conta:
      <b>11703-9</b>
      <br />
      Nome:
      <b>Adam Foerster</b>
      <br />
      CPF:
      <b>046.573.879-60</b>
    </div>
    <div>
      Banco:
      <b>Nubank</b>
      <br />
      Agência:
      <b>0001</b>
      <br />
      Conta:
      <b>4931133-8</b>
      <br />
      Nome:
      <b>Adam Foerster</b>
      <br />
      CPF:
      <b>046.573.879-60</b>
    </div>
  </div>
  <br />
  <img src="war-elephant.jpeg" alt="elefante" />
  <br />
  <br />
  Em caso de dúvidas pode entrar em contato com a mamãe Rebecca via Whatsapp
  41-99636-5561.
</main>
<button id="adopt-hide-after-consent" onclick="adoptBar.open()">Mostrar Aviso</button>
