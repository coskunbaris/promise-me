export const delay = ms  => new Promise(resolve => setTimeout(resolve(), ms))

export const repeat = ms => new Promise(resolve => setInterval(promise(), ms))