import { parse, differenceInDays, isToday, isYesterday } from 'date-fns'

const convertToDateList = (noteList) => {
    const referenceDate = new Date()
    return noteList.map((note) => parse(note.date, 'MM/dd/yyyy', referenceDate))
}

/**
 * Finds the highest number of consecutive days a note has been submitted
 * @param {*} noteList
 */
export const findMostConsecutiveDays = (noteList) => {
    const dates = convertToDateList(noteList)
    let maxNumConsecutive = 0
    let numConsecutive = 0
    for (let i = 0; i < dates.length; i++) {
        if (i + 1 >= dates.length) {
            break
        }
        const d1 = dates[i]
        const d2 = dates[i + 1]
        if (differenceInDays(d1, d2) === 1) {
            numConsecutive += 1
            maxNumConsecutive = Math.max(maxNumConsecutive, numConsecutive)
        } else {
            numConsecutive = 0
        }
    }
    return maxNumConsecutive
}

/**
 * Finds the current streak of consecutive days, counting the current day as 1
 * @param {*} noteList
 */
export const findCurrentStreak = (noteList) => {
    const dates = convertToDateList(noteList)

    let numConsecutive =
        dates.length > 0 && (isToday(dates[0]) || isYesterday(dates[0])) ? 1 : 0

    for (let i = 0; i < dates.length; i++) {
        if (i + 1 >= dates.length) {
            break
        }
        const d1 = dates[i]
        const d2 = dates[i + 1]
        if (differenceInDays(d1, d2) === 1) {
            numConsecutive += 1
        } else {
            break
        }
    }

    return numConsecutive
}

/**
 * Returns the average word count for your list of notes
 * @param {*} noteList
 */
export const findAverageWordCount = (noteList) => {
    if (!noteList || noteList.length === 0) {
        return 0
    }
    return (
        noteList
            .map((it) => it.text)
            .map((it) => it.trim().split(/\s+/).length)
            .reduce((acc, it) => acc + it, 0) / noteList.length
    )
}

export const findAverageWordCountRounded = (noteList) => 
    Math.round(findAverageWordCount(noteList))

export const findLongestNote = (noteList) => {
    if (!noteList || noteList.length === 0) {
        return 0
    }

    return noteList
        .map((it) => it.text)
        .map((it) => it.trim().split(/\s+/).length)
        .reduce((acc, it) => (acc > it ? acc : it), 0)
}

export const findWordCounts = (noteList) => {
    if (!noteList || noteList.length === 0) {
        return []
    }

    const wordCounts = {}
    noteList
        .map(it => it.text)
        .map(it => it.toLowerCase())
        .forEach(it => {
            it.split(' ')
                .map(word => word.replace(/\W/g, ''))
                .filter(word => word.length > 0)
                .reduce((acc, cur) => {
                const currentCount = acc[cur]
                if (currentCount == null || currentCount == undefined) {
                    acc[cur] = 1
                } else {
                    acc[cur] = currentCount + 1
                }
                return acc
            }, wordCounts)
        })

    console.log(wordCounts)
    
    return Object.keys(wordCounts)
        .map(key => [key, wordCounts[key]])
        
}
