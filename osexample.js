const os =require("os");
console.log(`OS platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS release: ${os.release()}`);
console.log(`CPU architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);

//memory information 
const totalMemGB=(os.totalmem()/(1024*1024*1024)).toFixed(2);
const freeMemGB=(os.freemem()/(1024*1024*1024)).toFixed(2);
console.log(`Memory: ${freeMemGB} GB free out of ${totalMemGB} GB`);


//user information 
const userInfo = os.userInfo();
console.log(`current user : ${userInfo.username}`);
console.log(`home directory: ${userInfo.homedir}`);