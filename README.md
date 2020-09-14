## HTML to PDF converter
This app is a simple example to use https://github.com/marcbachmann/node-html-pdf 

### Setup
First you have to install the packages using:

```
npm install
```

Then simply 
```
node .
```

### Usage

You have to supply two queries, `name` and `html` for example:

```
localhost:3000/?name=mypdf&html=<h1>Hello World!</h1>
``` 