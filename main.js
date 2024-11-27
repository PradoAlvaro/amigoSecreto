const participants = [
  {
    nome: "Edith Rainha",
    camiseta: "G",
    calca: "42",
    sapato: "36",
    image: "imgs/edith.jpeg", 
    suggestion: "https://izabelaaraujo.com.br/sapatenis",
  },
  {
    nome: "Claudia",
    camiseta: "P",
    calca: "38",
    sapato: "34",
    image: "imgs/claudia.jpeg", 
    suggestion: "https://www.vizzano.com.br/produto/pt/6291-927/192408?dpto=1",
  },
  {
    nome: "Cristina",
    camiseta: "G",
    calca: "46",
    sapato: "36",
    image: "imgs/cris.jpeg", 
    suggestion: "https://kolosh.dakota.com.br/?gad_source=1&gclid=CjwKCAiA3ZC6BhBaEiwAeqfvygZCYJ5_WMq06LqwjsOh2y5bf822i_vXzeAUsQIwIpOwJ2h7KSCtGBoCaLcQAvD_BwE",
  },
  {
    nome: "Luciana",
    camiseta: "G",
    calca: "42",
    sapato: "36",
    image: "imgs/luciana.jpeg", 
    suggestion: "https://kolosh.dakota.com.br/?gad_source=1&gclid=CjwKCAiA3ZC6BhBaEiwAeqfvygZCYJ5_WMq06LqwjsOh2y5bf822i_vXzeAUsQIwIpOwJ2h7KSCtGBoCaLcQAvD_BwE",
  },
  {
    nome: "Sheila",
    camiseta: "P",
    calca: "38",
    sapato: "37",
    image: "imgs/sheila.jpeg", 
    suggestion: "https://guavaskin.com/products/pincel-tudo-em-1?variant=46899246104887&currency=BRL&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&tw_source=google&tw_adid&tw_campaign=21155868950&gad_source=1&gclid=EAIaIQobChMI1PWo-cb3iQMVIC9ECB0t7ijyEAQYByABEgJdH_D_BwE",
  },
  {
    nome: "Silvio",
    camiseta: "M",
    calca: "42",
    sapato: "41",
    image: "imgs/silvio.jpeg", 
    suggestion: "https://shopee.com.br/product/318048655/6891439866?d_id=174aa&uls_trackid=51bdq1m10064&utm_content=4Mr43s8wpDD2ajoei2xvPwbgHWKh",
  },
  {
    nome: "Rodrigo",
    camiseta: "M/G",
    calca: "40",
    sapato: "40",
    chinelo:"42",
    image: "imgs/rodrigo.jpeg", 
    suggestion: "SEMLINK",
  },
  {
    nome: "Phelipe",
    camiseta: "GG",
    calca: "46",
    sapato:"41",
    chinelo:"43",
    image: "imgs/ph.jpeg", 
    suggestion: "https://www.amazon.com.br/B%C3%ADblia-Jerusal%C3%A9m-Paulus-Editora/dp/8534920001/ref=asc_df_8534920001/?tag=googleshopp00-20&linkCode=df0&hvadid=709883381689&hvpos=&hvnetw=g&hvrand=7136042360474572101&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9099979&hvtargid=pla-395340059270&psc=1&mcid=e51bc441566c345d96ccf6d7806ee88a&gad_source=1",
  },
  {
    nome: "Mari",
    camiseta: "M",
    calca: "38",
    sapato: "36",
    image: "imgs/marianne.jpeg", 
    suggestion: "https://www.instagram.com/usemoviefitness?igsh=MWRibXlqN3h5bTB3MA==",
  },
  {
    nome: "Liz Maria",
    camiseta: "06",
    calca: "6",
    sapato: "26",
    image: "imgs/lizoca.png", 
    suggestion: "https://shopee.com.br/product/976415369/18397892814?d_id=4f51d&uls_trackid=51b76fle00t7&utm_content=3tP7QPnbt5fqAHmgg1jtZB1THTWf",
  },
  {
    nome: "Pedro",
    camiseta: "12",
    calca: "12",
    sapato: "36",
    image: "imgs/pedro.jpeg", 
    suggestion: "https://produto.mercadolivre.com.br/MLB-1839233284-camiseta-cosplay-uniforme-haikyuu-karasuno-high-school-preta-_JM",
  },
  {
    nome: "Lethicia",
    camiseta: "M",
    calca: "40/42",
    sapato: "36",
    image: "imgs/lethicia.jpeg", 
    suggestion:"https://www.anacapri.com.br/tenis-bf-anacapri-skater-multineutro-atacador-bege/p/3053100010004U?gad_source=1&gbraid=0AAAAADmB4XwyBXKh9Q8Uc3J0txobQWHZW&gclid=Cj0KCQiAuou6BhDhARIsAIfgrn59Bx-XkgiQ5bIQwnhkr5BZzLiUKD_B0JjvdxtIRJF9Bt4vECsQVgAaAtjiEALw_wcB",
  },
  {
    nome: "Adriano",
    camiseta: "G",
    calca: "44",
    sapato: "42",
    image: "imgs/adriano.jpeg", 
    suggestion: "https://www.netshoes.com.br/p/short-moletom-puma-ess-10-masculino-cinza-2I3-2537-010?utm_source=wpp",
  },
  {
    nome: "Raiany",
    camiseta: "GG",
    calca: "GG",
    sapato: "40/41",
    image: "imgs/raiany.jpeg", 
    suggestion: "SEMLINK",
  },
  {
    nome: "Ana Clara",
    camiseta: "G",
    calca: "46",
    sapato: "39",
    image: "imgs/ana.jpeg", 
    suggestion: "SEMLINK",
  },
  {
    nome: "Mauricio",
    camiseta: "G",
    calca: "40",
    sapato: "41",
    image: "imgs/mauricio.jpeg", 
    suggestion: "https://www.armybr.com.br/camiseta-tech-modal-army/",
  },
  {
    nome: "Matheus",
    camiseta: "GG",
    calca: "46",
    sapato: "44",
    image: "imgs/matheus.jpeg", 
    suggestion: "https://www.amazon.com.br/Box-Trilogia-Senhor-dos-An%C3%A9is/dp/8595086354/ref=asc_df_8595086354/?tag=googleshopp00-20&linkCode=df0&hvadid=709883381737&hvpos=&hvnetw=g&hvrand=4374185405605969041&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9099979&hvtargid=pla-849140064945&psc=1&mcid=f3767d1dbb3b35748994c6f6f3b06613&gad_source=1",
  },
  {
    nome: "Carol",
    camiseta: "14",
    calca: "36",
    sapato: "34",
    image: "imgs/carol.jpeg", 
    suggestion: "https://shopee.com.br/product/1036302583/23792397203?d_id=72ab9&uls_trackid=51bc2g6500t7&utm_content=1111DkahyETDdz8QNKNrqJXCum",
  },
  {
    nome: "Alvaro",
    camiseta: "G",
    calca: "44",
    sapato: "39",
    image: "imgs/alvinho.jpeg", 
    suggestion: "https://www.armybr.com.br/camiseta-dry-fit-athleisure-preta/?sku=1672998.136247.0.252983",
  },
  {
    nome: "Eduardo",
    camiseta: "G",
    calca: "40",
    sapato: "41",
    image: "imgs/edu.jpeg", 
    suggestion: "https://www.google.com/search?q=cueca+elefante&oq=cueca+elefante&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDIzOThqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8",
  },
  {
    nome: "Bruno",
    camiseta: "m",
    calca: "42",
    sapato: "40",
    image: "imgs/bruno.jpeg", 
    suggestion: "SEMLINK",
  },
  {
    nome: "Giovanna",
    camiseta: "P",
    calca: "36",
    sapato: "35",
    image: "imgs/giovana.jpeg", 
    suggestion: "https://www.anacapri.com.br/tenis-detalhe-camurca-branco-e-azul/p/3039400040001U?gad_source=1&gbraid=0AAAAADmB4Xxqxgkpqq6nQzq2b89oDiR67",
  },
  {
    nome: "Dudu",
    camiseta: "/",
    calca: "/",
    sapato: "/",
    image: "imgs/dudu.jpeg", 
    suggestion: "SEMLINK",
  },
  {
    nome: "Marcelo",
    camiseta: "M",
    calca: "/",
    sapato: "/",
    image: "imgs/marcelo.jpeg", 
    suggestion: "SEMLINK",
  },
  {
    nome: "Bernardo",
    camiseta: "M",
    calca: "8/10",
    sapato: "30",
    image: "imgs/bernardo.jpeg", 
    suggestion: "https://www.amazon.com.br/Carrinho-Controle-Recarreg%C3%A1vel-DM-Toys/dp/B0BRNSRRVW/ref=asc_df_B0BRNSRRVW/?tag=googleshopp00-20&linkCode=df0&hvadid=709857019599&hvpos=&hvnetw=g&hvrand=11348436483714109021&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9099979&hvtargid=pla-1968782639465&psc=1&mcid=83678fc44d743c2aa8891e5f58cb3837&gad_source=1",
  },
  {
    nome: "Sofia",
    camiseta: "8",
    calca: "8",
    sapato: "28/20",
    image: "imgs/sofia.jpeg", 
    suggestion: "https://shopee.com.br/product/1006215031/24526325028?d_id=84f21&uls_trackid=51b76one00t7&utm_content=7PamYXeNhHEwcgGhnx2ZreFFAZD",
  },
  {
    nome: "Manu",
    camiseta: "4",
    calca: "4",
    sapato: "25/26",
    image: "imgs/manu.jpeg", 
    suggestion: "https://shopee.com.br/product/1006215031/24526325028?d_id=84f21&uls_trackid=51b76one00t7&utm_content=7PamYXeNhHEwcgGhnx2ZreFFAZD",
  },
];

