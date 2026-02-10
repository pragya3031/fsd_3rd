const fs = require("fs").promises;

async function fileOperations() {
    try {
    
        await fs.writeFile("example.txt", "This is the first content.\n");
        console.log("File created and written successfully.");

        await fs.appendFile("example.txt", "This is appended content.\n");
        console.log("Content appended successfully.");

        
        const data = await fs.readFile("example.txt", "utf8");
        console.log("File Content:");
        console.log(data);

    
        await fs.unlink("example.txt");
        console.log("File deleted successfully.");
    } 
    catch (err) {
        console.error("Error:", err);
    }
}

fileOperations();