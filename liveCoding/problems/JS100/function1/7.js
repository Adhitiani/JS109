//Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

function greet(countryCode) {
  switch (countryCode) {
    case 'en' :
      console.log('Hi!');
      break;
    case 'fr' :
      console.log('Salut!');
      break; 
    case 'pt' :
      console.log('Olá!');
      break; 
    case 'de' :
      console.log('Hallo!');
      break;
    case 'sv' :
      console.log('Hej!');
      break;
    case 'af' :
      console.log('Haai!');
      break;    
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'