// Função para criar os cards dinamicamente
function createCards() {
  const container = document.getElementById("cardsContainer");

  participants.forEach((participant) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${participant.image}" alt="${participant.nome}">
        <div class="card-info">
            <h3>${participant.nome}</h3>
            <p>
                <strong>Camisa:</strong> ${participant.camiseta} | 
                <strong>Calça:</strong> ${participant.calca} | 
                <strong>Sapato:</strong> ${participant.sapato} 
                ${participant.chinelo ? `| <strong>Chinelo:</strong> ${participant.chinelo}` : ""}
            </p>
            <a href="${participant.suggestion}" target="_blank">Ver Sugestão</a>
        </div>
    `;

    container.appendChild(card);
  });
}

// Função de busca para os cards
function searchCards() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase(); // Termo de busca em minúsculo
  const cards = document.querySelectorAll('.card'); // Seleciona todos os cards

  // Itera sobre os cards e oculta os que não correspondem ao termo de busca
  cards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase(); // Nome do participante
    if (name.includes(searchTerm)) {
      card.style.display = 'block'; // Exibe o card
    } else {
      card.style.display = 'none'; // Oculta o card
    }
  });
}

// Adiciona o evento de busca ao botão
document.getElementById('searchButton').addEventListener('click', searchCards);

// Adiciona o evento de busca ao pressionar a tecla 'Enter'
document.getElementById('searchInput').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    searchCards();
  }
});

// Chama a função para criar os cards
window.onload = createCards;
