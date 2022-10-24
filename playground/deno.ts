const firstArg = Deno.args[0];
const secondArg = Deno.args[1];

if (firstArg === "love" && secondArg == "hate") {
    console.log('Up')
} else {
    console.log('down');
}