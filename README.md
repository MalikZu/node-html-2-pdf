## HTML to PDF converter
This app is a simple example to use https://github.com/marcbachmann/node-html-pdf 

## Setup
First you have to install the packages using:

```
npm install
```

Then simply 
```
node .
```

## Usage

### Use it with ```GET``` 
You have to supply two queries, `name` and `html` for example:

```
localhost:3000/?name=mypdf&html=<h1>Hello World!</h1>
``` 

### Use it with ```POST``` 
You have to supply in the body, `name` and `html` for example:

```
POST /post HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded

html=<div>Hello World</div>&name=mypdf
```

with `cURL`:

```
curl --location --request POST 'localhost:3000/post' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'html=<div>Hello World</div>' \
--data-urlencode 'name=mypdf'
``` 