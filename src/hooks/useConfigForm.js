import { useState } from 'react'

export const useConfigForm = () => {
  const [configForm, setConfigForm] = useState({
    titleChangeButton: 'Registrarse',
    prevTitle: 'Iniciar sesión',
    nextTitle: 'Iniciando sesión...',
    isSession: true
  })

  const handleChangeForm = () => {
    setConfigForm({
      titleChangeButton: !configForm.isSession ? 'Registrarse' : 'Iniciar sesión',
      prevTitle: !configForm.isSession ? 'Iniciar sesión' : 'Registrarse',
      nextTitle: !configForm.isSession ? 'Iniciando sesión...' : 'Registrandose...',
      isSession: !configForm.isSession
    })
  }
  return { handleChangeForm, configForm }
}