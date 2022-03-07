Start off by creating style variables 
    root: base color, spacing, blur
To pass variables in css, use property value var(--value)

Control with js:

create a variable for inputs by sellecting all control inputs
    Query selector returns a NodeList (looks like an array but is not one)
    There are less ways to deal with NodeLists than Arrays
    You can convert NodeLists to Arrays (will not do now)

    create a function to handle the update
    create a variable suffix equal to this dataset . spcific attribute ie sizing or nothing ('')
        an objet that contains all data-atributes from specific element ie. sizing
    set the document element style property for each varaible by gettting this.name and calling individual this.value
        don't forget to tack on suffix variable on end! 
    
    
    for each input, listen for change event on input and call handleUpdate
    to trigger change, listen for mousemove handle update