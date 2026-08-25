let names = ["anna", "bob", "charlie", "diana"];


let capitalizedNames = names.map(function(name) {
    
    
    return name[0].toUpperCase() + name.slice(1);
});


console.log(capitalizedNames);
