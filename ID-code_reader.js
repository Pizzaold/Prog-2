const prompt = require('prompt-sync')();

const id = prompt('Sisesta oma isikukood: ');

const sex = (id) => {
    if (id[0] % 2 === 0) {
        return 'Naine'
    } else {
        return 'Mees'
    } 
}

const birthDate = (id) => {
    console.log(id);
    const censure = id[0];
    const year = id.slice(1, 3);
    const month = id.slice(3, 5);
    const day = id.slice(5, 7);
    switch (Number(censure)) {
        case 1 || 2:
            return `${day}.${month}.18${year}`;
        case 3 || 4:
            return `${day}.${month}.19${year}`;
        case 5 || 6:
            return `${day}.${month}.20${year}`;
        default:
            return `${day}.${month}.18${year}`;

    }
}

const birthPlace = (id) => {
    const register = Number(id.slice(7, 10));
    switch (true) {
        case register <= 10:
            return 'Kuressaare haiglas';
        case register <= 19:
            return 'Tartu Ülikooli Naistekliiniks';
        case register <= 150:
            return 'Ida-Tallinna keskhaiglas või Pelgulinna sünnitusmajas (Tallinn)';
        case register <= 160:
            return 'Keila haiglas';
        case register <= 220:
            return 'Rapla haiglas või Loksa haiglas või Hiiumaa haiglas (Kärdla)';
        case register <= 270:
            return 'Ida-Viru keskhaiglas (Kohtla-Järve, endine Jõhvi)';
        case register <= 370:
            return 'Maarjamõisa kliinikumis (Tartu) või Jõgeva haiglas';
        case register <= 420:
            return 'Narva haiglas';
        case register <= 470:
            return 'Pärnu haiglas';
        case register <= 490:
            return 'Haapsalu haiglas';
        case register <= 520:
            return 'Järvamaa haiglas (Paide)';
        case register <= 570:
            return 'Rakvere haiglas või Tapa haiglas';
        case register <= 600: 
            return 'Valga haiglas';
        case register <= 650:
            return 'Viljandi haiglas';
        case register <= 700:
            return 'Lõuna-Eesti haiglas (Võru) või Põlva haiglas';
    }
}

if (id.length === 11) {
    console.log(`Sa oled ${sex(id)}.`)
    console.log(`Sa sündisid ${birthDate(id)}.`)
    console.log(`Sa olid ${id.slice(9, 10)}. inimene, kes sündis sel päeval ${birthPlace(id)}.`)
    console.log(`Sinu kontrollnumber on ${id.slice(10, 11)}.`)
} else {
    console.log('Sinu sisestatud isikukood ei vasta nõuetel');
}