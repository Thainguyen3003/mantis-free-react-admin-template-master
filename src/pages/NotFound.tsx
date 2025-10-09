import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        gap: 2
      }}
    >
      <Typography variant="h1" color="primary" fontWeight={700}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Trang bạn tìm không tồn tại.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>
        Quay về trang chủ
      </Button>
    </Box>
  )
}
