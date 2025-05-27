console.log("Hello, World! This is a JavaScript file.");

// Question 1: Create a variable and log its value
 const book = {
            title: "JavaScript Basics",
            author: "your Name",
            id: "student ID",
            yearPublished: 2024
        };

        console.log(book);
        console.log(book.title);
        console.log(typeof book);


// Question 2: Create an array of movie objects
const movies = [
    { name: "Inception", rating: 8.8 },
    { name: "The Matrix", rating: 8.7 },
    { name: "Interstellar", rating: 8.6 }
];

// Function that logs the name of the movie with the highest rating
function displayTopMovie() {
    let topMovie = movies[0];
    for (let movie of movies) {
        if (movie.rating > topMovie.rating) {
            topMovie = movie;
        }
    }
    console.log(topMovie.name);
}

displayTopMovie();
// Log the types of movies and displayTopMovie using typeof
console.log(typeof movies);
console.log(typeof displayTopMovie);


// Question 3  --- Exploring Object Operations and Console Tools ---

// Create an object called employee
let employee = {
    name: "Alex Johnson",
    department: {
        name: "Engineering",
        location: "Toronto"
    },
    skills: ["JavaScript", "React"]
};

// Log the name of the department using nested access
console.log(employee.department.name);

// Log the first skill listed in the skills array
console.log(employee.skills[0]);

// Dynamically add new properties to the employee object
employee.email = "alex.johnson@example.com";
employee.isFullTime = true;

// Create an array called employees that includes at least 3 employee objects
const employees = [
    employee,
    {
        name: "Maria Silva",
        department: {
            name: "Marketing",
            location: "Vancouver"
        },
        skills: ["SEO", "Content Creation"],
        email: "maria.silva@example.com",
        isFullTime: false
    },
    {
        name: "John Doe",
        department: {
            name: "Finance",
            location: "New York"
        },
        skills: ["Excel", "Accounting"],
        email: "john.doe@example.com",
        isFullTime: true
    }
];

// Use console.table to neatly display the array of employee objects
console.table(employees);