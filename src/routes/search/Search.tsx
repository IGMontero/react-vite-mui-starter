import {
  Autocomplete,
  Button,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import { usePageEffect } from '../../core/page.js'

import {
  Props,
  SetState,
  State,
  useAutocompleteSearch,
  useState,
  useHandleAutocompleteInputChange
} from './Search.hooks.js'
import React, { useEffect } from 'react'

export default function Search(props: Props): JSX.Element {
  usePageEffect({ title: 'Search Medicine' })

  const [state, setState]: [State, SetState] = useState(props)
  const [open, setOpen] = React.useState(false)
  const [handleAutocompleteSearch, loadingAutocompleteSearch] =
    useAutocompleteSearch(state, setState)
  const handleAutocompleteInputChange =
    useHandleAutocompleteInputChange(setState)

  const canSearch =
    state.selected &&
    state.selected.length > 0 &&
    state.zipCode &&
    state.zipCode.length > 0

  const hasSearchResults = state.autocompleteResults.length > 0

  // const handleAutocompleteInputChange = async (
  //   evt: React.SyntheticEvent<Element, Event>,
  //   value: string | null
  // ) => {
  //   setState({ ...state, searchValue: value })
  // }

  const handleSearch = async () => {
    console.log('searching for: ', state.selected, ' and zip: ', state.zipCode)
  }

  const handleAutocompleteChange = async (
    evt: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setState({ ...state, selected: value })
  }

  useEffect(() => {
    handleAutocompleteSearch()
  }, [state.search, handleAutocompleteSearch])

  return (
    <Container sx={{ py: '15vh' }} maxWidth="md">
      <Typography sx={{ mb: 2 }} variant="h1" align="center">
        Save money on your medicine
      </Typography>

      <Typography sx={{ mb: 4 }} variant="h3" align="center">
        Search for your medicine and get a massive discount.
        <br /> Up to 80% savings!
      </Typography>

      <Stack
        spacing={1}
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Autocomplete
          fullWidth
          open={open}
          freeSolo
          value={state.search}
          onOpen={() => {
            setOpen(true)
          }}
          onClose={() => {
            setOpen(false)
          }}
          isOptionEqualToValue={(option, value) => option === value}
          getOptionLabel={(option) => option}
          options={state.autocompleteResults}
          loading={loadingAutocompleteSearch}
          filterOptions={(x) => x}
          autoComplete
          filterSelectedOptions
          noOptionsText="No drugs found"
          // componentName="search"
          inputValue={state.search}
          onInputChange={handleAutocompleteInputChange}
          onChange={handleAutocompleteChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Drug Name"
              name="search"
              InputProps={{
                ...params.InputProps,
                name: 'search',
                endAdornment: (
                  <React.Fragment>
                    {loadingAutocompleteSearch ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                )
              }}
            />
          )}
        />

        <TextField type="text" label="Zip Code" variant="outlined" />

        <Button
          variant="contained"
          size="large"
          onClick={handleSearch}
          disabled={!canSearch}
        >
          Search
        </Button>
      </Stack>
    </Container>
  )
}
