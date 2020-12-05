const SerialPort = require('serialport')

const port = {
  name: null,
  options: []
}

exports.list = () => port.options

exports.select = (name) => port.name = name

exports.write = (message) => {
  let opened = new SerialPort(
    port.name || port.options[0].comName,
    { baudRate: 57600 },
    (error) => {
      console.log(`Error opening port ${name}: ${error}`)
  })

  opened.write(message)
}

setInterval(() => { 
  SerialPort.list((error, ports) => {
    if(error) console.log(`Error: ${error}`)

    port.options = ports
  })
}, 1000)