# docker-browser-screenshot

Take a screenshot of a website / render some html

```
docker pull mafintosh/docker-browser-screenshot
```

## Usage

```
echo http://google.com | docker run -i mafintosh/docker-browser-screenshot > google.png
```

Or stream in some html

```
echo '<html><body><h1>hello world</h1></body></html>' | docker run -i mafintosh/browser-screenshot > html.png
```

## License

MIT