/*
 * File Description
 * Rename Assets files
 * 
 * Created on Thu Jan 31 2019
 * Created by: Gautam Sharma
 * Copyright (c) 2019
 */

const fs = require('fs');
const path = require('path');
var args = process.argv.slice(2);
// console.log(args);

const traverseDirectory = (dirname, callback) => {
    var directory = [];
    fs.readdir(dirname, function (err, list) {
        dirname = fs.realpathSync(dirname);
        if (err) {
            return callback(err);
        }
        var listlength = list.length;
        list.forEach(function (file) {
            file = dirname + '\\' + file;
            fs.stat(file, function (err, stat) {
                directory.push(file);
                if (stat && stat.isDirectory()) {
                    traverseDirectory(file, function (err, parsed) {
                        directory = directory.concat(parsed);
                        if (!--listlength) {
                            callback(null, directory);
                        }
                    });
                } else {
                    if (!--listlength) {
                        callback(null, directory);
                    }
                }
            });
        });
    });
}

traverseDirectory(args[0], function (err, result) {
    if (err) {
        console.log(err);
    }

    result.forEach(function (fileName) {
        console.log('File Path ' + fileName);
        const orgFileName = path.basename(fileName);
        console.log('Original File Name ' + orgFileName);

        const modifyName = orgFileName.toLowerCase().replace(/(\s+)/g, "_").replace(/(-)+/g, "_")
        console.log('Modify File Name ==> ' + modifyName);

        const newFileName = fileName.replace(orgFileName, modifyName);
        console.log('New File Name ==> ' + newFileName);

        fs.rename(fileName, newFileName, function (err) {
            if (err) {
                console.log('ERROR: ' + err);
                return;
            }
            console.log('Success');
        })
    });
});
