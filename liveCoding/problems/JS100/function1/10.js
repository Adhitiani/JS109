//Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:


localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

//Distinguish greetings for English speaking countries like the US, UK, Canada, or Australia in your implementation, and feel free to fall back on the language-specific greetings in all other cases, for example:


localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

//When implementing localGreet, make sure to re-use your extractLanguage, extractRegion and greet functions from the previous exercises.

function extractRegion(code) {
  return code.split('.')[0].split('_')[1];
}

function extractLanguage(code) {
  return code.split('_')[0];
}

function greet(countryCode) {
  switch (countryCode) {
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

function greetEn(countryCode) {
  switch (countryCode) {
    case 'US' :
      console.log('Hey!');
      break;
    case 'GB' :
      console.log('Hello!');
      break; 
    case 'AU' :
      console.log('Howdy!');
      break; 
    default :
      console.log('Hi!');
      break;
    }
}

function localGreet(code) {

  let countryCode = extractLanguage(code);

  if (countryCode === 'en') {
    countryCode = extractRegion(code);
    greetEn(countryCode);
  } else {
    greet(countryCode);
  }
  
}

//////
function extractLanguage(locale) {
  return locale.slice(0, 2);
}

function extractRegion(locale) {
  return locale.slice(3, 5);
}

function localGreet(locale) {
  let lang = extractLanguage(locale);
  let region = extractRegion(locale);
  let greetings = {
    en: {
      US: 'Hey!',
      GB: 'Hello!',
      AU: 'Howdy!',
    },
    fi: 'Hei!',
    is: 'Halló!',
    nb: 'Hallo!',
    sv: 'Hej!',
    fr: 'Salut!',
  }
  if (lang === 'en') {
    console.log(greetings[lang][region]);
  } else {
    console.log(greetings[lang]);
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('fr_FR.UTF-8'); // 'Salut!'