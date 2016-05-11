var webpush = require('web-push-encryption');

var MY_GCM_KEY = "AIzaSyDvwFkA_xb0BFz_YOZT9WDj8y0NhJDvqfE"
//var MY_GCM_KEY = "AIzaSyCsCOzXB8Ewo2XcM1_YTUkFTnmIPNKD95s"

webpush.setGCMAPIKey(MY_GCM_KEY);

var subscription = {
    "endpoint":
    "https://android.googleapis.com/gcm/send/cwRQ6Nkz_Xo:APA91bHW9zbR38Y947E7q0sNvqqXBtdDyw1HzDnkWYJoiGwSRdDKlwpSYfbS-gnJQqIH37cvoBo2k-bZcPNXaSzFlzNcz0EGQHIhWYTRmBv7MCXXdXaK3A55dIccdfp0PALqs66Un63M",
    "keys": {
        "auth": "YdxIUawxMkX_SYtTlT2KSA==",
        "p256dh": "BEYG_Px0QGwfedQJvBXBF7x_aTfyFilGKkdkwp-vmnbpmXo3bWW1tp4Wvby3NAX7VbC0r_1bthFoGF7jrtL9C9Y="
    }
};

if (subscription.endpoint.indexOf('https://android.googleapis.com/gcm/send/') === 0) {
    webpush.sendWebPush('my push messsage', subscription).then(function(resolve,reject){
        console.log('resolve: ', resolve);
        console.log('reject: ', reject);
    });
}
