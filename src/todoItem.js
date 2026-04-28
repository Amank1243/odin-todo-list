export {todoItem};

function todoItem() {
    let title = ' ';
    let description = ' ';

    let date = new Date();
    let dateCreated = date.getMonth() + "/" + date.getDate() + '/' + date.getFullYear();
     
    let dueDate = new Date("2077", "7", "25").toLocaleDateString();
    let priority = ' '; // Maybe make this into an enum?
    
    // Getter Functions
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getDateCreated = () => dateCreated;
    const getPriority = () => priority;

    // Setter Functions
    const setTitle = (newTitle) => title = newTitle;

    return {getTitle, getDescription, getDueDate, getDateCreated, getPriority, 
            setTitle, 
    };

};


