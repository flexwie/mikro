build:
	GOOS=windows GOARCH=amd64 go build -o main-windows-amd64.exe .
	GOOS=windows GOARCH=386 go build -o main-windows-386.exe .
	GOOS=linux GOARCH=amd64 go build -o main-linux-amd64 .
	GOOS=linux GOARCH=386 go build -o main-linux-386 .
	GOOS=linux GOARCH=arm go build -o main-linux-arm .