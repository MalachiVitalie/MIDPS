#! /bin/bash

cd ./HelloWorldPrograms

gcc -o ./c/hello.exe ./c/hello.c
./c/hello.exe

g++ -o ./cpp/hello.exe ./cpp/hello.cpp
./cpp/hello.exe

javac ./java/hello.java
java -cp ./java HelloWorld

python ./python/hello.py

ruby ./ruby/hello.rb
