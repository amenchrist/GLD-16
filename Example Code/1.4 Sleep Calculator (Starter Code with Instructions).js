// STEP 1: switch case/if statement that returns the amount of sleep gained on a given day

// STEP 2: function that returns total hours of sleep that week

// STEP 3: function with ideal sleep hours a week

// STEP 4: function which compares actual sleep hours to ideal, and prints to the console a message

// STEP 5: run the function

let dailySleepAvg = 6

function sleepCalculator(hours) {
    isSleepingEnough(hours) ? console.log(`Congrats! You are getting enough sleep!`) : console.log(`Get some sleep mate`)
}

function getTotalWeekSleep(avgSleepHrs){ 
    return avgSleepHrs * 7
}

function getRecommendedSleep() {
    const recommendedSleepPerDay = 8;
    return recommendedSleepPerDay * 7
}
function isSleepingEnough(hrs){
    return getTotalWeekSleep(hrs) >= getRecommendedSleep()
}

sleepCalculator(dailySleepAvg)
