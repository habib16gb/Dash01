import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { ChartCharts, Navbar, Sidebar } from "./components";
import {
  AnalyticsDashboard,
  ApplicationCalendar,
  ApplicationChat,
  ApplicationColorPicker,
  ApplicationCustomer,
  ApplicationECommerce,
  ApplicationEditor,
  ApplicationInvoice,
  ApplicationKanban,
  ApplicationProfile,
  ChartMap,
  Components,
  DefaultDashboard,
  Formlayout,
  FormMuiTable,
  Formplugins,
  FormValidation,
  FormWizard,
  PageAuthentication,
  PageContactUs,
  PageMaintenance,
  Pagepricing,
  WidgetChart,
  WidgetData,
} from "./pages";
import WidgetStatistics from "./pages/WidgetStatistics";
import FormReactTable from "./pages/FormReactTable";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-slate-900 '>
          <div className='fixed right-4 bottom-4 z-50'>
            <Tooltip title='settings' placement='top'>
              <IconButton aria-label='settings' onClick={() => {}}>
                <SettingsIcon
                  style={{ background: "blue" }}
                  className='text-3xl rounded-full hover:drop-shadow-xl p-1 hover:bg-white text-white'
                />
              </IconButton>
            </Tooltip>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white  '>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Navbar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-1"
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/dashboard/default' element={<DefaultDashboard />} />
              <Route
                path='/dashboard/analytics'
                element={<AnalyticsDashboard />}
              />
              <Route path='/components' element={<Components />} />

              {/* Widgets */}
              <Route
                path='/widgets/statistics'
                element={<WidgetStatistics />}
              />
              <Route path='/widgets/data' element={<WidgetData />} />
              <Route path='/widgets/chart' element={<WidgetChart />} />

              {/* Application */}
              <Route path='/application/chat' element={<ApplicationChat />} />
              <Route
                path='/application/calendar'
                element={<ApplicationCalendar />}
              />
              <Route
                path='/application/kanban'
                element={<ApplicationKanban />}
              />
              <Route
                path='/application/customer'
                element={<ApplicationCustomer />}
              />
              <Route
                path='/application/invoice'
                element={<ApplicationInvoice />}
              />
              <Route
                path='/application/profile'
                element={<ApplicationProfile />}
              />
              <Route
                path='/application/colorPicker'
                element={<ApplicationColorPicker />}
              />
              <Route
                path='/application/editor'
                element={<ApplicationEditor />}
              />
              <Route
                path='/application/eCommerce'
                element={<ApplicationECommerce />}
              />

              {/* Forms & Tables */}
              <Route path='/form/validation' element={<FormValidation />} />
              <Route path='/form/wizard' element={<FormWizard />} />
              <Route path='/form/layout' element={<Formlayout />} />
              <Route path='/form/plugins' element={<Formplugins />} />
              <Route path='/form/reactTable' element={<FormReactTable />} />
              <Route path='/form/muiTable' element={<FormMuiTable />} />

              {/* Charts & Map */}
              <Route path='/chart/charts' element={<ChartCharts />} />
              <Route path='/chart/map' element={<ChartMap />} />

              {/* Pages */}
              <Route
                path='/pages/authentication'
                element={<PageAuthentication />}
              />
              <Route path='/pages/maintenance' element={<PageMaintenance />} />
              <Route path='/pages/contactUs' element={<PageContactUs />} />
              <Route path='/pages/pricing' element={<Pagepricing />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
