import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
class Notifications {
  constructor() {
    PushNotification.configure({
      onNotification: function (notification: {
        foreground: boolean;
        finish: (arg0: string) => void;
      }) {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios',

      permissions: {
        alert: true,
        badge: false,
        sound: false,
      },
    });

    PushNotification.createChannel(
      {
        channelId: 'reminders',
        channelName: 'Task reminder notifications',
        channelDescription: 'Reminder for any tasks',
      },
      () => {},
    );

    PushNotification.getScheduledLocalNotifications((rn: any) => {});
  }

  schduleNotification(date: Date, message: string, title: string) {
    PushNotification.localNotificationSchedule({
      channelId: 'reminders',
      title: title,
      message: message,
      ignoreInForeground: false,
      date,
    });
  }
}

export default new Notifications();
