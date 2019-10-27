const ComputerName = document.getElementById('ComputerName')
const PAT = document.getElementById('PAT')
const AgentPool = document.getElementById('AgentPool')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (ComputerName.value === '' || ComputerName.value == null || ComputerName.value.length != 9) {
    messages.push('Computer name sholuld have a format PC******* and should be 9 charactes long')
  }
  
  if (PAT.value === '' || PAT.value == null || PAT.value.length < 13) {
    messages.push('Please enter wheather you entered the correct PAT')
  }

  if (AgentPool.value === '' || AgentPool.value == null || AgentPool.value.length < 7) {
    messages.push('Please enter a valid agent pool')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})