init();
main();
function main() {
    while (true) {
        execute(prompt(user + '@' + hostname + ':' + cwd + '$ '));
    }
}
function init() {
    cwd = '~';
    hostname = "host";
    user = "user";
}
function execute(cmd) {
    if(cmd==="cd .." && cwd==='~')cwd='/';
    else if(cmd==="cd")cwd='~';
    else if(cmd==="ls"&&cwd==='~')console.log("file.txt");
    else if(cmd==="ls"&&cwd==='/')console.log("bin      etc      lib      linuxrc  mnt      proc     run      sys      usr\ndev      home     lib64    media    opt      root     sbin     tmp      var");
    else if(cmd==="cd /")cwd='/';
    else if(cmd==="ls /")console.log("bin      etc      lib      linuxrc  mnt      proc     run      sys      usr\ndev      home     lib64    media    opt      root     sbin     tmp      var");
    else if(cmd==="exit"){process.exit(1);}
    /*
    This is where you add your own fake commands
    */
    else{console.log(`sh: ${cmd.split(" ")[0]}: command not found`);}
}
