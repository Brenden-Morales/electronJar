/**
 * Created by brenden on 10/8/2015.
 */
var fs = require("fs");
var path = require("path");
var spawn = require("child_process").spawn;

var jarPath = undefined;


var TARGET_FOLDER = "/../../../../target";
function loadfunc(){
    var dir = fs.readdir(__dirname + TARGET_FOLDER,function(err,files){
        if(err){
            alert(err);
            return;
        }
        files.forEach(function(file){
            if(file.indexOf(".jar") !== -1){
                jarPath = path.normalize(__dirname + TARGET_FOLDER + "/" + file)
            }
        });
        if(jarPath !== undefined){
            runJar();
        }
    });
}

function runJar(){
    var child = spawn("java",[
        "-jar",jarPath,
        "-arg1","somethingsomethingsomething"
    ]);
    child.stdin.setEncoding = "utf-8";
    child.stdout.on("data",function(chunk){
        var string = chunk.toString();
        console.log(string);
        if(string.indexOf("{input}") !== -1){
            console.log("writing");
            child.stdin.write("woahwoahwoahwoah\n");
        }
    })
}