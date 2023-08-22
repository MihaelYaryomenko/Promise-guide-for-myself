// ==================
// Syntax of Promises
// ==================

const promise = new Promise((resolve, reject) => {
   const a = 1 + 1
   if (a === 3) {
      resolve('Succes')
   } else {
      reject('Reject')
   }
})

// ===================
// Calling the Promise
// ===================

promise.then((message) => {
   console.log('Our promise return:', message)
}).catch((message => {
   console.log('Our promies return:', message)
}))

// ===========================================
// Example of the code with callback functions
// ===========================================

// ===================
const isFruit = true;
const isYellow = true;
// ===================

const yellowFruitDetector = (resolveFunc, rejectFunc) => {
   if (isFruit) {
      if (isYellow) {
         resolveFunc('it probably a banana')
      } else {
         resolveFunc('it is a fruit')
      }
   } else {
      rejectFunc('I have no idea what it is')
   }
}

yellowFruitPromise((message) => {
   console.log('Morbing time: ' + message)
}, (error) => {
   console.log('Blunder resine now: ' + error)
})

// =========================================
// The same code with promises, much cleaner
// =========================================

const yellowFruitPromise = () => {
   return new Promise((resolve, reject) => {
      if (isFruit) {
         if (isYellow) {
            resolve('it probably a banana')
         } else {
            resolve('it is a fruit')
         }
      } else {
         reject('I have no idea what it is')
      }
   })
}

yellowFruitPromise().then((message) => {
   console.log('Morbing time: ' + message)
}).catch((error) => {
   console.log('Blunder resine now: ' + error)
})

// =========================
// couple of simple promises
// =========================

const terrariaComplete100 = new Promise((resolve, reject) => {
   setTimeout(() => resolve('Terraria is completed'), 3000)
})

const slayTheSpireComplete100 = new Promise((resolve, reject) => {
   resolve('Slay the Spire is completed')
})

const enterTheGungeonComplete100 = new Promise((resolve, reject) => {
   resolve('Enter the gungeon is completed')
})

// ================================================
// Method of calling every promise at the same time
// ================================================

Promise.all([
   terrariaComplete100,
   slayTheSpireComplete100,
   enterTheGungeonComplete100
]).then((messages) => {
   for (let i = 0; i < messages.length; i++) {
      console.log(messages[i])
   }
})

// =====================================
// Method of calling the fastest promise
// =====================================

Promise.race([
   terrariaComplete100,
   slayTheSpireComplete100,
   enterTheGungeonComplete100
]).then((message) => console.log(message))