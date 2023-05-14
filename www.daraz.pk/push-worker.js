try {
    importScripts('https://aswpsdkeu.com/notify/v1/ua-sdk.min.js')
    uaSetup.worker(self, {
        defaultIcon: 'https://mobilecrm.accengage.com/images/logo_application/1511.png',
        defaultTitle: 'Daraz Rocket internet',
        defaultActionURL: 'https://www.daraz.pk/',
        appKey: 'aATXTCQJSA6Gcn3oTbDU9Q',
        token: 'MTphQVRYVENRSlNBNkdjbjNvVGJEVTlROnFXQVYwSjBzYlkzY29wLVdGajkwMlN5VW0tZmw0OWpvUEpyQVhxNzU5WU0',
        vapidPublicKey: 'BPnqL43zhLkdfbcXnJ81dfEmZd3qDE4352_xF4qi_iwI6vFZQzr-vbTS1zPgc-OWwF-5vbk54Bx5WaEppzh6ylg'
    })
} catch (error) {
    console.log('airship error', error);
}
try {
    importScripts('https://g.alicdn.com/intl-dada/pwa/0.0.4/service.js');
    const pwaInstance = new PWAInstance();
    pwaInstance.init();
} catch (error) {
    console.log('pwa error', error);
}