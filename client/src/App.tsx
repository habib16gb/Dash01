import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { Navbar, Sidebar, ThemeSettings } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextsProvider";
import {
  AnalyticsDashboard,
  ApplicationChat,
  Components,
  DefaultDashboard,
  WidgetChart,
  WidgetData,
  ApplicationCalendar,
  ApplicationKanban,
  ApplicationCustomerList,
  ApplicationCustomerCards,
  ApplicationInvoiceCreate,
  ApplicationInvoiceDetails,
  ApplicationInvoiceList,
  ApplicationInvoiceEdit,
  ApplicationProfileUserProfile,
  ApplicationProfileAccountProfile,
  ApplicationECommerceProductDetails,
  ApplicationECommerceProducts,
  ApplicationECommerceProductList,
  ApplicationECommerceAddNew,
  ApplicationECommerceCheckout

} from "./pages";
import WidgetStatistics from "./pages/WidgetStatistics";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg '>
          <div className='fixed right-4 bottom-4 z-50'>
            <Tooltip title='settings' placement='top'>
              <IconButton
                aria-label='settings'
                onClick={() => setThemeSettings(true)}
              >
                <SettingsIcon
                  style={{ background: currentColor }}
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
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-1"
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
              <Navbar />
            </div>

            <div>{themeSettings && <ThemeSettings />}</div>
            <Routes>
              {/* Dashboard */}
              <Route path='/dashboard/default' element={<DefaultDashboard />} />
              <Route
                path='/dashboard/analytics'
                element={<AnalyticsDashboard />}
              />
              <Route path='/components' element={<Components />} />

              {/* Widgets */}
              <Route path='/widget/statistics' element={<WidgetStatistics />} />
              <Route path='/widget/data' element={<WidgetData />} />
              <Route path='/widget/chart' element={<WidgetChart />} />

              {/* Applications */}
              <Route path="/apps/chat" element={<ApplicationChat />} />
              <Route path="/apps/calendar" element={<ApplicationCalendar />} />
              <Route path="/apps/kanban" element={<ApplicationKanban />} />

              {/* Application Customer */}
              <Route path="/apps/customer/list" element={<ApplicationCustomerList />} />
              <Route path="/apps/customer/cards" element={<ApplicationCustomerCards />} />
              {/* Application Invoice */}
              <Route path="/apps/invoice/create" element={<ApplicationInvoiceCreate />} />
              <Route path="/apps/invoice/details" element={<ApplicationInvoiceDetails />} />
              <Route path="/apps/invoice/list" element={<ApplicationInvoiceList />} />
              <Route path="/apps/invoice/edit" element={<ApplicationInvoiceEdit />} />
              {/* Application Profile */}
              <Route path="/apps/profile/user profile" element={<ApplicationProfileUserProfile />} />
              <Route path="/apps/profile/account profile" element={<ApplicationProfileAccountProfile />} />          
              {/* Application E-Commerce */}
              <Route path="/apps/e-commerce/products" element={<ApplicationECommerceProducts />} />
              <Route path="/apps/e-commerce/product details" element={<ApplicationECommerceProductDetails />} />
              <Route path="/apps/e-commerce/product list" element={<ApplicationECommerceProductList />} />
              <Route path="/apps/e-commerce/add new product" element={<ApplicationECommerceAddNew />} />
              <Route path="/apps/e-commerce/checkout" element={<ApplicationECommerceCheckout />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
