import React from 'react'

export function useHandleInputChange(setState: any) {
  return React.useCallback(
    function (event: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target as HTMLInputElement
      setState((prev: any) =>
        prev[name] === value ? prev : { ...prev, [name]: value }
      )
    },
    [setState]
  )
}
