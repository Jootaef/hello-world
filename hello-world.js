/**
 * Hello World Program in JavaScript
 * CSE310 - Software Engineering
 * BYU-Pathway Worldwide
 * 
 * This program demonstrates basic JavaScript concepts including:
 * - Variables and data types
 * - Functions
 * - Arrays and loops
 * - Date objects
 * - DOM manipulation
 * - Template literals
 */

// Global variables
let greetingCount = 0;
const greetings = [
    "Hello World! 🌍",
    "¡Hola Mundo! 🌎",
    "Bonjour le Monde! 🌍",
    "Hallo Welt! 🌍",
    "Ciao Mondo! 🌍",
    "Olá Mundo! 🌍",
    "Привет Мир! 🌍",
    "こんにちは世界! 🌍",
    "안녕하세요 세계! 🌍",
    "مرحبا بالعالم! 🌍"
];

// Get current date and time
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString();
}

// Generate a random greeting
function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}

// Main function to run the Hello World program
function runHelloWorld() {
    greetingCount++;
    const outputElement = document.getElementById('output');
    
    // Get current time
    const currentTime = getCurrentDateTime();
    
    // Get a random greeting
    const greeting = getRandomGreeting();
    
    // Create the output message
    const message = `
        ${greeting}
        
        📅 Current Time: ${currentTime}
        🔢 Greeting Count: ${greetingCount}
                
        Keep clicking to see different greetings! 🎉
    `;
    
    // Display the message with a nice animation
    outputElement.style.opacity = '0';
    setTimeout(() => {
        outputElement.innerHTML = message.replace(/\n\s+/g, '<br>');
        outputElement.style.opacity = '1';
    }, 200);
    
    // Add some visual feedback
    outputElement.style.borderColor = '#28a745';
    setTimeout(() => {
        outputElement.style.borderColor = '#e9ecef';
    }, 1000);
}

// Function to clear the output
function clearOutput() {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = 'Click "Run Hello World" to see the magic!';
    greetingCount = 0;
}

// Function to run the program in console (for Node.js compatibility)
function runInConsole() {
    console.log("=== Hello World Program ===");
    console.log("🌍 Hello World!");
    console.log(`📅 Current Time: ${getCurrentDateTime()}`);
    console.log("🎓 CSE310 - Software Engineering");
    console.log("🏫 BYU-Pathway Worldwide");
    console.log("================================");
}

// Auto-run in console if not in browser environment
if (typeof window === 'undefined') {
    runInConsole();
}

// Export functions for Node.js compatibility
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        runHelloWorld,
        getRandomGreeting,
        getCurrentDateTime,
        runInConsole
    };
} 