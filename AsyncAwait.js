// =======================================
// Requesting with promises, not that good
// =======================================

function makeRequest(location) {
   return new Promise((resolve, reject) => {
      console.log(`Making Request to ${location}`)
      if (location === 'Google') {
         resolve('Google says hi')
      } else {
         reject('We can only talk to Google')
      }
   })
}

function processRequest(response) {
   return new Promise((resolve) => {
      console.log('Processing response')
      resolve(`Extra Information: ${response}`)
   })
}

makeRequest('Google').then(response => {
   console.log('Response Received')
   return processRequest(response)
}).then(processedResponse => {
   console.log(processedResponse)
}).catch((error) => {
   console.log('Error occurred: ' + error)
})

// ===============================
// Syntax of Async Await functions
// ===============================

async function doWork(location) {
   try {
      const responce = await makeRequest(location)
      console.log('Response Received')
      const processedResponce = await processRequest(responce)
      console.log(processedResponce)
   } catch (error) {
      console.log('Error occurred:', error)
   }
}

doWork('Google')

// ==========================================
// Example of Async Await functions in fruits
// ==========================================

const fruitChecker = (fruitStatus) => {
   return new Promise((resolve, reject) => {
      console.log('Looking at the object')
      if (fruitStatus === 'apple' || 'maybe banana') {
         resolve('fruit')
      } else {
         reject('I have no idea what it is')
      }
   })
}

const colorChecker = (colour, responce) => {
   return new Promise((resolve) => {
      console.log('Analyzing the colour')
      if (responce === 'fruit') {
         if (colour === 'yellow') {
            resolve('probably a banana')
         } else {
            resolve('It is indeed a frui')
         }
      }
   })
}

const doFruitChecking = async (fruitStatus, colour) => {
   try {
      const responce = await fruitChecker(fruitStatus)
      console.log('Response Received')
      const processedResponce = await colorChecker(colour, responce)
      console.log(processedResponce)
   } catch (error) {
      console.log('Error occured:', error)
   }
}

doFruitChecking('apple', 'yellow')