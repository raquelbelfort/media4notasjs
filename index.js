alert("Por favor, insira suas notas: ");
let nota1 = prompt("Nota 1: ");
let nota2 = prompt("Nota 2: ");
let nota3 = prompt("Nota 3: ");
let nota4 = prompt("Nota 4: ");

let medianotas = (Number (nota1) + Number (nota2) + Number (nota3) + Number (nota4)) / 4;

if(medianotas > 7)
alert(`Sua média é igual a ${medianotas}. APROVADO`);

else if(medianotas > 5 && medianotas < 7)
alert(`Sua média é igual a ${medianotas}. RECUPERAÇÃO`);

else if(medianotas < 5)
alert(`Sua média é igual a ${medianotas}. REPROVADO`);