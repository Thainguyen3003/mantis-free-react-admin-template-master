// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid sx={{ mb: -2.25 }} size={12}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid size={12}>
        <MainCard title="Content Dashboard">
          <Grid container>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis aut magni tenetur ipsam cupiditate blanditiis cum,
            inventore et iusto laudantium enim optio repellat, rem sed ab. Quo, quidem accusantium.
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
}
