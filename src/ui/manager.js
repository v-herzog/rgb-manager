const SerialService = require('../services/serial.service')
const modes = require('../config/modes.js')

const html = {
  ports: document.getElementById('com-ports'),
  modes: document.getElementById('modes'),
  outputs: document.getElementById('outputs'),
  colors: [
    document.getElementById('primary-color'),
    document.getElementById('secundary-color'),
    document.getElementById('tertiary-color'),
  ]
}

const changePort = (value) => SerialService.select(value)

const changeMode = (value) => {
  let mode = modes.list.find(m => m.value == value)

  html.outputs.innerHTML = null

  mode.outputs.forEach(o => html.outputs.add(
    createOption(o.name, o.value)
  ))

  mode.colors.forEach((enable, index) => html.colors[index].disabled = !enable)
}

const update = () => {
  let message = {
    mode: html.modes.selectedOptions.item(0).value,
    output: html.outputs.selectedOptions.item(0).value,
    colors: [
      html.colors[0].value,
      html.colors[1].value,
      html.colors[2].value
    ]
  }

  let json = JSON.stringify(message)

  console.log(json)

  SerialService.write(json)
}

const createOption = (name, value) => {
  let option = document.createElement('option')
  option.text = name
  option.value = value
  return option
}

modes.list.forEach(m => html.modes.add(
  createOption(m.name, m.value)
))

setInterval(() => { 
  html.ports.innerHTML = null

  let ports = SerialService.list()

  if (ports.length > 0) {
    ports.forEach(p => html.ports.add(
      createOption(p.comName, p.comName))
    )
  } else {
    html.ports.add(
      createOption('No COM ports available', '')
    )
  }
}, 1000)