import React from 'react'

export function useHandleAutocompleteInputChange(setState: SetState) {
  return React.useCallback(
    function (event: React.SyntheticEvent, value: string) {
      console.log(event.target)
      const { name } = event.target as EventTarget & { name: keyof State }
      console.log('NAME: ', name)
      setState((prev) =>
        prev[name] === value ? prev : { ...prev, [name]: value }
      )

      setState((prev) =>
        prev[name] === value ? prev : { ...prev, [name]: value }
      )
    },
    [setState]
  )
}

export function useState(props: Props) {
  return React.useState({
    autocompleteResults: [],
    error: undefined as string | null | undefined,
    searchResults: [],
    zipCode: '',
    search: '' as string | undefined,
    selected: undefined as string | null | undefined
  })
}

export function useAutocompleteSearch(
  state: State,
  setState: SetState
): [submit: () => Promise<void>, inFlight: boolean] {
  const [inFlight, setInFlight] = React.useState(false)

  return [
    React.useCallback(
      async function () {
        try {
          setInFlight(true)

          const value = state.search

          if (value) {
            const response: Response = await fetch(
              `https://api.discountdrugnetwork.com/gateway/Drug/Autocomplete?prefixText=${value}`,
              {
                headers: {
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjZhNDk0NzUyLWE2NTEtNDIxNC1hNzRkLTZiYzdmZDQ5MTE5ZSIsInVzZXJOYW1lIjoiNmE0OTQ3NTItYTY1MS00MjE0LWE3NGQtNmJjN2ZkNDkxMTllIiwiaWRlbnRpdHkiOiI2YTQ5NDc1Mi1hNjUxLTQyMTQtYTc0ZC02YmM3ZmQ0OTExOWUiLCJ1c2VySWQiOiI2YTQ5NDc1Mi1hNjUxLTQyMTQtYTc0ZC02YmM3ZmQ0OTExOWUiLCJ0ZW5hbnRJZCI6IjIyYWE2NmM2LWI0YzQtNGVjZi1hYjlhLTQzNzJjMzM4MzlmMCIsInVzZXJSb2xlIjoiQ2xpZW50Iiwicm9sZUlkIjoiY2NjNDc3NjMtMTFkZS00NzcwLWIxMjQtZmRmMmFiZTIxZmZmIiwidXNlcl9jbGFpbXMiOiJ7XCJpZFwiOiA2YTQ5NDc1Mi1hNjUxLTQyMTQtYTc0ZC02YmM3ZmQ0OTExOWV9IiwibmJmIjoxNjg5MTEwNjUzLCJleHAiOjE2ODkxMTE1NTMsImlhdCI6MTY4OTExMDY1MywiaXNzIjoiaHR0cHM6Ly9hcGkuZGlzY291bnRkcnVnbmV0d29yay5jb20iLCJhdWQiOiIwNjczMjVkYy00YTkwLTRlZjQtYTIyYy0wOTg2NzdmZGIyMTgifQ.wY5Eq0g2RiJ3ooqwy_vwB07aow1dNKvaurF0eEsYH-I`
                },
                credentials: 'include'
              }
            )

            if (response.ok && response.body) {
              const data = await response.json()
              const autocompleteResults = data.drugNames.map(
                (drugName: { drugName: string }) => drugName.drugName
              )
              setState((prev) => ({ ...prev, autocompleteResults }))
            }
          }
        } catch (err) {
          const error = (err as Error)?.message ?? 'Fetch failed.'
          console.error(error)
          setState((prev) => ({ ...prev, error }))
        } finally {
          setInFlight(false)
        }
      },
      [setState, state.search]
    ),
    inFlight
  ]
}

export type Props = object

export type AutocompleteResponse = {
  drugNames: {
    drugName: string
  }[]
}

export type State = ReturnType<typeof useState>[0]
export type SetState = ReturnType<typeof useState>[1]
export type Input = { name: keyof State; value: string }
