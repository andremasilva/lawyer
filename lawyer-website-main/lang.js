const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");
const titleEl = document.querySelector(".title");
const descrEl = document.querySelector(".description");
const descrE = document.querySelector(".description1");
const descrE2 = document.querySelector(".description2");
const descrE3 = document.querySelector(".name");
const nav1 = document.querySelector('.nav1')
const nav2 = document.querySelector('.nav2')
const nav3 = document.querySelector('.nav3')
const nav4 = document.querySelector('.nav4')
const nav5 = document.querySelector('.nav5')
const servic1 = document.querySelector('.serv1')
const servic2 = document.querySelector('.serv2')
const servic3 = document.querySelector('.serv3')
const servic4 = document.querySelector('.serv4')
const servic5 = document.querySelector('.serv5')
const servic6 = document.querySelector('.serv6')
const servic7 = document.querySelector('.serv7')
const servic8 = document.querySelector('.serv8')
const servic9 = document.querySelector('.serv9')
const foot1 = document.querySelector('.item1')
const foot2 = document.querySelector('.item2')
const foot3 = document.querySelector('.item3')
const textmember = document.querySelector('.textMember')

link.forEach((el) => {
  el.addEventListener("click", () => {
    const attr = el.getAttribute("language");
    titleEl.textContent = data[attr].title;
    descrEl.textContent = data[attr].description;
    descrEl.textContent = data[attr].description1;
    descrE2.textContent = data[attr].description2;
    descrE3.textContent = data[attr].team;
    nav2.textContent = data[attr].nav2;
    nav3.textContent = data[attr].nav3;
    nav4.textContent = data[attr].nav4;
    servic1.textContent = data[attr].serv1;
    servic2.textContent = data[attr].serv2;
    servic3.textContent = data[attr].serv3;
    servic4.textContent = data[attr].serv4;
    servic5.textContent = data[attr].serv5;
    servic6.textContent = data[attr].serv6;
    servic7.textContent = data[attr].serv7;
    servic8.textContent = data[attr].serv8;
    servic9.textContent = data[attr].serv9;
    foot1.textContent= data[attr].footer1;
    foot2.textContent= data[attr].footer2;
    foot3.textContent= data[attr].footer3;
    textmember.textContent= data[attr].textMember;
  });
});

let data = {
  portuguese: {
    title: "Hello World",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci eligendi repellat ad dolor veritatis itaque sequi minus iste, doloremque. Officiis non eaque atque excepturi repudiandae nulla eos eligendi magni molestiae eius distinctio, voluptas pariatur incidunt et culpa inventore aspernatur recusandae nihil asperiores, vitae, maiores laborum quasi perspiciatis natus dignissimos! Accusantium aliquam nostrum impedit dignissimos iste, iure inventore! Sapiente, labore earum ut dicta ducimus asperiores laudantium natus officiis, quisquam placeat aspernatur voluptatum aut voluptates tenetur quos magni fugit quia. Fugiat.",
    description2:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci eligendi repellat ad dolor veritatis itaque sequi minus iste, doloremque. Officiis non eaque atque excepturi repudiandae nulla eos eligendi magni molestiae eius distinctio, voluptas pariatur incidunt et culpa inventore aspernatur recusandae nihil asperiores, vitae, maiores laborum quasi perspiciatis natus dignissimos! Accusantium aliquam nostrum impedit dignissimos iste, iure inventore! Sapiente, labore earum ut dicta ducimus asperiores laudantium natus officiis, quisquam placeat aspernatur voluptatum aut voluptates tenetur quos magni fugit quia. Fugiat.",
    team: "team",
  },
  french: {
    title: "QUI NOUS SOMMES",
    description1:"Privilégiant la proximité, ce bureau est fier de pouvoir fournir à une clientèle nationale et étrangère des services juridiques diversifiés dans le nord du Portugal. João Lages, de par ses liens étroits avec ses partenaires en France et sa maîtrise de la langue française, apporte à ses clients francophones une assistance de premier ordre et une réponse spécifique adaptée à leurs besoins et attentes. Après plus de quinze ans d'expérience, nous sommes récompensés par la reconnaissance du tissu entrepreneurial de la communauté française et luso-française.",
    description2:"Engagé dans le rôle social du droit, ce cabinet acquérir quotidiennement dans la communauté et l'activité dans qui relèvent de promouvoir le développement de solutions créatif et habitué aux besoins de ses clients. La dynamique croissante de la société redouble notre faire attention à l'agilité dans la résolution des conflits et autres promotion conséquente de l'efficacité financière solutions apportées à nos clients. Conscient de la nécessité de réponses efficaces, qu'il s'agisse de niveau corporate et privé, nous privilégions précision et attention aux demandes de nos clients.",
    team: "Services",
    nav2:'Qui nous sommes',
    nav3:'Services juridiques spécialisés',
    nav4:'Contacts',
    serv1:'Litige',
    serv2:'Superviseur',
    serv3:'Droit administratif et public',
    serv4:'Urbanisme et aménagement du territoire',
    serv5:'Famille et succession',
    serv6:'Mineurs',
    serv7:'Pénal, délit et conformité',
    serv8:'Patrimoine',
    serv9:'Travail, sécurité sociale et immigration',
    footer1:'CONTACTS',
    footer2:'Téléphone: 258 724 095/ +351 966 960 970',
    footer3:'FOLLOW US',
    textMember:"Membre de la Chambre de Commerce et d'Industrie Luso-Française - CCILF"

  },
};
