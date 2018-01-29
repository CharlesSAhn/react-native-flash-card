import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const STORAGE_KEY = 'Flashcard'
export const NOTIFICATION_KEY = 'Notifications'



export function getMetricMetaInfo (metric) {
    const info = {
        addDeck: {
            message: "What is the title of your new deck?"
        }
    }

    return typeof metric === 'undefined'
        ? info
        : info[metric]
}

export function getDailyReminderValue(){
    return {
        today: "Don't forget to Study today!"
    }
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)

}

function createNotification(){
    return {
        title: 'take a quiz',
        body: 'Dont forget to take a quiaz today!',
        sound: true
    }
}

export function setLocalNotification(){
        AsyncStorage.getItem(NOTIFICATION_KEY)
            .then(JSON.parse)
            .then((data) => {
            if(data == null){
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if(status === 'granted'){
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                })
            }
    })

}