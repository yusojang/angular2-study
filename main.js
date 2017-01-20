import $ from 'jquery';

class HelloWorld {
    constructor(){
        $(document.body).append('<h1>Hello</h1>');
    }
}

const HelloWorld = new HelloWorld();