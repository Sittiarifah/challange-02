function changedWord (selectedText, changeText, text){
    return text.split(selectedText).join(changeText);
}
const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung semeru takkan mampu menggambarkan besarnya rasa cintaku padamu';

console.log(changedWord('mencintai', 'membenci', kalimat1))
console.log(changedWord('semeru', 'bromo', kalimat2))
