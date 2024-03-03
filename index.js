const http = require("http");
const PORT = 4000;

const server = http.createServer((request, response) => 
{
    response.setHeader("Content-Type", "application/json");
    switch (request)
    {
        case "/dog":
            return response.write(`<html> <img src="https://media.istockphoto.com/id/1482199015/photo/happy-puppy-welsh-corgi-14-weeks-old-dog-winking-panting-and-sitting-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=XCKHaoM9oG4ST-sLawqYyutywWXkx3DYWb4MKhLUBrI=" alt="Wow a dog"> </html>`)
            break;
        case "/cat":
            return response.write(`<html> <img src="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=1024x1024&w=is&k=20&c=-keJ_V9tZtTsxwcuJqrS9Zx0EJNglQU1ezZrYYIBYrQ=" alt="Wow a cat"> </html>`)
            break;
        case "/raccoon":
            return response.write(`<html> <img src="https://media.istockphoto.com/id/1047163322/photo/racoon-in-the-trash.jpg?s=1024x1024&w=is&k=20&c=uVWna2X5XhCgDlmFW_2ZwSwbJGJex9SdxhIRledXR-M=" alt="Wow a racoon"> </html>`)
            break;
        default:
            return response.write(`<html> <img src="https://media.istockphoto.com/id/1047163322/photo/racoon-in-the-trash.jpg?s=1024x1024&w=is&k=20&c=uVWna2X5XhCgDlmFW_2ZwSwbJGJex9SdxhIRledXR-M=" alt="Still a racoon"> </html`)
            break;
    }
});

server.listen(PORT, () =>
{
    console.log("Server is running on port : " + PORT);
})