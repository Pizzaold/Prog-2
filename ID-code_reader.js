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
            return `${day}.${month}.17${year}`;

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

const birthNumber = (id) => {
    const register = Number(id.slice(7, 10));
    let temp = 0
    let gap = 0
    switch (true) {
        case register <= 10:
            gap = 10
            temp = 10 - register;
            return gap - temp;
        case register <= 19:
            gap = 19 - 10
            temp = 19 - register;
            return gap - temp;
        case register <= 150:
            gap = 150 - 19
            temp = 150 - register;
            return gap - temp;
        case register <= 160:
            gap = 160 - 150
            temp = 160 - register;
            return gap - temp;
        case register <= 220:
            gap = 220 - 160
            temp = 220 - register;
            return gap - temp;
        case register <= 270:
            gap = 270 - 220
            temp = 270 - register;
            return gap - temp;
        case register <= 370:
            gap = 370 - 270
            temp = 370 - register;
            return gap - temp;
        case register <= 420:
            gap = 420 - 370
            temp = 420 - register;
            return gap - temp;
        case register <= 470:
            gap = 470 - 420
            temp = 470 - register;
            return gap - temp;
        case register <= 490:
            gap = 490 - 470
            temp = 490 - register;
            return gap - temp;
        case register <= 520:
            gap = 520 - 490
            temp = 520 - register;
            return gap - temp;
        case register <= 570:
            gap = 570 - 520
            temp = 570 - register;
            return gap - temp;
        case register <= 600:
            gap = 600 - 570
            temp = 600 - register;
            return gap - temp;
        case register <= 650:
            gap = 650 - 600
            temp = 650 - register;
            return gap - temp;
        case register <= 700:
            gap = 700 - 650
            temp = 700 - register;
            return gap - temp;
    }
}

const controlNumber = (id) => {
    const first_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    const second_array = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
    let id_array = []
    for (let i = 0; i < 10; i++) {
        id_array.push(Number(id[i]));
    }
    console.log(id_array); 
    let control = 0;
    for (let i = 0; i < 10; i++) {
        control += id_array[i] * first_array[i];
    }
    console.log(control);
    if (control % 11 === 10) {
        control = 0;
        for (let i = 0; i < 10; i++) {
            control += id_array[i] * second_array[i];
        }
        return control % 11;
    } else {
        return control % 11;
    }
}

if (id.length === 11) {
    console.log(`Sa oled ${sex(id)}.`)
    console.log(`Sa sündisid ${birthDate(id)}.`)
    console.log(`Sa olid ${birthNumber(id)}. inimene, kes sündis sel päeval ${birthPlace(id)}.`)
    console.log(`Sinu kontrollnumber on ${controlNumber(id)}.`)
} else {
    console.log('Sinu sisestatud isikukood ei vasta nõuetel');
}