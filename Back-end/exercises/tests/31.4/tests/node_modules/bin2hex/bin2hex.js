#!/usr/bin/env node
// Convert whatever is fed into stdin to hex.
process.stdin.setEncoding('hex')
process.stdin.pipe(process.stdout)
