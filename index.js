const RPC = require('discord-rpc') /// npm i discord-rpc להוריד את החבילה הזאת
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "EveryBot", /// כותרת
        state: "Creating Discord bots", /// תיאור
        startTimestamp: new Date(),
        largeImageKey: "panda", ///  <שמים תמונה ואז משנים לה תשם ואז תשם של התמונה תדביקו כאן(Art Assets)ואז ל <(DEVELOPER PORTAL)תמונה גדולה בצד בשביל לעשות את ניגשים
        largeImageText: "hi",/// <ששמים עכבר על התמונה זה מראה את מה שמוגדר כאן
        smallImageKey: "panda",/// תמונה קטנה
        smallImageText: "hi",/// <ששמים עכבר על התמונה זה מראה את מה שמוגדר כאן
        buttons: [{ label: "My Bot", url: "https://dsc.gg/everybot" }, { label: "Support Server", url: "https://discord.gg/6kRhsu4Ztn" }] ///כאן אפשר לשנות
    })

    console.log("successfully activated the RPC") ////  (node .)אם הכל טוב אז זה רושם את זה בטרמינל אחרי שאתם כותבים 
})

rpc.login({
    clientId: 'code' ///  APPLICATION ID ואז מעתיקים את את ה(General Information)אתם הולכים שוב לדולפור פורטל ואז לבוט ושם ניגשים ל
})