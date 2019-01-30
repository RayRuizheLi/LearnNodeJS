//testing helloWorldModule and installing modules

var mymodule = require('helloWorldModule');

mymodule.sayHello();
mymodule.sayGoodbye();

var markdown = require('markdown').markdown;

console.log(markdown.toHTML('A paragraph in **markdown**!'));
