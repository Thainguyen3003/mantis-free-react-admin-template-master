import { RouterProvider } from 'react-router-dom';

// project imports
import router from 'routes';
import ThemeCustomization from 'themes';

import ScrollTop from 'components/ScrollTop';

// context
import { AuthProvider } from 'context/AuthContext';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  return (
    <ThemeCustomization>
      <AuthProvider>
        <ScrollTop>
          <RouterProvider router={router} />
        </ScrollTop>
      </AuthProvider>
    </ThemeCustomization>
  );
}
