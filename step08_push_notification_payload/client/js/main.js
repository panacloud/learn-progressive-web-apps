if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        console.log(':^)', reg);
        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function(subscription) {
            console.log('subscription:', subscription.toJSON());
            console.log('endpoint:', subscription.endpoint);
        });
    }).catch(function(error) {
        console.log(':^(', error);
    });
}