
export const STORAGE_KEY = 'Flashcard'


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