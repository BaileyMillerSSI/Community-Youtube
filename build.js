// C:\Users\sdkca\Desktop\electron-workspace\build.js
var electronInstaller = require('electron-winstaller');

// In this case, we can use relative paths
var settings = {
    // Specify the folder where the built app is located
    appDirectory: './CommunityTuber/Staging/community_tuber-win32-x64',
    // Specify the existing folder where 
    outputDirectory: './Installers',
    // The name of the Author of the app (the name of your company)
    authors: 'Bailey Miller',
    // The name of the executable of your built
    exe: './community_tuber.exe',
    description: "A community and party based real-time YouTube collaborative watching app.",
    noMsi: true
};

resultPromise = electronInstaller.createWindowsInstaller(settings);

resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});