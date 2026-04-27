
function todoItem() {
    let title = ' ';
    let description = ' ';

    let date = new Date();
    let dateCreated = date.getMonth() + "/" + date.getDate() + '/' + date.getFullYear();
     
    let dueDate = new Date(year, month, day).toLocaleDateString();
    let priority = ' '; // Maybe make this into an enum?
    

};

let date = new Date()
console.log(date.getMonth() + "/" + date.getDate() + '/' + date.getFullYear());

