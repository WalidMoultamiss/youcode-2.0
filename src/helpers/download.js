export const download = ((User) => {
    const saveData = (data, fileName) => {
        const a = document.createElement("a");
        const json = data,
            blob = new Blob([json], { type: "octet/stream" }),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = `${fileName}.txt`;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    const online = User.testOnline.reduce((output, qst, idx) => {
        return output += `
            ${idx + 1} : USER ANSWER ${qst.answer} AND THE CORRECT ANSWER ${qst.correct}
        `
    }, '')

    const motivation = User.motivation.reduce((output, answer, idx) => {
        return output += `
            ${idx + 1} : USER ANSWER ${answer.text}
        `
    }, '')

    const data = `
    FULL NAME      : ${User.fullName.toUpperCase()} 
    STATUS         : ${User.status.toUpperCase()} 
    PASSED TEST ON :  ${new Date()}  

    ONLINE TEST : 
        ${online}
    MOTIVATION TEST : 
        ${motivation}
    technique TEST : 
        USER PREFERE  *${User.technique.lang}*  LANGUGES :
        ==================================================
            ${User.technique.script}
        ==================================================
    `


    saveData(data, User.fullName);
});
