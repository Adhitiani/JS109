//-extract the first code for the language, // extract the region, // greet



function localGreet(locale) {
  let extractLanguage = locale.slice(0,2);
  let extractRegion = locale.slice(3,5);

  let greet = {
    en: {
      US: 'Hey!',
      GB: 'Hello!',
      AU: 'Howdy!'
    },
    fr: 'Salut!',
    pt: 'Olá!',
    de: 'Hallo!',
    sv: 'Hej!',
    af: 'Haai!',
  }

  if (extractLanguage === 'en') {
    return greet[extractLanguage][extractRegion];
  } else {
    return greet[extractLanguage];
  }
}

console.log(localGreet('en_US.UTF-8'))
console.log(localGreet('en_GB.UTF-8'))
console.log(localGreet('en_AU.UTF-8'))
console.log(localGreet('fr_FR.UTF-8'))
console.log(localGreet('fr_CA.UTF-8'))
console.log(localGreet('sv_CA.UTF-8'))
