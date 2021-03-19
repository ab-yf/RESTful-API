
import { v4 as uuidv4 } from 'uuid'; // Imported an NPM Module known as UUID to generate User IDs //


// We are creating a mock database below //
let users = [
    {
        firstName: "Abdullah",
        lastName : "Yusuf",
        age: 22
    }
]

export const thisIsUserHomePage = (req,res,) => {
    console.log(users);
    res.send (users);
};
   
export const letsCreateAUser = (req,res) => {

    const user = req.body;
    
    // Used the spread operator to spread all the properties of the user. //
    // This is extremely useful when POST new details of the user with their ID //
    // ushing the user which has been sent to our POST, to our users database. //
    users.push({ ...user, id: uuidv4() }); 

    res.send(`The user, with the name ${user.firstName}, has been added to the database.`);
    // Whenever we perform a POST request, we will seen the above message on our screen
    
};

export const letsGetAUser = (req,res) =>{

    const { id } = req.params;
    const foundAUser = users.find((user) => user.id === id);
    if (!foundAUser) res.status(404).send ('The user with the given ID has not been found.')
    res.send (foundAUser);

};

export const letsDeleteAUser = (req,res) => {

    const { id } = req.params;
    users = users.filter ((user) => user.id !== id);
     // Remove only those elements for which the functiion returns false
    res.send (`The User with the ID ${id} has been deleted from the database.`)

};

export const letsPatchAUser = (req, res) => {

    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const userToBeUpdated = users.find((user) => user.id === id);
    
        if(firstName) userToBeUpdated.firstName = firstName;
        if(lastName) userToBeUpdated.lastName = lastName;
        if(age) userToBeUpdated .age = age;

        res.send (`User with the ID ${id} has been updated`);

};
