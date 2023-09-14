const { register } = require('module');

const prompt = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
prompt.question('You id code:', id => {
    console.log(`Your id code is ${id}`);
    if (id.length === 11) {
        console.log('Your id code is correct');
        const sex = (id) => {
            if (id[0] % 2 === 0) {
                return 'Female'
            } else {
                return 'Male'
            } 
        }
        const birthDate = (id) => {
            const censure = id[0];
            const year = id.slice(1, 3);
            const month = id.slice(3, 5);
            const day = id.slice(5, 7);
            let date = '';
            switch (censure) {
                case 1 || 2:
                    date = `18${year}.${month}.${day}`;
                    break;
                case 3 || 4:
                    date = `19${year}.${month}.${day}`;
                    break;
                case 5 || 6:
                    date = `20${year}.${month}.${day}`;
                    break;
                default:
                    date = `18${year}.${month}.${day}`;
                    break;
            }
            return date;
        }
        const birthPlace = (id) => {
            const register = id.slice(7, 10);
            const places = {
                e001 : 'Kuressaare haiglas',
                e011 : 'Tartu Ülikooli Naistekliiniks',
                e021 : 'Ida-Tallinna keskhaiglas \ Pelgulinna sünnitusmajas (Tallinn)',
                e151 : 'Keila haiglas',
                e161 : 'Rapla haiglas \ Loksa haiglas \ Hiiumaa haiglas (Kärdla)',
                e221 : 'Ida-Viru keskhaiglas (Kohtla-Järve, endine Jõhvi)',
                e271 : 'Maarjamõisa kliinikumis (Tartu) \ Jõgeva haiglas',
                e371 : 'Narva haiglas',
                e421 : 'Pärnu haiglas',
                e471 : 'Haapsalu haiglas',
                e491 : 'Järvamaa haiglas (Paide)',
                e521 : 'Rakvere haiglas \ Tapa haiglas',
                e571 : 'Valga haiglas',
                e601 : 'Viljandi haiglas',
                e651 : 'Lõuna-Eesti haiglas (Võru), Põlva haiglas ',
            }
            for (placeKey in places) {
                if (register === placeKey) {
                    return places[placeKey];
                }
            }
        }
        console.log(`You are ${sex(id)}, you where born on ${birthDate(id)}, you where born in `)
    } else {
        console.log('Your id code is not correct');
    }
    prompt.close();
});