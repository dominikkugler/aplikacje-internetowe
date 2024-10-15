const {UniqueString,UniqueNumber,uuid} = require('unique-string-generator');

for (i=0; i<10; i++) {
    console.log('Zestaw nr '+(i+1));
    console.log(UniqueString());
    console.log(UniqueNumber());
    console.log(uuid.v4());
    console.log('');
}

console.log('unique-string generator to moduł pozwalający');
console.log('generować niemal w 100% unikalne stringi, liczby, lub identyfikatory');
console.log('Może być przydatny do walidacji sesji, emaili, id użytkowników zarówno na froncie jak i na backendzie');
