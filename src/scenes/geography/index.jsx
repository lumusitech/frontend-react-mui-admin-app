import { GeographyChart, Header } from '@/components'
import { tokens } from '@/theme'
import { Box, useTheme } from '@mui/material'

export const Geography = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m='20px'>
      <Header title='Geography' subtitle='Simple Geography Chart' />

      <Box
        height='75vh'
        border={`1px solid ${colors.grey[100]}`}
        borderRadius='4px'
      >
        <GeographyChart />
      </Box>
    </Box>
  )
}
