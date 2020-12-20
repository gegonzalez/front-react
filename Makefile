docker=docker run -it --rm \
 -p 3000:3000 \
 --name app-front front-build

run:
	$(docker)

build:
	docker build -t front-build .
