const fs = require('fs');

fs.readFile('LifesmartPlug.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error', err);
        return;
    }
    const jsonData = JSON.parse(data);

    const cleanedData = jsonData.map(item => {
        delete item.status;
        delete item.message.lDbm;
        delete item.message.stat;
        delete item.message.agt;
        delete item.message.ver;
        delete item.message.fullCls;
        delete item.message.me;
        delete item.code;
        delete item.id;
        delete item.message.data.P2;
        delete item.message.data.P4;
        return item;
    });

    fs.writeFile('cleanedPlug.json', JSON.stringify(cleanedData, null, 2), (err) => {
        if (err) {
            console.error('Error', err);
            return;
        }
        console.log('Success');
    });
});
