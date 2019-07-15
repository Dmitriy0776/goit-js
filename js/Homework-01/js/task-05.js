// Пользователь может оформить доставку товара к себе в страну,
//  указав ее при посещении страницы в prompt. 
// Учти, пользователь может ввести имя страны не только буквами 
// нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. 
// Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 
// 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов


const china = 'Китай';
const chile = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';

let chinaVelue = 100;
let chileVelue = 250;
let australiaVelue = 170;
let indiaVelue = 80;
let jamaicaVelue = 120;

let delivery = prompt('Укажите страну доставки товара')
let message;

// delivery = delivery.toLowerCase();

if (delivery === null) {
    message = 'Отменено пользователем!';
} else {
    switch(delivery.toLowerCase()) {
        case china.toLowerCase():
    
            message = `Доставка в ${china} будет стоить ${chinaVelue} кредитов`;
    
        break;
    
        case chile.toLowerCase():
    
            message = `Доставка в ${chile} будет стоить ${chileVelue} кредитов`;
    
        break;
    
        case australia.toLowerCase():
    
            message = `Доставка в ${australia} будет стоить ${australiaVelue} кредитов`;
            
        break;
    
        case india.toLowerCase():
    
            message = `Доставка в ${india} будет стоить ${indiaVelue} кредитов`;
    
        break;
    
        case jamaica.toLowerCase():
    
            message = `Доставка в ${jamaica} будет стоить ${jamaicaVelue} кредитов`;
    
        break;
    
        default:
            message = `В вашей стране доставка не доступна`;
    
    }
}


alert(message);